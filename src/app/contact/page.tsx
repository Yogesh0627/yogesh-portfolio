import { ContactForm, Scales } from "@/components"
import { Container, Heading, SubHeading } from "@/components/ui"


const ContactPage = () => {
    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
                <Scales/>
                <Heading >Contact Me</Heading>
                <SubHeading>
                    I'm open to freelancing offers. Reach  out to me to inquire more about my work.
                </SubHeading>

                <ContactForm />
            </Container>
        </div>
    )
}

export default ContactPage