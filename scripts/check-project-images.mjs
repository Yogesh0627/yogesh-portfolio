/**
 * Guards the project preview images referenced by src/data/projectsData.json.
 *
 * Three failure modes this catches, all of which have bitten us:
 *   1. missing file        — next/image 404s silently at runtime, nothing fails the build
 *   2. wrong aspect ratio  — the card/hero box is aspect-16/10 with object-cover, so a
 *                            wider image gets its sides sliced off
 *   3. letterboxed content — a screenshot resized-to-fit instead of re-captured carries
 *                            pure-black bars inside the file, so the frame looks unfilled
 *                            even though object-cover is filling it correctly
 *
 * Runs as `prebuild`, so `npm run build` fails loudly rather than shipping a broken card.
 */

import { readFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

const TARGET_RATIO = 16 / 10
const RATIO_TOLERANCE = 0.01
// A dark navbar is not a letterbox bar: candor's top row is (17,24,39). Only near-pure
// black counts, and only a run long enough to be padding rather than a UI element.
const BLACK_THRESHOLD = 8
const MAX_BAR_PX = 8

const isPureBlackRow = (px, width, y) => {
    for (let x = 0; x < width; x += 7) {
        const [r, g, b] = px(x, y)
        if (r > BLACK_THRESHOLD || g > BLACK_THRESHOLD || b > BLACK_THRESHOLD) return false
    }
    return true
}

const inspect = async (file) => {
    const image = sharp(file)
    const { width, height } = await image.metadata()
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true })
    const px = (x, y) => {
        const i = (y * width + x) * info.channels
        return [data[i], data[i + 1], data[i + 2]]
    }

    let top = 0
    while (top < height && isPureBlackRow(px, width, top)) top++
    let bottom = 0
    while (bottom < height && isPureBlackRow(px, width, height - 1 - bottom)) bottom++

    return { width, height, top, bottom }
}

const projects = JSON.parse(await readFile(path.join(root, "src/data/projectsData.json"), "utf8"))
const failures = []

for (const project of projects) {
    const label = project.slug ?? project.title
    const file = path.join(root, "public", project.src)

    if (!existsSync(file)) {
        failures.push(`${label}: missing image — expected public${project.src}`)
        continue
    }

    const { width, height, top, bottom } = await inspect(file)
    const ratio = width / height

    if (Math.abs(ratio - TARGET_RATIO) > RATIO_TOLERANCE) {
        failures.push(
            `${label}: ${width}x${height} is ${ratio.toFixed(3)}, needs ${TARGET_RATIO} (16:10) — ` +
            `object-cover will crop ${Math.round((1 - TARGET_RATIO / ratio) * 100)}% off the sides`
        )
    }

    if (top > MAX_BAR_PX || bottom > MAX_BAR_PX) {
        failures.push(
            `${label}: letterboxed — ${top}px top / ${bottom}px bottom of pure black baked into the file. ` +
            `Re-capture at a 1280x800 viewport instead of resizing a wider shot to fit.`
        )
    }

    const status = failures.some((f) => f.startsWith(`${label}:`)) ? "FAIL" : "ok  "
    console.log(`  ${status} ${label.padEnd(12)} ${width}x${height}  bars ${top}/${bottom}`)
}

if (failures.length) {
    console.error("\nProject image check failed:\n")
    for (const failure of failures) console.error(`  - ${failure}`)
    console.error("")
    process.exit(1)
}

console.log("\nAll project images OK.\n")
