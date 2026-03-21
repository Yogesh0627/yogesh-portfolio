'use client'
import React from "react";
import { motion } from "framer-motion"
import { cn } from "@/utils";

interface SubHeadingProps {
    as?: "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode;
    className?: string
}

const SubHeading = ({ as: Tag = "h2", children, className }: SubHeadingProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 10,
                filter: "blur(10px)"
            }}
            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.2
            }}
            viewport={{
                once: true
            }}
        >
            <Tag className={cn("max-w-lg px-4 pt-4 text-sm text-secondary md:text-base", className)}>
                {children}
            </Tag>
        </motion.div>
    );
};

export {SubHeading};

