"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
import { ContactEmail } from "@/emails/ContactEmail"; // Import your template
import { render, pretty } from '@react-email/render';


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendEmailAction(data: { name: string; email: string; message: string; honeypot?: string }) {
    // Extract data directly from the form
    const { name, email, message, honeypot } = data;

    // Honeypot: a hidden field real users never fill. If it has a value, it's a bot.
    if (honeypot) {
        // Pretend success so bots don't learn they were caught.
        return { success: true };
    }

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return { error: "All fields are required." };
    }

    // Email format
    if (!EMAIL_REGEX.test(email)) {
        return { error: "Please enter a valid email address." };
    }

    // Length guards (block absurd payloads / spam dumps)
    if (name.length > 100) {
        return { error: "Name is too long." };
    }
    if (message.length > 5000) {
        return { error: "Message is too long." };
    }

    const html = await pretty(await render(ContactEmail({ name, email, message })))
    try {
        const { data, error } = await resend.emails.send({
            from: "Portfolio <contact@mail.yogeshchauhan.dev>",
            to: ["chauhanyogesh950@gmail.com"],
            replyTo: email,
            subject: `New Message from ${name}`,
            html
        });

        if (error) {
            console.log("Resend error:", error);
            return { error: error.message };
        }

        console.log("Resend sent:", data);
        return { success: true };
    } catch (err) {
        console.log("Error", err)
        return { error: "Failed to send email." };
    }
}