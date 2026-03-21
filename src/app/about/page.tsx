import { Collage, Timeline, Scales } from "@/components"
import { Container, Heading, SectionHeading, SubHeading } from "@/components/ui"



const About = () => {
    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen pt-10 px-8 md:pt-20 md:pb-10">
                <Scales/>
                <Heading>About Me</Heading>
                <SubHeading>
                    I'm a software engineer with passion for building scalable and efficient
                    systems. I'm currently as a software engineer at WorkCompanion.
                </SubHeading>
                <div className="px-4 py-6">
                    <SectionHeading >
                        Travelling is in my blood
                    </SectionHeading>

                    <Collage />
                </div>
                <Timeline />

            </Container>
        </div>
    )
}

export default About