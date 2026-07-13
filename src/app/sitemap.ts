import { MetadataRoute } from 'next'
import projectsData from '@/data/projectsData.json'
import { getBlogs } from '@/utils/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://yogeshchauhan.dev'

    // Define your main pages
    const routes = ['', '/about', '/projects', '/blog', '/contact'].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1 : 0.8, // Home page is priority 1
        })
    )

    // Per-project case-study pages
    const projectRoutes = projectsData
        .filter((project) => project.slug)
        .map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))

    // Individual blog posts
    const blogs = (await getBlogs()) ?? []
    const blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: blog.date ? new Date(blog.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...routes, ...projectRoutes, ...blogRoutes]
}