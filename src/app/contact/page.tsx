import { ContactForm, Scales } from "@/components"
import { Container, Heading, SubHeading } from "@/components/ui"


const ContactPage = () => {
    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen pt-10 px-8 md:pt-20 md:pb-10">
                <Scales />
                <Heading >Contact Me</Heading>
                <SubHeading>
                    I'm looking for full-time software engineering roles, and open to freelance projects on the side. Reach out to talk about a role or a project.
                </SubHeading>

                <ContactForm />
            </Container>
        </div>
    )
}

export default ContactPage