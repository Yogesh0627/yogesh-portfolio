'use client'
import { IconDownload } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { cn } from "@/utils"

const ResumeButton = ({ className }: { className?: string }) => {
    return (
        <motion.a
            href="/Yogesh_CV.pdf"
            // target="_blank"
            rel="noopener noreferrer"
            download="Yogesh CV.pdf"
            aria-label="Download my resume (PDF)"
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            className={cn(
                "inline-flex w-fit items-center gap-2 rounded-md border border-neutral-200 bg-neutral-100 px-4 py-2 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset] dark:hover:bg-neutral-700",
                className
            )}
        >
            <IconDownload className="size-4" aria-hidden="true" />
            Download Resume
        </motion.a>
    )
}

export { ResumeButton }
