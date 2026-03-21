"use client"
import { motion, useMotionValueEvent, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/utils";
import { Container } from "./Container";
import { Link } from "next-view-transitions"
import { useRouter } from 'next/navigation';
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";

const Navbar = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState<boolean>(false);
    const router = useRouter();
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Wait for mount to avoid hydration mismatch
    useEffect(() => setMounted(true), [])

    const y = useTransform(scrollY, [0, 100], [0, 10])
    const width = useTransform(scrollY, [0, 100], ["55%", "45%"])

    const switchTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    const navItems = [
        { title: "About", href: "/about" },
        { title: "Projects", href: "/projects" },
        { title: "Blog", href: "/blog" },
        { title: "Contact", href: "/contact" }
    ];

    return (
        <Container className="pt-10 md:pt-0 ">
            <div className="fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-4xl md:block">
                <motion.nav
                    style={{
                        boxShadow: scrolled ? "var(--shadow1)" : "none",
                        width,
                        y,
                    }}
                    className={cn(
                        "fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full backdrop-blur-sm bg-white/50 px-3 py-2 dark:bg-neutral-900/50"
                    )}
                >
                    <img
                        src="/luffy.jpg"
                        alt="Luffy"
                        className="h-10 w-10 rounded-full cursor-pointer object-cover"
                        onClick={() => router.push("/")}
                    />

                    <div className="flex items-center gap-1">
                        {/* --- Theme Toggle Start --- */}
                        <button
                            onClick={switchTheme}
                            className="relative flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mounted && resolvedTheme !== "dark" ? (
                                    <motion.span
                                        key="moon"
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <IconMoon className="size-4 dark:text-secondary text-neutral-700" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="sun"
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <IconSun className="size-4 text-neutral-700 dark:text-secondary" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                        {/* --- Theme Toggle End --- */}

                        {navItems.map((nav, index) => (
                            <Link
                                key={nav.href}
                                href={nav.href}
                                className="relative px-2 py-1 text-sm transition-colors"
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {hovered === index && (
                                    <motion.span
                                        layoutId="hover-span"
                                        className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 text-primary font-medium">{nav.title}</span>
                            </Link>
                        ))}
                    </div>
                </motion.nav>
            </div>

            <nav className="fixed top-0 left-0 z-50 block w-full border-b border-neutral-100 bg-white md:hidden dark:border-neutral-800 dark:bg-neutral-900">

                <div className="flex w-full items-center justify-between px-4 py-3">
                    <img
                        src="/luffy.jpg"
                        alt="Luffy"
                        className="h-10 w-10 rounded-full cursor-pointer object-cover"
                        onClick={() => router.push("/")}
                    />

                    <button className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-190 cursor-pointer">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>

                    </button>
                </div>

                <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-neutral-900">
                    <div className="flex w-full items-center justify-end p-4">
                        <button className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center gap-8">
                        {navItems.map((nav, index) => (
                            <Link
                                key={nav.href}
                                href={nav.href}
                                className="relative px-2 py-1 text-sm transition-colors"
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <span className="text-2xl font-medium text-neutral-800 transition-colors hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400">{nav.title}</span>
                            </Link>
                        ))}

                        <div>
                            <button
                            onClick={switchTheme}
                            className="flex items-center rounded-md px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                <AnimatePresence mode="wait" initial={false}>
                                    {mounted && resolvedTheme !== "dark" ? (
                                        <motion.span
                                            key="moon"
                                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IconMoon className="size-4 dark:text-secondary text-neutral-700" />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="sun"
                                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IconSun className="size-4 text-neutral-700 dark:text-secondary" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </Container>
    );
};

export { Navbar };