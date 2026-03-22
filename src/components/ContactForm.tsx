"use client"
import { sendEmailAction } from '@/app/actions/email'
import { IconLoader } from '@tabler/icons-react'
import { Metadata } from 'next'
import React, { useState } from 'react'
import { toast } from 'sonner'


export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Yogesh Chauhan for software engineering opportunities, freelancing, or collaboration.",
}

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [sending, setSending] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setSending(true)
            const { name, email, message } = formData;

            if (!name || !email || !message) {
                toast.error("Please fill in all the details");
                return;
            }

            const response = await sendEmailAction(formData);

            if (response?.success) {
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                })
                toast.success("Form Submitted Successfully");
            } else {
                toast.error("Something went wrong");
            }

        } catch (error) {
            console.error("Submit Error:", error);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setSending(false)
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form action="" method="post" onSubmit={handleSubmit} className='py-12 border-y border-neutral-100 shadow-section-inset dark:border-neutral-800 dark:shadow-section-inset my-6'>
            <div className="flex flex-col gap-5 max-w-lg mx-auto ">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-sm font-medium tracking-tight text-neutral-600'>Full name</label>
                    <input id='name' type="text" name='name' required value={formData.name} placeholder='Yogesh Chauhan' className='px-2 py-2 rounded-md text-sm focus:ring-primary focus:ring-2  focus:outline-none shadow-custom' onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-sm font-medium tracking-tight text-neutral-600'>Email</label>
                    <input id='email' type="email" required name='email' value={formData.email} placeholder='yogesh@gmail.com' className='px-2 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-custom' onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-sm font-medium tracking-tight text-neutral-600'>Message</label>
                    <textarea id='message' name='message' required value={formData.message} placeholder='Write a message ...' rows={5} className='resize-none px-2 py-1 rounded-md text-sm  focus:ring-2 focus:ring-primary focus:outline-none shadow-custom' onChange={handleChange} />
                </div>

                {/* <button type='submit' className='rounded-md bg-text-primary px-4 py-2 text-white cursor-pointer'>Send message</button> */}
                <button type='submit'
                    disabled={sending}
                    className="flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset] cursor-pointer hover:dark:bg-neutral-700     disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-neutral-100 dark:disabled:hover:bg-neutral-800">
                    {sending ? <>
                        <IconLoader className="mr-2 h-4 w-4 animate-spin" />
                        Sending
                    </> : "Send message"}</button>
            </div>
        </form>
    )
}

export { ContactForm }