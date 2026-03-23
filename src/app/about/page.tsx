import { Collage, Timeline, Scales } from "@/components"
import { Container, Heading, SectionHeading, SubHeading } from "@/components/ui"
import { Metadata } from "next"


// Unique metadata for the About page
export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Yogesh Chauhan, his journey to Software Engineering, and his passion for travel and scalable systems.",
}

const About = () => {
    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen pt-10 px-8 md:pt-20 md:pb-10">
                <Scales />
                <Heading>About Me</Heading>
                <SubHeading>
                    I&apos;m a software engineer with a passion for building scalable and efficient
                    systems. I&apos;m currently working as a software engineer at WorkCompanion.
                </SubHeading>
                <section className="px-4 py-6" aria-labelledby="travel-heading">
                    <SectionHeading >
                        Travelling is in my blood
                    </SectionHeading>

                    <Collage />
                </section>

                <section aria-labelledby="timeline-heading">
                    <Timeline />
                </section>

            </Container>
        </div>
    )
}

export default About