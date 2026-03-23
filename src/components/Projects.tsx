'use client'
import { motion } from "framer-motion"
import { ProjectType } from "@/types";
import { SectionHeading } from "./ui";
import projectsData from "@/data/projectsData.json"
import ExpandableChip from "./ExpandableChip";
import { IconBrandMongodb, IconBrandReact, IconBrandVercel } from "@tabler/icons-react";
import Image from "next/image";


export const Projects = ({ projects = projectsData }: { projects?: ProjectType[] }) => {


    return (
        <section id="projects" className="py-1" aria-labelledby="projects-heading">
            <div className="border-y border-neutral-100 my-4 px-4 py-6 shadow-section-inset dark:border-neutral-800 dark:shadow-section-inset">
                <SectionHeading delay={0.2} >A lifetime in projects</SectionHeading>

                <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
                    {projects.map((project, index) => (<div key={project.id}>

                        <motion.div key={project.title}
                            initial={{
                                opacity: 0,
                                filter: `blur(10px)`,
                                y: 10,
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 0px, rgba(25, 28, 33, 0.02) 0px 0px 0px 0px, rgba(25, 28, 33, 0.08) 0px 0px 0px 0px" // initially no shadow
                            }}
                            whileInView={{
                                opacity: 1,
                                filter: "blur(0px)",
                                y: 0
                            }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                boxShadow: "var(--shadow1)"
                            }}
                            className="group relative mb-4 rounded-2xl"
                        >
                            <img src={project.src} alt={project.title} className="w-full h-[300px] rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]" />
                            {/* ✅ Performance Win: Optimized Image */}
                            <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                                <div><h3 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-200">{project.title}</h3>
                                    <p className="mt-2 max-w-56 text-sm text-neutral-500 dark:text-neutral-400">{project.description}</p></div>
                                <ExpandableChip
                                    chipData={[
                                        { id: 1, logo: (<IconBrandReact className="size-4 dark:text-neutral-200" aria-hidden="true" />), title: "Next" },
                                        { id: 2, logo: (<IconBrandVercel className="size-4 dark:text-neutral-200" aria-hidden="true" />), title: "Vercel" },
                                        { id: 3, logo: (<IconBrandMongodb className="size-4 dark:text-neutral-200" aria-hidden="true" />), title: "MongoDB" },
                                    ]}
                                />
                            </div>
                        </motion.div>
                    </div>))}
                </div>
            </div>
        </section>
    )
}
