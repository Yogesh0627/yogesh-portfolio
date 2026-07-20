'use client'
import { motion } from "framer-motion"
import { ReactElement } from "react"
import { SectionHeading } from "./ui"
import {
    IconApi,
    IconBrandCloudflare,
    IconBrandGit,
    IconBrandGithub,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandOpenai,
    IconBrandPrisma,
    IconBrandReact,
    IconBrandRedux,
    IconBrandTailwind,
    IconBrandTypescript,
    IconBrandVercel,
    IconBrandVite,
    IconBrandVue,
    IconCoffee,
    IconBrandDocker,
    IconBrandAws,
    IconComponents,
    IconDatabase,
    IconFileTypeXml,
    IconFlame,
    IconLeaf,
    IconMasksTheater,
    IconPlugConnected,
    IconServer,
    IconShieldCheck,
    IconSparkles,
    IconStack2,
    IconTestPipe,
    IconVersions,
} from "@tabler/icons-react"

type Skill = { title: string; logo: ReactElement }
type SkillGroup = { category: string; skills: Skill[] }

const iconClass = "size-4 shrink-0 text-neutral-600 dark:text-neutral-300"

const skillGroups: SkillGroup[] = [
    {
        category: "Frontend",
        skills: [
            { title: "React", logo: <IconBrandReact className={iconClass} aria-hidden="true" /> },
            { title: "Next.js", logo: <IconBrandNextjs className={iconClass} aria-hidden="true" /> },
            { title: "TypeScript", logo: <IconBrandTypescript className={iconClass} aria-hidden="true" /> },
            { title: "JavaScript", logo: <IconBrandJavascript className={iconClass} aria-hidden="true" /> },
            { title: "Redux Toolkit", logo: <IconBrandRedux className={iconClass} aria-hidden="true" /> },
            { title: "TanStack Query", logo: <IconStack2 className={iconClass} aria-hidden="true" /> },
            { title: "Vue.js", logo: <IconBrandVue className={iconClass} aria-hidden="true" /> },
            { title: "Tailwind CSS", logo: <IconBrandTailwind className={iconClass} aria-hidden="true" /> },
            { title: "MUI", logo: <IconComponents className={iconClass} aria-hidden="true" /> },
            { title: "Vite", logo: <IconBrandVite className={iconClass} aria-hidden="true" /> },
        ],
    },
    {
        category: "Backend",
        skills: [
            { title: "Node.js", logo: <IconBrandNodejs className={iconClass} aria-hidden="true" /> },
            { title: "Express.js", logo: <IconServer className={iconClass} aria-hidden="true" /> },
            { title: "Java", logo: <IconCoffee className={iconClass} aria-hidden="true" /> },
            { title: "Spring Boot", logo: <IconLeaf className={iconClass} aria-hidden="true" /> },
            { title: "Spring Security", logo: <IconShieldCheck className={iconClass} aria-hidden="true" /> },
            { title: "Hono", logo: <IconFlame className={iconClass} aria-hidden="true" /> },
            { title: "REST APIs", logo: <IconApi className={iconClass} aria-hidden="true" /> },
            { title: "Socket.io", logo: <IconPlugConnected className={iconClass} aria-hidden="true" /> },
            { title: "Zod", logo: <IconShieldCheck className={iconClass} aria-hidden="true" /> },
        ],
    },
    {
        category: "Databases & Caching",
        skills: [
            { title: "MongoDB", logo: <IconBrandMongodb className={iconClass} aria-hidden="true" /> },
            { title: "PostgreSQL", logo: <IconDatabase className={iconClass} aria-hidden="true" /> },
            { title: "MySQL", logo: <IconDatabase className={iconClass} aria-hidden="true" /> },
            { title: "Prisma", logo: <IconBrandPrisma className={iconClass} aria-hidden="true" /> },
            { title: "JPA / Hibernate", logo: <IconDatabase className={iconClass} aria-hidden="true" /> },
            { title: "Flyway", logo: <IconVersions className={iconClass} aria-hidden="true" /> },
            { title: "Redis", logo: <IconServer className={iconClass} aria-hidden="true" /> },
        ],
    },
    {
        category: "AI Integrations",
        skills: [
            { title: "Google Gemini", logo: <IconSparkles className={iconClass} aria-hidden="true" /> },
            { title: "OpenAI", logo: <IconBrandOpenai className={iconClass} aria-hidden="true" /> },
            { title: "Vercel AI SDK", logo: <IconBrandVercel className={iconClass} aria-hidden="true" /> },
            { title: "Spring AI", logo: <IconLeaf className={iconClass} aria-hidden="true" /> },
        ],
    },
    {
        category: "Testing & Tools",
        skills: [
            { title: "Vitest", logo: <IconTestPipe className={iconClass} aria-hidden="true" /> },
            { title: "Jest", logo: <IconTestPipe className={iconClass} aria-hidden="true" /> },
            { title: "Playwright", logo: <IconMasksTheater className={iconClass} aria-hidden="true" /> },
            { title: "Git", logo: <IconBrandGit className={iconClass} aria-hidden="true" /> },
            { title: "GitHub Actions", logo: <IconBrandGithub className={iconClass} aria-hidden="true" /> },
            { title: "Docker", logo: <IconBrandDocker className={iconClass} aria-hidden="true" /> },
            { title: "Maven", logo: <IconFileTypeXml className={iconClass} aria-hidden="true" /> },
            { title: "AWS S3 / R2", logo: <IconBrandAws className={iconClass} aria-hidden="true" /> },
            { title: "Cloudflare Workers", logo: <IconBrandCloudflare className={iconClass} aria-hidden="true" /> },
            { title: "Vercel", logo: <IconBrandVercel className={iconClass} aria-hidden="true" /> },
        ],
    },
]

const Skills = () => {
    return (
        <section id="skills" className="py-1" aria-labelledby="skills-heading">
            <div className="border-y border-neutral-100 my-4 px-4 py-6 shadow-section-inset dark:border-neutral-800 dark:shadow-section-inset">
                <SectionHeading delay={0.2}>Skills &amp; technologies</SectionHeading>

                <div className="flex flex-col gap-6 py-6">
                    {skillGroups.map((group) => (
                        <div key={group.category}>
                            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                                {group.category}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2" role="list">
                                {group.skills.map((skill, idx) => (
                                    <motion.div
                                        key={skill.title}
                                        role="listitem"
                                        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{ duration: 0.3, delay: idx * 0.04, ease: "easeInOut" }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700 shadow-custom transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                                    >
                                        {skill.logo}
                                        {skill.title}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export { Skills }
