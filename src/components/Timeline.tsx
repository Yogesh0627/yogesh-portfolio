'use client'
import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/utils";
import { SectionHeading } from "./ui";



interface TimelineDataType {
    title: string;
    content: {
        title: string
        description?: string | React.ReactNode;
    }[];
}

const timelineData: TimelineDataType[] = [
    {
        title: "2026",
        content: [
            {
                title: "Shipped EcoExpress — an AI-assisted organic grocery platform",
                description: "Stepped outside the JS stack to build a Java 21 / Spring Boot modular monolith behind a Next.js storefront, pushing the money- and stock-critical rules down into Postgres constraints so a bug in application code can't corrupt an order or oversell inventory."
            },
            {
                title: "Led a backend performance overhaul at WoCo",
                description: "Refactored god-controllers into a clean layered architecture, raised the codebase's documented quality score from 4.5 to 8.6/10, and cut authenticated-request overhead ~4× with a Redis cache and 44 MongoDB indexes."
            },
            {
                title: "Relaunched Candor — an AI-coached feedback platform",
                description: "Completely rebuilt a project I first started in 2024 — anonymous feedback with Gemini-powered moderation and an AI growth coach (Next.js, MongoDB, Redis)."
            },
            {
                title: "Rebuilt InsightBlog — an AI publishing platform",
                description: "Revamped my developer publishing platform end-to-end, adding an AI writing assistant and analytics on Hono + Prisma + Cloudflare Workers."
            }
        ]
    },
    {
        title: "2025",
        content: [
            {
                title: "Became the top frontend contributor on WoCo PMS",
                description: "Owned the frontend architecture of the multi-tenant HR platform — a typed API service layer, route-level code-splitting, and skeleton loaders for a fast, polished UI."
            }
        ]
    },
    {
        title: "2024",
        content: [
            {
                title: "Joined Work Companion (WoCo) as a Software Engineer",
                description: "Started as a core engineer on WoCo PMS, a multi-tenant HR performance-management platform built with React, TypeScript, and Node.js."
            },
            {
                title: "Software Specialist at Agami Technologies",
                description: "Integrated OpenAI into the BeGenieus platform and delivered features across modules while collaborating closely with QA and product teams."
            },
            {
                title: "Completed my B.Tech in Mechanical Engineering",
                description: "Graduated from Ganga Institute of Technology & Management (MDU) while transitioning full-time into software engineering."
            }
        ]
    },
    {
        title: "2023",
        content: [
            {
                title: "Completed intensive full-stack training",
                description: "Sharpened my engineering fundamentals through the Masai School scholar program and the 100x Devs full-stack program — React, Node.js, and MongoDB."
            },
            {
                title: "Built my first full-stack projects",
                description: "Started shipping real-world web applications end-to-end, from database schema and APIs to the UI."
            }
        ]
    }
];

const Timeline = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })


    return (
        <div ref={ref} aria-label="Professional Timeline" className="py-6 px-4 my-6 border-y border-neutral-100 shadow-section-inset dark:border-neutral-800 dark:shadow-section-inset">
            <SectionHeading className="mb-10">
                Here's the timeline of my achievements.
            </SectionHeading>
            {timelineData.map((year, index) => (
                <div key={year.title} className="mb-4">
                    <motion.h3 className="font-bold text-primary px-2 py-0.5 mb-2 rounded-md w-fit shadow-custom"
                        // style={{ boxShadow: "var(--shadow1)" }}

                        initial={{
                            filter: 'blur(100)px',
                            opacity: 0
                        }}
                        animate={{
                            filter: isInView ? 'blur(0px)' : 'blur(10px)',
                            opacity: isInView ? 1 : 0
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.1 * index

                        }}
                    >{year.title}</motion.h3>

                    <div className="flex flex-col gap-4">

                        {year.content.map((item, idx) => <div key={item.title} className="pl-4">

                            <Step isInView={isInView} idx={idx}>
                                <motion.h4
                                    initial={{
                                        opacity: 0,
                                        y: -10
                                    }}
                                    animate={{
                                        opacity: isInView ? 1 : 0,
                                        y: isInView ? 0 : -10
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                        delay: 0.2 * idx
                                    }}
                                    className="text-neutral-600 dark:text-neutral-400"
                                >{item.title}</motion.h4>
                            </Step>


                            {item.description && <motion.p
                                initial={{
                                    opacity: 0,
                                    y: -10
                                }}
                                animate={{
                                    opacity: isInView ? 1 : 0,
                                    y: isInView ? 0 : -10
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                    delay: 0.3 * idx
                                }}
                                className="pt-1 pl-6 text-sm text-neutral-400 dark:text-neutral-500">{item.description}</motion.p>}
                        </div>)}
                    </div>


                </div>
            ))}</div>
    )
}

export { Timeline }


const Step = ({ className, children, isInView, idx }: { className?: string, children?: React.ReactNode, isInView: boolean, idx: number }) => {
    return <motion.div
        initial={{
            opacity: 0,
            y: -10
        }}
        animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : -10
        }}
        transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.2 * idx
        }}
        className={cn("flex items-start gap-2", className)}>
        <IconCircleCheckFilled className="h-4 w-4 mt-1 text-neutral-500" aria-hidden="true" />
        {children}
    </motion.div>
}