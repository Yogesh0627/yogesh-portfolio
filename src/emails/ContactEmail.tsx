import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Heading,
    Text,
    Preview,
} from "@react-email/components";

interface ContactEmailProps {
    name: string;
    email: string;
    message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => {
    const timestamp = new Date().toLocaleString();

    return (
        <Html lang="en">
            <Head />
            <Preview>New message from {name} via Portfolio</Preview>

            <Body style={main}>
                <Container style={container}>

                    {/* Header */}
                    <Section style={{ marginBottom: "28px" }}>
                        <Heading style={h1}>New Message</Heading>
                        <Text style={subText}>
                            You’ve received a new message through your portfolio.
                        </Text>
                    </Section>

                    {/* Sender */}
                    <Section style={{ marginBottom: "20px" }}>
                        <Text style={label}>Sender</Text>
                        <Text style={senderInfo}>
                            <strong>{name}</strong> &lt;{email}&gt;
                        </Text>
                    </Section>

                    {/* Message */}
                    <Section style={messageBox}>
                        <Text style={label}>Message</Text>
                        <Text style={messageContent}>
                            {message}
                        </Text>
                    </Section>

                    {/* Footer */}
                    <Section style={footerSection}>
                        <Text style={footerText}>
                            Received on {timestamp}
                        </Text>
                        <Text style={footerText}>
                            © {new Date().getFullYear()} Yogesh Chauhan
                        </Text>
                    </Section>

                </Container>
            </Body>
        </Html>
    );
};

// --- Styles ---

const main = {
    backgroundColor: "#ffffff",
    fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial, sans-serif',
    padding: "40px 0",
};

const container = {
    margin: "0 auto",
    padding: "40px",
    width: "600px",
    maxWidth: "100%",
    border: "1px solid #E5E5E5",
    borderRadius: "8px",
    textAlign: "left" as const, // ✅ Force children to start at the left edge
};

const h1 = {
    color: "#000000",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "1.2",
    margin: "0 0 6px 0",
    textAlign: "left" as const,
};

const subText = {
    color: "#4B5563",
    fontSize: "14px",
    margin: "0",
};

const label = {
    color: "#9CA3AF",
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "1px",
    margin: "0 0 6px 0",
    textTransform: "uppercase" as const,
};

const senderInfo = {
    color: "#000000",
    fontSize: "15px",
    margin: "0",
};

const messageBox = {
    backgroundColor: "#F9FAFB",
    borderLeft: "2px solid #000000",
    padding: "16px",
    margin: "0",          // ✅ add this
    width: "100%",        // ✅ add this
    boxSizing: "border-box" as const // ✅ important
};

const messageContent = {
    color: "#1F2937",
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "0",
    textAlign: "left" as const, // ✅ ensures left alignment
    whiteSpace: "pre-wrap" as const,
    display: "block", // ✅ add this

};

const footerSection = {
    marginTop: "32px",
    borderTop: "1px solid #F3F4F6",
    paddingTop: "16px",
};

const footerText = {
    color: "#9CA3AF",
    fontSize: "12px",
    margin: "4px 0",
};

// export default ContactEmail;