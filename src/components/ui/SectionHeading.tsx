'use client'
import { cn } from '@/utils'
import { motion } from 'framer-motion'
const SectionHeading = ({ children, delay = 0, className }: { children: string, delay?: number, className?: string }) => {
    return (
        <h2 className={cn("relative mt-4 w-fit max-w-lg text-sm font-normal md:text-base text-neutral-800 dark:text-neutral-300", className)}>
            <Background/>
            {children.split(" ").map((word, idx) => (
                <motion.span
                    initial={{
                        opacity: 0,
                        y: 5,
                        filter: "blur(2px)"
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)'
                    }}

                    transition={{
                        delay: delay + idx * 0.05,
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    viewport={{ once: true }}
                    className='inline-block'
                    key={idx}
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </h2>
    )
}

export {SectionHeading}

const Background = ()=>{

    return (
        <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1
        }}
        className='absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100 dark:bg-neutral-800'
        >
            <div className='absolute animate-pulse -top-px -left-px h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-700'></div>
            <div className='absolute animate-pulse -top-px -right-px h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-700'></div>
            <div className='absolute animate-pulse -bottom-px -left-px h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-700'></div>
            <div className='absolute animate-pulse -right-px -bottom-px h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-700'></div>
        </motion.div>
    )
}