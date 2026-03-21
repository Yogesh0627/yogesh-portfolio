import { Scales } from '@/components';
import { Container, Heading, SubHeading } from '@/components/ui';
import { getBlogs } from '@/utils/mdx';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';

export const metadata: Metadata = {
    title: "All Blogs",
    description: "All Blogs"
}

const Blogs = async () => {

    const blogs = await getBlogs()

    console.log("All blogs", blogs)

    const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }
    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
                <Scales/>
                <Heading>All Blogs</Heading>
                <SubHeading>
                    I'm a software engineer with passion for building scalable and efficient
                    systems. I'm currently as a software engineer at WorkCompanion.
                </SubHeading>

                <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 flex flex-col gap-8 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
                    {blogs?.map((blog, idx) => (
                        <Link href={`/blog/${blog.slug}`} key={blog.title}>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-primary text-base font-bold tracking-tight'>
                                    {blog.title}
                                </h2>
                                <p className='text-secondary text-sm md:text-sm'>{blog.date}</p>
                            </div>
                            <p className='text-secondary max-w-lg pt-2 text-sm md:text-sm'>{truncate(blog.description ?? "", 150)}</p>
                        </Link>
                    ))}
                </div>

            </Container>
        </div>
    );
}

export default Blogs