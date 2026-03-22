import { Container } from '@/components/ui'
import { redirect } from 'next/navigation'
import { getBlogFrontMatterBySlug, getBlogs, getSingleBlog } from '@/utils/mdx'
import { Scales } from '@/components'


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const frontmatter = await getBlogFrontMatterBySlug(slug)

    if (!frontmatter) {
        return {
            title: "blog not found"
        }
    }

    return {
        title: frontmatter.title + "Yogesh",
        description: frontmatter.description,
    }
}

export async function generateStaticParams() {
    const blogs = await getBlogs();

    if (!blogs || blogs.length === 0) return [];
    // This tells Next.js exactly which pages to build statically
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}
const Blog = async ({ params }: {
    params: Promise<{ slug: string }>; // Update type to a Promise
}) => {

    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const blog = await getSingleBlog(slug)

    if (!blog) {
        redirect("/blog")
    }

    const { content, frontmatter } = blog

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://yourportfolio.com/blog/${resolvedParams.slug}`
                        },
                        "headline": frontmatter.title,
                        "description": frontmatter.description,
                        "datePublished": frontmatter.date,
                        "author": {
                            "@type": "Person",
                            "name": "Yogesh Chauhan",
                            "url": "https://yourportfolio.com"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Yogesh Chauhan",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://yourportfolio.com/logo.png"
                            }
                        }
                    })
                }}
            />
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen pt-10 px-8 md:pt-20 md:pb-10">
                <Scales/>
                {/* <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className='mx-auto  mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl'
                /> */}

                <article>
                    <div className="prose mx-auto prose-neutral dark:prose-invert prose-headings:scroll-mt-20">
                        {/* <MDXRemote
                      source={blog}
                  /> */}

                        {content}
                    </div>
                </article>


                {/* Optional: Footer Divider */}
                <div className="max-w-3xl mx-auto mt-20 border-t border-neutral-100 dark:border-neutral-800 pt-10">
                    <p className="text-sm text-neutral-500 italic">
                        Thanks for reading! If you enjoyed this post, feel free to reach out.
                    </p>
                </div>

            </Container>
        </div>
        </>
    )
}

export default Blog