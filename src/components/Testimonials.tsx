import React from 'react'
import Marquee from 'react-fast-marquee';
import { SectionHeading } from './ui';


interface TestimonialDatatype {
    quote: string,
    name: string,
    role: string
}
const Testimonials = () => {

    const testimonials: TestimonialDatatype[] = [
        {
            quote:
                "Yogesh consistently ships clean, scalable backend code. You can hand him a vague problem and trust him to deliver a solid, well-thought-out solution.",
            name: "Aashutosh Yadav",
            role: "Tech Lead at Work Companion",
        },
        {
            quote:
                "Pairing with Yogesh is always productive. He writes maintainable code and has a real knack for breaking complex features into shippable pieces.",
            name: "Ritik Dhiman",
            role: "Full Stack Developer at Work Companion",
        },
        {
            quote:
                "Integrating with the APIs Yogesh builds is effortless — reliable, well-documented, and thoughtfully designed. A great teammate to work alongside.",
            name: "Vivek Vishwakarma",
            role: "Flutter Developer at Work Companion",
        },
        {
            quote:
                "Yogesh has a sharp eye for detail and a strong grasp of system design. He quietly raises the quality bar for everyone around him.",
            name: "Pragati Upadhayay",
            role: "Software Specialist at Agami Technologies",
        },
        {
            quote:
                "From a QA standpoint, his builds are refreshingly stable. Yogesh thinks about edge cases before they ever reach us, which makes testing so much smoother.",
            name: "Shwweta Singh",
            role: "QA Manager at Agami Technologies",
        },
        {
            quote:
                "Yogesh is responsive, detail-oriented, and quick to resolve issues. Working with him made our release cycles noticeably smoother.",
            name: "Sakshi Sen",
            role: "QA at Agami Technologies",
        },
        {
            quote:
                "Yogesh took my project from idea to launch with zero hassle — clear communication, on-time delivery, and quality work. I'd hire him again in a heartbeat.",
            name: "Sandeep Sharma",
            role: "Freelance Client",
        },
        {
            quote:
                "Professional, reliable, and genuinely talented. He understood exactly what I needed and delivered beyond expectations.",
            name: "Nidhi Mitra",
            role: "Freelance Client",
        },
    ];
    return (
        <section id='testimonials' aria-labelledby="testimonials-heading">
            <div className='px-4 py-4 my-4'>
                <SectionHeading className='mb-4' delay={0.8}>People love my work</SectionHeading>
                <div className='flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]'>

                    <Marquee speed={20} pauseOnHover={true} className='py-4'>
                        {testimonials.map((item, idx) => <TestimonialCard key={`testimonial-${idx}`} {...item} />)}

                    </Marquee>
                </div>

            </div>
        </section>
    )
}

export { Testimonials }


const AVATAR_COLORS = [
    "bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-amber-500",
    "bg-rose-500", "bg-cyan-500", "bg-indigo-500", "bg-teal-500",
];

const getInitials = (name: string) =>
    name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

const colorFor = (name: string) => {
    const sum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return AVATAR_COLORS[sum % AVATAR_COLORS.length];
};

const TestimonialCard = ({ quote, name, role }: TestimonialDatatype) => {

    return (
        <figure className='flex mx-4 flex-col justify-between gap-4 p-4 h-52 w-full max-w-72 rounded-xl hover:shadow-md transition duration-300 shadow-custom'>
            <blockquote className='text-sm text-neutral-700 dark:text-neutral-200'>&ldquo;{quote}&rdquo;</blockquote>
            <figcaption className='flex items-center gap-3'>
                <span
                    aria-hidden="true"
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${colorFor(name)}`}>
                    {getInitials(name)}
                </span>
                <div className='flex flex-col'>
                    <cite className='text-sm not-italic font-medium text-neutral-800 dark:text-neutral-200'>{name}</cite>
                    <span className='text-xs text-neutral-500 dark:text-neutral-400'>{role}</span>
                </div>
            </figcaption>
        </figure>
    )
}
