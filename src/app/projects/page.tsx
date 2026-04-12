import { Projects, Scales } from "@/components"
import { Container, Heading, SubHeading } from "@/components/ui"
import { Metadata } from "next"
import projectsData from "@/data/projectsData.json"



export const metadata: Metadata = {
    title: "Projects",
    description: "Explore the portfolio of Yogesh Chauhan, featuring a $20K MRR VS Code fork, AI-powered SaaS applications, and scalable backend systems.",
    keywords: ["Software Projects", "React Portfolio", "Node.js Projects", "AWS Cloud Solutions", "SaaS Development"]
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
                        I&apos;m a software engineer with a passion for building scalable and efficient
                        systems. I&apos;m currently working as a software engineer at WorkCompanion.
                    </SubHeading>

                    <Projects />

                </Container>
            </div>
        </>
    )
}

export default ProjectPage