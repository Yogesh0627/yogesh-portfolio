"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
import { ContactEmail } from "@/emails/ContactEmail"; // Import your template
import { render, pretty } from '@react-email/render';


export async function sendEmailAction(data: { name: string; email: string; message: string }) {
    // Extract data directly from the form
    const { name, email, message } = data;

    // Basic validation
    if (!name || !email || !message) {
        return { error: "All fields are required." };
    }

    const html = await pretty(await render(ContactEmail({ name, email, message })))
    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["chauhanyogesh950@gmail.com"],
            replyTo: email,
            subject: `New Message from ${name}`,
            html
        });

        return { success: true };
    } catch (err) {
        console.log("Error", err)
        return { error: "Failed to send email." };
    }
}