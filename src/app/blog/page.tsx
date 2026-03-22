import { Scales } from '@/components';
import { Container, Heading, SubHeading } from '@/components/ui';
import { getBlogs } from '@/utils/mdx';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';

export const metadata: Metadata = {
    title: "Blog",
    description: "Technical insights and personal experiences from Yogesh Chauhan, covering Node.js, AWS, and modern web development.",
}

const Blogs = async () => {

    const blogs = await getBlogs()

    const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }


    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen pt-10 px-8 md:pt-20 md:pb-10">
                <Scales />
                <Heading>All Blogs</Heading>
                <SubHeading>
                    I&apos;m a software engineer with a passion for building scalable and efficient
                    systems. I&apos;m currently working as a software engineer at WorkCompanion.
                </SubHeading>

                <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 flex flex-col gap-8 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
                    {blogs?.map((blog, idx) => (
                        <article key={blog.title} className='cursor-pointer'>
                            <Link href={`/blog/${blog.slug}`}>
                                <div className='flex items-center justify-between'>
                                    <h2 className='text-primary text-base font-bold tracking-tight'>
                                        {blog.title}
                                    </h2>
                                    <time
                                        dateTime={blog.date ? new Date(blog.date).toISOString() : ""}
                                        className='text-secondary text-sm md:text-sm font-mono'>{blog.date ? new Intl.DateTimeFormat('en-US', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        }).format(new Date(blog.date)) : "No Date"}</time>
                                </div>
                                <p className='text-secondary max-w-lg pt-2 text-sm md:text-sm'>{truncate(blog.description ?? "", 150)}</p>
                            </Link>
                        </article>
                    ))}
                </div>

            </Container>
        </div>
    );
}

export default Blogs