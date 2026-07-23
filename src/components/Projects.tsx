'use client'
import { motion } from "framer-motion"
import { ProjectType } from "@/types";
import { SectionHeading } from "./ui";
import projectsData from "@/data/projectsData.json"
import ExpandableChip from "./ExpandableChip";
import {
    IconBrandGithub,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandOpenai,
    IconBrandPrisma,
    IconBrandReact,
    IconBrandTypescript,
    IconBrandVite,
    IconBinary,
    IconCode,
    IconDatabase,
    IconArrowRight,
    IconExternalLink,
    IconFlame,
    IconLeaf,
    IconCoffee,
    IconBrandPython,
    IconServer,
    IconSparkles,
} from "@tabler/icons-react";
import { ReactElement } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";

const chipClass = "size-4 shrink-0 dark:text-neutral-200"

const techIcon: Record<string, ReactElement> = {
    "Next.js": <IconBrandNextjs className={chipClass} aria-hidden="true" />,
    "React": <IconBrandReact className={chipClass} aria-hidden="true" />,
    "TypeScript": <IconBrandTypescript className={chipClass} aria-hidden="true" />,
    "Node.js": <IconBrandNodejs className={chipClass} aria-hidden="true" />,
    "Express.js": <IconServer className={chipClass} aria-hidden="true" />,
    "MongoDB": <IconBrandMongodb className={chipClass} aria-hidden="true" />,
    "PostgreSQL": <IconDatabase className={chipClass} aria-hidden="true" />,
    "Prisma": <IconBrandPrisma className={chipClass} aria-hidden="true" />,
    "Redis": <IconDatabase className={chipClass} aria-hidden="true" />,
    "Hono": <IconFlame className={chipClass} aria-hidden="true" />,
    "Java": <IconCoffee className={chipClass} aria-hidden="true" />,
    "Spring Boot": <IconLeaf className={chipClass} aria-hidden="true" />,
    "Python": <IconBrandPython className={chipClass} aria-hidden="true" />,
    "Gemini": <IconSparkles className={chipClass} aria-hidden="true" />,
    "OpenAI": <IconBrandOpenai className={chipClass} aria-hidden="true" />,
    "Vite": <IconBrandVite className={chipClass} aria-hidden="true" />,
    "SQLite": <IconDatabase className={chipClass} aria-hidden="true" />,
    "WebAssembly": <IconBinary className={chipClass} aria-hidden="true" />,
}

const buildChips = (tech: string[] = []) =>
    tech.map((title, idx) => ({
        id: idx,
        title,
        logo: techIcon[title] ?? <IconCode className={chipClass} aria-hidden="true" />,
    }))

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
                            <Link href={project.slug ? `/projects/${project.slug}` : project.href} aria-label={`View ${project.title} case study`}>
                                <Image
                                    src={project.src}
                                    alt={`${project.title} preview`}
                                    width={640}
                                    height={400}
                                    className="aspect-16/10 w-full rounded-xl border border-neutral-200 object-cover object-top transition duration-200 group-hover:scale-[1.02] dark:border-neutral-800"
                                />
                            </Link>
                            <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                                <div>
                                    <Link href={project.slug ? `/projects/${project.slug}` : project.href} className="z-20 mt-2 block w-fit font-medium tracking-tight text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-50">
                                        <h3>{project.title}</h3>
                                    </Link>
                                    <p className="mt-2 line-clamp-3 text-sm text-neutral-500 dark:text-neutral-400">{project.description}</p>
                                </div>
                                <ExpandableChip chipData={buildChips(project.tech)} />
                                {project.slug && (
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="group/cs mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-50"
                                    >
                                        View case study
                                        <IconArrowRight className="size-4 transition-transform group-hover/cs:translate-x-0.5" aria-hidden="true" />
                                    </Link>
                                )}
                                <div className="mt-3 flex items-center gap-4">
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${project.title} live`}
                                        className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                                    >
                                        <IconExternalLink className="size-4" aria-hidden="true" />
                                        Live
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} source on GitHub`}
                                            className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                                        >
                                            <IconBrandGithub className="size-4" aria-hidden="true" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>))}
                </div>
            </div>
        </section>
    )
}
