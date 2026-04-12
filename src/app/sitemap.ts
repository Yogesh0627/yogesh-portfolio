import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
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

    return [...routes]
}