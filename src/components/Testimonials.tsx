import React from 'react'
import Marquee from 'react-fast-marquee';
import { SectionHeading } from './ui';


interface TestimonialDatatype {
    quote: string,
    name: string,
    avatar: string
}
const Testimonials = () => {

    const testimonials: TestimonialDatatype[] = [
        {
            quote:
                "This platform helped me grow both technically and mentally. Truly a game changer!",
            name: "Hinata Shouya",
            avatar:
                "https://static.wikia.nocookie.net/haikyuu/images/f/fc/Hinata_Shouyou_Anime.png",
        },
        {
            quote:
                "Working with the team felt like being part of an anime dream. Everyone’s energy was unmatched!",
            name: "Sakura Aoki",
            avatar:
                "https://static.wikia.nocookie.net/naruto/images/9/9b/Sakura_Haruno.png",
        },
        {
            quote:
                "I learned how to balance speed and precision — like a true shinobi of code!",
            name: "Kakashi Tanaka",
            avatar:
                "https://static.wikia.nocookie.net/naruto/images/5/5e/Kakashi_Hatake.png",
        },
        {
            quote:
                "Every project here feels like an epic adventure. You never stop learning!",
            name: "Eren Takahashi",
            avatar:
                "https://static.wikia.nocookie.net/shingekinokyojin/images/6/6f/Eren_Jaeger_854.png",
        },
        {
            quote:
                "Building apps here feels like unlocking a new power-up every single day.",
            name: "Mikasa Ayane",
            avatar:
                "https://static.wikia.nocookie.net/shingekinokyojin/images/f/f6/Mikasa_Ackerman_854.png",
        },
        {
            quote:
                "I never imagined coding could be this exciting — it’s like mastering my own jutsu.",
            name: "Naruto Uchiha",
            avatar:
                "https://static.wikia.nocookie.net/naruto/images/c/c1/Naruto_Uzumaki.png",
        },
        {
            quote:
                "Their mentorship helped me evolve from a rookie to a confident developer.",
            name: "Rukia Minato",
            avatar:
                "https://static.wikia.nocookie.net/bleach/images/4/4d/Rukia_Kuchiki.png",
        },
        {
            quote:
                "An inspiring place for creators and dreamers alike — I’ve found my people here.",
            name: "Levi Sato",
            avatar:
                "https://static.wikia.nocookie.net/shingekinokyojin/images/8/8e/Levi_Ackerman_854.png",
        },
        {
            quote:
                "The attention to detail and creativity here rivals any anime I’ve ever watched!",
            name: "Asuna Yuki",
            avatar:
                "https://static.wikia.nocookie.net/swordartonline/images/5/52/Asuna_SAO.png",
        },
        {
            quote:
                "Joining this journey felt like becoming part of a great guild — full of strength and passion.",
            name: "Natsu Dragneel",
            avatar:
                "https://static.wikia.nocookie.net/fairytail/images/f/f8/Natsu_Dragneel.png",
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


const TestimonialCard = ({ quote, name, avatar }: TestimonialDatatype) => {

    return (
        <figure className='flex mx-4 flex-col justify-between gap-4 p-4 h-50 w-full max-w-60 rounded-xl hover:shadow-md transition duration-300 shadow-custom'>
            <blockquote className='text-sm text-neutral-700 dark:text-neutral-200'>{quote}</blockquote>
            <figcaption className='flex items-center gap-4'>
                <img src={avatar} alt={name} className='size-4 rounded-full object-cover' />
                <cite className='text-sm not-italic text-neutral-500 dark:text-neutral-300'>{name}</cite>
            </figcaption>
        </figure>
    )
}