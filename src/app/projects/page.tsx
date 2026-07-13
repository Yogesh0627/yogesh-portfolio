import { Projects, Scales } from "@/components"
import { Container, Heading, SubHeading } from "@/components/ui"
import { Metadata } from "next"
import projectsData from "@/data/projectsData.json"



export const metadata: Metadata = {
    title: "Projects",
    description: "Explore Yogesh Chauhan's projects — Candor (AI-coached feedback), SQLPlay (an in-browser SQL playground on npm), InsightBlog (AI publishing platform), and WoCo PMS (multi-tenant HR platform).",
    keywords: ["Software Projects", "React Projects", "Node.js Projects", "Next.js", "AI Integration", "Full Stack Developer"]
}

const ProjectPage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Yogesh Chauhan's Software Projects",
                        "numberOfItems": projectsData.length,
                        "itemListElement": projectsData.map((project, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "SoftwareApplication",
                                "name": project.title,
                                "description": project.description,
                                "applicationCategory": "DeveloperApplication",
                                "operatingSystem": "Web, Windows, MacOS",
                                // "url": project.link || "https://yogeshchauhan.dev/projects",
                                "author": {
                                    "@type": "Person",
                                    "name": "Yogesh Chauhan"
                                }
                            }
                        }))
                    })
                }}
            />

            <div className="flex min-h-screen items-start justify-start">
                <Container className="min-h-screen pt-10 px-8 md:pt-20 md:pb-10">
                    <Scales />
                    <Heading >Projects</Heading>
                    <SubHeading>
                        A selection of things I&apos;ve built — from AI-powered products to a
                        multi-tenant enterprise platform. Each one taught me something about
                        shipping real software end-to-end.
                    </SubHeading>

                    <Projects />

                </Container>
            </div>
        </>
    )
}

export default ProjectPage