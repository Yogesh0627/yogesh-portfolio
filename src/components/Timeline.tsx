'use client'
import type React from "react"
import { motion, useInView } from "framer-motion"
import { Children, useRef } from "react";
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
        title: "2025",
        content: [
            {
                title: "Reached 20K MRR with my VS Code fork",
                description: "Reached the revenue milestone of $20k MRR with my VSCode fork."
            },
            {
                title: "Launched AI-powered PMS Cycle Creator",
                description: "Integrated an intelligent AI agent that automates performance cycle creation using natural language prompts."
            },
            {
                title: "Scaled my SaaS to 10,000 active users",
                description: "Optimized infrastructure and onboarding flows to achieve 10K+ monthly active users."
            }
        ]
    },
    {
        title: "2024",
        content: [
            {
                title: "Built and launched PMS SaaS MVP",
                description: "Developed and deployed the initial version of my performance management system with dynamic review cycles."
            },
            {
                title: "Introduced AI-driven FAQ chatbot",
                description: "Built a modular FAQ chatbot that helps users explore system features interactively."
            },
            {
                title: "Adopted a microservices architecture",
                description: "Refactored monolithic backend into independent microservices for better scalability."
            }
        ]
    },
    {
        title: "2023",
        content: [
            {
                title: "Developed teacher portfolio app",
                description: "Built a full-stack application allowing teachers to manage lectures, blogs, and student feedback."
            },
            {
                title: "Improved workflow automation at Agami Technologies",
                description: "Implemented scalable front-end solutions and optimized performance across multiple projects."
            },
            {
                title: "Earned multiple HackerRank certifications",
                description: "Completed problem-solving and full-stack certifications to strengthen coding foundations."
            }
        ]
    },
    {
        title: "2022",
        content: [
            {
                title: "Graduated from Masai School",
                description: "Completed intensive full-stack web development training, focusing on React, Node.js, and MongoDB."
            },
            {
                title: "Started my first professional development role",
                description: "Joined a growing tech startup and began building real-world SaaS applications."
            }
        ]
    },
    {
        title: "2021",
        content: [
            {
                title: "Started learning full-stack development",
                description: "Began my journey into web development, exploring JavaScript, React, and Express."
            },
            {
                title: "Built my first personal project",
                description: "Created a task management web app using HTML, CSS, and vanilla JavaScript."
            }
        ]
    }
];

const Timeline = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })


    return (
        <div ref={ref} className="py-6 px-4 my-6 border-y border-neutral-100 shadow-section-inset dark:border-neutral-800 dark:shadow-section-inset">
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

export {Timeline}


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
        <IconCircleCheckFilled className="h-4 w-4 mt-1 text-neutral-500" />
        {children}
    </motion.div>
}