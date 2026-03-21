import { getBlogs } from '@/utils/mdx'
import { Link } from 'next-view-transitions'
import React from 'react'
import { SectionHeading } from './ui'
import MotionDiv from './MotionDiv'
import { IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandRedux, IconBrandTypescript } from '@tabler/icons-react'
import ExpandableChip from './ExpandableChip'



const Experience = async () => {
    const experienceData = [
        {
            id: 1,
            company: "Google",
            role: "Senior Frontend Engineer",
            duration: "June 2020 - Present",
            description:
                "Led the development of key features for Google Cloud Platform's web console while improving performance metrics by 35%.",
            logo: "/images/logos/google-logo.png",
            technologies: [
                { id: 1, logo: <IconBrandReact className='size-4 shrink-0 dark:text-neutral-200' />, title: "React" },
                { id: 2, logo: <IconBrandTypescript className='size-4 shrink-0 dark:text-neutral-200' />, title: "TypeScript" },
                { id: 3, logo: <IconBrandRedux className='size-4 shrink-0 dark:text-neutral-200' />, title: "Redux" },
                { id: 4, logo: <span>GQL</span>, title: "GraphQL" },
                { id: 5, logo: <span>Jest</span>, title: "Jest" },
                { id: 6, logo: <span>Cypress</span>, title: "Cypress" }
            ]
        },

        {
            id: 2,
            company: "Microsoft",
            role: "Frontend Developer",
            duration: "Jan 2018 - May 2020",
            description:
                "Worked on scalable UI systems for Microsoft Azure dashboards with a focus on accessibility and performance.",
            logo: "/images/logos/microsoft-logo.png",
            technologies: [
                { id: 1, logo: <IconBrandReact className='size-4 shrink-0 dark:text-neutral-200' />, title: "React" },
                { id: 2, logo: <IconBrandTypescript className='size-4 shrink-0 dark:text-neutral-200' />, title: "TypeScript" },
                { id: 3, logo: <IconBrandRedux className='size-4 shrink-0 dark:text-neutral-200' />, title: "Redux" }
            ]
        },

        {
            id: 3,
            company: "Amazon",
            role: "Software Engineer",
            duration: "July 2016 - Dec 2017",
            description:
                "Built high-performance internal tools and optimized UI rendering for large-scale e-commerce systems.",
            logo: "/images/logos/amazon-logo.png",
            technologies: [
                { id: 1, logo: <IconBrandReact className='size-4 shrink-0 dark:text-neutral-200' />, title: "React" },
                { id: 2, logo: <IconBrandNodejs className='size-4 shrink-0 dark:text-neutral-200' />, title: "Node.js" },
                { id: 3, logo: <IconBrandMongodb className='size-4 shrink-0 dark:text-neutral-200' />, title: "MongoDB" }
            ]
        },

        {
            id: 4,
            company: "Netflix",
            role: "UI Engineer",
            duration: "Aug 2015 - June 2016",
            description:
                "Designed and developed responsive UI components for streaming platforms ensuring smooth user experience across devices.",
            logo: "/images/logos/netflix-logo.png",
            technologies: [
                { id: 1, logo: <IconBrandReact className='size-4 shrink-0 dark:text-neutral-200' />, title: "React" },
                { id: 2, logo: <IconBrandNextjs className='size-4 shrink-0 dark:text-neutral-200' />, title: "Next.js" },
                { id: 3, logo: <span>CSS</span>, title: "CSS" }
            ]
        }
    ];

    const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }

    // className = "relative isolate overflow-hidden bg-gradient-to-b from-white/20 to-[125%] dark:from-gray-500/2 shadow-section"
    return (
        <div className='py-6 px-4 my-10 border-y border-neutral-100 shadow-section-inset dark:border-neutral-800 dark:shadow-section-inset'>
            <SectionHeading delay={0.4}>Worked at reputed firms</SectionHeading>
            <div className='flex flex-col gap-6 py-10'>
                {experienceData.map((exp, idx) => (
                    <div key={exp.id}>
                        <div className='flex flex-col justify-between md:flex-row md:items-start'>
                            <div className='max-w-[80%]'>
                                <h2 className='font-medium text-neutral-900 dark:text-neutral-100'>{exp.company}</h2>
                                <div className='flex flex-col gap-2 py-2 sm:flex-row sm:items-center'>
                                    <p className='text-sm text-neutral-800 dark:text-neutral-200'>{exp.role}</p>
                                    <p className='text-sm text-neutral-500 dark:text-neutral-400'>{exp.duration}</p>

                                </div>
                                <p className='text-sm text-neutral-500'>{exp.description}</p>
                                <ExpandableChip
                                chipData={exp.technologies}
                                />
                            </div>
                            <img src={exp.logo} alt={exp.company} width={100} height={100} className='hidden md:block'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export  {Experience}