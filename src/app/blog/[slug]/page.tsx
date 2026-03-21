import { Container, Heading, SubHeading } from '@/components/ui'
import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc'
import { promises as fs } from "fs"
import path from "path"
import React from 'react'
import { redirect } from 'next/navigation'
import { getBlogFrontMatterBySlug, getSingleBlog } from '@/utils/mdx'
import { BlogFrontMatterType } from '@/types'
import { Scales } from '@/components'


export async function generateMetaData({ params }: { params: Promise<{ slug: string }> }) {
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
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
                <Scales/>
                {/* <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className='mx-auto  mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl'
                /> */}
                <div className="prose mx-auto">
                    {/* <MDXRemote
                      source={blog}
                  /> */}

                    {content}
                </div>

            </Container>
        </div>
    )
}

export default Blog