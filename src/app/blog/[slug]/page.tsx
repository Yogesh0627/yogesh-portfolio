import { Container } from '@/components/ui'
import { redirect } from 'next/navigation'
import { getBlogFrontMatterBySlug, getBlogs, getSingleBlog } from '@/utils/mdx'
import { Scales } from '@/components'
import { formatDate } from '@/utils'
import Image from 'next/image'


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
        title: frontmatter.title,
        description: frontmatter.description,
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: "article",
            publishedTime: frontmatter.date,
            images: frontmatter.image ? [{ url: frontmatter.image }] : undefined,
        },
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

    const { content, frontmatter, readingTime } = blog

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
                            "@id": `https://yogeshchauhan.dev/blog/${resolvedParams.slug}`
                        },
                        "headline": frontmatter.title,
                        "description": frontmatter.description,
                        "image": frontmatter.image ? `https://yogeshchauhan.dev${frontmatter.image}` : undefined,
                        "datePublished": frontmatter.date,
                        "author": {
                            "@type": "Person",
                            "name": "Yogesh Chauhan",
                            "url": "https://yogeshchauhan.dev"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Yogesh Chauhan",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://yogeshchauhan.dev/yogesh.jpg"
                            }
                        }
                    })
                }}
            />
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen pt-10 pb-5 px-8 md:pt-20 md:pb-10">
                <Scales/>
                {frontmatter.image && (
                    <Image
                        src={frontmatter.image}
                        alt={frontmatter.title}
                        width={1200}
                        height={630}
                        priority
                        className='mx-auto mb-12 max-h-96 w-full max-w-3xl rounded-2xl border border-neutral-200 object-cover dark:border-neutral-800'
                    />
                )}

                <div className="mx-auto mb-8 flex max-w-3xl flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
                        <span aria-hidden="true">·</span>
                        <span>{readingTime} min read</span>
                    </div>
                    {frontmatter.tags && frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {frontmatter.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <article>
                    <div className="prose mx-auto prose-neutral dark:prose-invert prose-headings:scroll-mt-20">
                        {/* <MDXRemote
                      source={blog}
                  /> */}

                        {content}
                    </div>
                </article>


                {/* Optional: Footer Divider */}
                <div className="max-w-3xl mx-auto mt-10 md:mt-20 border-t border-neutral-100 dark:border-neutral-800 pt-5 md:pt-10">
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