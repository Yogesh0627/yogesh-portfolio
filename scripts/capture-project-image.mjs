/**
 * Re-captures a project preview image from its live site at a true 1280x800 viewport.
 *
 * The rule this exists to enforce: screenshot the viewport AT the target size. Never
 * capture wider and resize to fit: that bakes pure-black letterbox bars into the PNG,
 * and the card then looks unfilled even though object-cover is working correctly.
 * check-project-images.mjs is the guard; this is the fix.
 *
 * Requires playwright-core (dev-only):   npm i -D playwright-core
 * It drives the Chrome already installed on this machine, so there is no browser download.
 *
 * Usage:
 *   npm run capture:images -- <slug> [options]
 *
 * Per-project quirks (carousel slides, slow pages) live in PRESETS below, so a slug on
 * its own is normally enough. Command-line flags override the preset.
 *
 *   --url=<url>        override the live URL (defaults to the project's `href`)
 *   --click=<selector> click something before capturing (dismiss a banner, pin a carousel)
 *   --expect=<text>    refuse to write unless this text is visible. Use with --click
 *   --scroll=<px>      scroll down before capturing
 *   --settle=<ms>      wait before capturing (default 4000; raise for slow hydration)
 *   --wait=<state>     goto wait: networkidle (default) | domcontentloaded | load
 *   --dry              write to scripts/.preview.png instead of public/, for eyeballing
 *
 * Examples:
 *   npm run capture:images -- candor
 *   npm run capture:images -- ecoexpress          # carousel pinning comes from PRESETS
 *   npm run capture:images -- claim-lens --dry    # preview without overwriting
 *
 * Then confirm with:  npm run check:images
 */

import { readFile } from "node:fs/promises"
import { existsSync, rmSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

const WIDTH = 1280
const HEIGHT = 800
const MAX_BAR_PX = 8
const BLACK_THRESHOLD = 8

const CHROME_CANDIDATES = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
]

/**
 * Per-project quirks, so the common case is just `npm run capture:images -- <slug>`.
 * Anything passed on the command line overrides these.
 */
const PRESETS = {
    ecoexpress: {
        // The hero carousel autoplays every 5.5s, so a plain capture lands on a random
        // slide; slide 4 is "Farm-fresh, at your door in hours". The page also keeps a
        // connection open and never reaches networkidle.
        wait: "domcontentloaded",
        settle: "6000",
        click: 'button[aria-label="Go to slide 4"]',
        expect: "Farm-fresh",
    },
}

const [slug, ...rest] = process.argv.slice(2)

const projects = JSON.parse(await readFile(path.join(root, "src/data/projectsData.json"), "utf8"))

if (!slug) {
    console.error("usage: npm run capture:images -- <slug> [--dry] [--click=…] [--expect=…]\n")
    console.error(`  slugs: ${projects.map((p) => p.slug).join(", ")}\n`)
    console.error("  one project at a time: this overwrites public/projects/<file>.")
    console.error("  add --dry first to preview into scripts/.preview.png without touching it.")
    process.exit(1)
}

const project = projects.find((p) => p.slug === slug)
if (!project) {
    console.error(`unknown slug "${slug}", have: ${projects.map((p) => p.slug).join(", ")}`)
    process.exit(1)
}

const preset = PRESETS[slug] ?? {}
const flag = (name, fallback) => {
    const hit = rest.find((a) => a.startsWith(`--${name}=`))
    if (hit) return hit.slice(name.length + 3)
    return preset[name] ?? fallback
}
const has = (name) => rest.includes(`--${name}`)

const url = flag("url", project.href)
const out = has("dry")
    ? path.join(root, "scripts/.preview.png")
    : path.join(root, "public", project.src)

const chrome = CHROME_CANDIDATES.find((p) => p && existsSync(p))
if (!chrome) {
    console.error("no Chrome/Edge found: set CHROME_PATH to the executable")
    process.exit(1)
}

let chromium
try {
    ({ chromium } = await import("playwright-core"))
} catch {
    console.error("playwright-core is not installed. Run:  npm i -D playwright-core")
    process.exit(1)
}

console.log(`  ${slug}: ${url} -> ${path.relative(root, out)}`)

const browser = await chromium.launch({ executablePath: chrome, headless: true })
const ctx = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
    colorScheme: "dark",
    reducedMotion: "reduce",
})
const page = await ctx.newPage()

try {
    await page.goto(url, { waitUntil: flag("wait", "networkidle"), timeout: 60000 })
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(Number(flag("settle", 4000)))

    const click = flag("click")
    if (click) {
        // Hovering first pauses any autoplaying carousel, so the click can't be
        // overtaken by its timer. Harmless on static pages.
        const target = page.locator(click).first()
        await target.hover({ timeout: 15000 }).catch(() => {})
        await target.click({ timeout: 15000 })
        await page.waitForTimeout(1200)
    }

    const scroll = flag("scroll")
    if (scroll) {
        await page.evaluate((y) => window.scrollTo(0, y), Number(scroll))
        await page.waitForTimeout(800)
    }

    const expect = flag("expect")
    if (expect) {
        const seen = await page.getByText(expect).first().isVisible().catch(() => false)
        console.log(`  expect "${expect}": ${seen ? "visible" : "NOT VISIBLE"}`)
        if (!seen) throw new Error("expected content not on screen: refusing to write a wrong capture")
    }

    const buffer = await page.screenshot({ type: "png" })   // viewport-only: never fullPage

    // Same check the guard runs, before the file lands rather than after.
    const sharp = (await import("sharp")).default
    const { data, info } = await sharp(buffer).raw().toBuffer({ resolveWithObject: true })
    const isBlackRow = (y) => {
        for (let x = 0; x < info.width; x += 7) {
            const i = (y * info.width + x) * info.channels
            if (data[i] > BLACK_THRESHOLD || data[i + 1] > BLACK_THRESHOLD || data[i + 2] > BLACK_THRESHOLD) return false
        }
        return true
    }
    let top = 0
    while (top < info.height && isBlackRow(top)) top++
    let bottom = 0
    while (bottom < info.height && isBlackRow(info.height - 1 - bottom)) bottom++

    console.log(`  ${info.width}x${info.height}  bars ${top}/${bottom}`)
    if (top > MAX_BAR_PX || bottom > MAX_BAR_PX) {
        throw new Error(`letterboxed (${top}px/${bottom}px): the page is shorter than the viewport, not a capture bug`)
    }

    await sharp(buffer).toFile(out)
    console.log(`  wrote ${path.relative(root, out)}`)

    // next/image caches optimized variants for 4h keyed by URL, which does not change
    // when the file behind it does. Without this the old image keeps rendering in dev.
    if (!has("dry")) {
        for (const dir of [".next/dev/cache/images", ".next/cache/images"]) {
            const full = path.join(root, dir)
            if (existsSync(full)) {
                rmSync(full, { recursive: true, force: true })
                console.log(`  cleared ${dir}`)
            }
        }
    }
} finally {
    await browser.close()
}
