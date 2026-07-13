import { BlogFrontMatterType } from "@/types";
import { promises as fs } from "fs"
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
export const getSingleBlog = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(path.join(process.cwd(), "src/data", `${slug}.mdx`), "utf-8")

        if (!singleBlog) {
            return null
        }


        const { content, frontmatter } = await compileMDX<BlogFrontMatterType>({
            source: singleBlog,
            options: { parseFrontmatter: true }
        })

        // Reading time from the raw body (frontmatter stripped), ~200 words/min
        const body = singleBlog.replace(/^---[\s\S]*?---/, "")
        const words = body.trim().split(/\s+/).filter(Boolean).length
        const readingTime = Math.max(1, Math.round(words / 200))

        return { content, frontmatter, readingTime }
    } catch (error) {
        console.warn(`Error reading blog file for slug "${slug}" : `, error)
        return null
    }
}


export const getBlogs = async ()=>{
    try {
        const files = await fs.readdir(path.join(process.cwd(), "src/data"))

        // 1. Filter out everything except .mdx files
        const mdxFiles = files.filter(file => file.endsWith('.mdx'));

        const allBlogs = await Promise.all(mdxFiles.map(async file => {
            const slug = file.replace('.mdx', "")
            const frontmatter = await getBlogFrontMatterBySlug(slug);
            return {
                slug,
                ...frontmatter
            }
        }))

        // Sort newest-first by date (invalid/missing dates sink to the bottom)
        const sortedBlogs = allBlogs.sort((a, b) => {
            const timeA = a?.date ? new Date(a.date).getTime() : 0
            const timeB = b?.date ? new Date(b.date).getTime() : 0
            return timeB - timeA
        })

        return sortedBlogs
    } catch (error) {
        console.warn("Error while fetching blogs", error)
        return null
    }
}

export const getBlogFrontMatterBySlug = async(slug: string)=>{

    try {
        const singleBlog = await fs.readFile(path.join(process.cwd(), "src/data", `${slug}.mdx`), "utf-8")

        if (!singleBlog) {
            return null
        }

        const { frontmatter } = await compileMDX<BlogFrontMatterType>({
            source: singleBlog,
            options: { parseFrontmatter: true }
        })

        return frontmatter
    } catch (error) {
        console.warn(`Error while getting the fronntmatter for ${slug}`, error)
    }
}