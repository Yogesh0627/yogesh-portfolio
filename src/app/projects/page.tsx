import { Projects, Scales } from "@/components"
import { Container, Heading, SubHeading } from "@/components/ui"


const ProjectPage = () => {
    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
                <Scales/>
                <Heading >Projects</Heading>
                <SubHeading>
                    I'm a software engineer with passion for building scalable and efficient
                    systems. I'm currently as a software engineer at WorkCompanion.
                </SubHeading>

                <Projects />

            </Container>
        </div>
    )
}

export default ProjectPage