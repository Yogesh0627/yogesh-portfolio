import { Scales } from "@/components"
import { Container, Heading, SectionHeading, SubHeading } from "@/components/ui"
import projectsData from "@/data/projectsData.json"
import { ProjectType } from "@/types"
import { IconArrowLeft, IconBrandGithub, IconCircleCheck, IconExternalLink } from "@tabler/icons-react"
import { Metadata } from "next"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { notFound } from "next/navigation"

const projects = projectsData as ProjectType[]

const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export function generateStaticParams() {
    return projects.filter((p) => p.slug).map((p) => ({ slug: p.slug as string }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const project = getProject(slug)

    if (!project) return { title: "Project not found" }

    return {
        title: project.title,
        description: project.tagline ?? project.description,
        keywords: project.tech,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            title: `${project.title} | Yogesh Chauhan`,
            description: project.tagline ?? project.description,
            type: "article",
            url: `/projects/${project.slug}`,
            images: [{ url: project.src }],
        },
    }
}

const ProjectCaseStudy = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const project = getProject(slug)

    if (!project) notFound()

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.overview ?? project.description,
        "url": `https://yogeshchauhan.dev/projects/${project.slug}`,
        "image": `https://yogeshchauhan.dev${project.src}`,
        "applicationCategory": "WebApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "author": {
            "@type": "Person",
            "name": "Yogesh Chauhan",
            "url": "https://yogeshchauhan.dev",
        },
    }

    return (
        <div className="flex min-h-screen items-start justify-start">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Container className="min-h-screen pt-10 px-4 md:px-8 md:pt-20 md:pb-10">
                <Scales />

                <Link
                    href="/projects"
                    className="mx-4 mb-2 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                    <IconArrowLeft className="size-4" aria-hidden="true" />
                    Back to projects
                </Link>

                <Heading>{project.title}</Heading>
                {project.tagline && <SubHeading>{project.tagline}</SubHeading>}

                {/* Meta + actions */}
                <div className="mt-4 flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                        {project.year && <span>{project.year}</span>}
                        {project.year && project.role && <span aria-hidden="true">·</span>}
                        {project.role && <span>{project.role}</span>}
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset] dark:hover:bg-neutral-700"
                        >
                            <IconExternalLink className="size-4" aria-hidden="true" />
                            {project.github ? "Live Demo" : "Visit Site"}
                        </a>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset] dark:hover:bg-neutral-700"
                            >
                                <IconBrandGithub className="size-4" aria-hidden="true" />
                                View Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Hero image */}
                <div className="mt-6 px-4">
                    <Image
                        src={project.src}
                        alt={`${project.title} preview`}
                        width={1280}
                        height={800}
                        priority
                        className="aspect-16/10 w-full rounded-xl border border-neutral-200 object-cover object-top dark:border-neutral-800"
                    />
                </div>

                {project.overview && (
                    <Section title="Overview">
                        <Prose>{project.overview}</Prose>
                    </Section>
                )}

                {project.problem && (
                    <Section title="The problem">
                        <Prose>{project.problem}</Prose>
                    </Section>
                )}

                {project.solution && (
                    <Section title="The solution">
                        <Prose>{project.solution}</Prose>
                    </Section>
                )}

                {project.features && project.features.length > 0 && (
                    <Section title="Key features">
                        <ul className="mt-4 flex flex-col gap-3">
                            {project.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5">
                                    <IconCircleCheck className="mt-0.5 size-4 shrink-0 text-neutral-400 dark:text-neutral-500" aria-hidden="true" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </Section>
                )}

                {project.stack && project.stack.length > 0 && (
                    <Section title="Tech stack">
                        <div className="mt-4 flex flex-col gap-5">
                            {project.stack.map((group) => (
                                <div key={group.category}>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                                        {group.category}
                                    </p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                {project.contribution && project.contribution.length > 0 && (
                    <Section title="My role & impact">
                        <ul className="mt-4 flex flex-col gap-3">
                            {project.contribution.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <IconCircleCheck className="mt-0.5 size-4 shrink-0 text-neutral-400 dark:text-neutral-500" aria-hidden="true" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Section>
                )}
            </Container>
        </div>
    )
}

export default ProjectCaseStudy

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="my-6 border-y border-neutral-100 px-4 py-6 shadow-section-inset dark:border-neutral-800 dark:shadow-section-inset">
        <SectionHeading>{title}</SectionHeading>
        {children}
    </section>
)

const Prose = ({ children }: { children: React.ReactNode }) => (
    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-base">{children}</p>
)
