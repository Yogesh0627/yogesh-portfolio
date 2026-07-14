import { SectionHeading } from './ui'
import { IconBrandMongodb, IconBrandNodejs, IconBrandOpenai, IconBrandReact, IconBrandRedux, IconBrandTypescript, IconBrandVue, IconPlugConnected, IconServer } from '@tabler/icons-react'
import ExpandableChip from './ExpandableChip'

const techClass = 'size-4 shrink-0 dark:text-neutral-200'

const Experience = async () => {
    const experienceData = [
        {
            id: 1,
            company: "Work Companion LLP",
            role: "Software Engineer",
            duration: "Oct 2024 - Present",
            description:
                "Core engineer on WoCo PMS, a multi-tenant HR performance-management platform. Top frontend contributor, and led a backend optimization program that raised the codebase's quality score from 4.5 to 8.6/10 and cut authenticated-request overhead ~4×.",
            logo: "/logos/woco.png",
            technologies: [
                { id: 1, logo: <IconBrandReact className={techClass} />, title: "React" },
                { id: 2, logo: <IconBrandTypescript className={techClass} />, title: "TypeScript" },
                { id: 3, logo: <IconBrandRedux className={techClass} />, title: "Redux Toolkit" },
                { id: 4, logo: <IconBrandNodejs className={techClass} />, title: "Node.js" },
                { id: 5, logo: <IconBrandMongodb className={techClass} />, title: "MongoDB" },
                { id: 6, logo: <IconServer className={techClass} />, title: "Redis" }
            ]
        },

        {
            id: 2,
            company: "Agami Technologies",
            role: "Software Specialist",
            duration: "Jun 2024 - Oct 2024",
            description:
                "Worked on the BeGenieus platform — integrated OpenAI-powered chat and image generation, and delivered features across modules while collaborating closely with QA and product teams.",
            logo: "/logos/agami.png",
            technologies: [
                { id: 1, logo: <IconBrandVue className={techClass} />, title: "Vue.js" },
                { id: 2, logo: <IconBrandNodejs className={techClass} />, title: "Node.js" },
                { id: 3, logo: <IconBrandMongodb className={techClass} />, title: "MongoDB" },
                { id: 4, logo: <IconPlugConnected className={techClass} />, title: "Socket.io" },
                { id: 5, logo: <IconBrandOpenai className={techClass} />, title: "OpenAI" }
            ]
        }
    ];

    const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }



    // className = "relative isolate overflow-hidden bg-gradient-to-b from-white/20 to-[125%] dark:from-gray-500/2 shadow-section"
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Yogesh Chauhan",
                        "email": "chauhanyogesh950@gmail.com",
                        "hasOccupation": experienceData.map(exp => ({
                            "@type": "Occupation",
                            "name": exp.role,
                            "description": exp.description,
                            "estimatedSalary": [], // Optional
                            "occupationLocation": {
                                "@type": "City",
                                "name": "Remote/On-site"
                            }
                        })),
                        "worksFor": experienceData.map(exp => ({
                            "@type": "Organization",
                            "name": exp.company,
                            "logo": `https://yogeshchauhan.dev${exp.logo}` // Helps Google link the logo to the firm
                        }))
                    })
                }}
            />

            <section id='experience' className='py-1' aria-labelledby="experience-heading">
                <div className='py-6 px-4 my-10 border-y border-neutral-100 shadow-section-inset dark:border-neutral-800 dark:shadow-section-inset'>
                    <SectionHeading delay={0.4}>Where I&apos;ve worked</SectionHeading>
                    <div className='flex flex-col gap-6 py-10' role="list">
                        {experienceData.map((exp, idx) => (
                            <div key={exp.id}>
                                <div className='flex flex-col justify-between md:flex-row md:items-start'>
                                    <div className='max-w-[80%]'>
                                        <h3 className='font-medium text-neutral-900 dark:text-neutral-100'>{exp.company}</h3>
                                        <div className='flex flex-col gap-2 py-2 sm:flex-row sm:items-center'>
                                            <p className='text-sm text-neutral-800 dark:text-neutral-200'>{exp.role}</p>
                                            <p className='text-sm text-neutral-500 dark:text-neutral-400'>{exp.duration}</p>

                                        </div>
                                        <p className='text-sm text-neutral-500'>{exp.description}</p>
                                        <ExpandableChip
                                            chipData={exp.technologies}
                                        />
                                    </div>
                                    <div className='hidden items-center rounded-lg bg-white px-2 py-1.5 shadow-custom md:inline-flex'>
                                        <img src={exp.logo} alt={exp.company} className='h-8 w-auto max-w-[130px] object-contain' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export { Experience }