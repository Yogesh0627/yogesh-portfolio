import { getBlogs } from '@/utils/mdx'
import { Link } from 'next-view-transitions'
import React from 'react'
import { SectionHeading } from './ui'
import MotionDiv from './MotionDiv'

type Props = {}

const LandingBlogs = async (props: Props) => {
    const blogs = await getBlogs()

    const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }

    // className = "relative isolate overflow-hidden bg-gradient-to-b from-white/20 to-[125%] dark:from-gray-500/2 shadow-section"
    return (
        <section id='blogs' className='py-1'>
            <div className='px-4 py-6'>
                <SectionHeading delay={0.4} className='mb-4' >I love writing things down</SectionHeading>
                <div className='flex flex-col gap-8'>
                    {blogs?.slice(0, 3)?.map((blog, idx) => (
                        <MotionDiv key={blog.title}
                            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                duration: 0.3,
                                delay: idx * 0.1,
                                ease: "easeInOut"
                            }}
                        >
                            <Link href={`/blog/${blog.slug}`} key={blog.title}>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-primary text-base font-bold tracking-tight'>
                                        {blog.title}
                                    </h3>
                                    <p className='text-neutral-500 text-sm md:text-sm'>{blog.date}</p>
                                </div>
                                <p className='text-neutral-500 max-w-lg pt-2 text-sm md:text-sm'>{truncate(blog.description ?? "", 150)}</p>
                            </Link>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LandingBlogs