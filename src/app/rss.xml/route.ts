import { getBlogs } from '@/utils/mdx'

const baseUrl = 'https://yogeshchauhan.dev'

const escapeXml = (unsafe: string) =>
    unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')

export async function GET() {
    const blogs = (await getBlogs()) ?? []

    const items = blogs
        .map((blog) => {
            const url = `${baseUrl}/blog/${blog.slug}`
            const pubDate = blog.date ? new Date(blog.date).toUTCString() : new Date().toUTCString()
            return `
    <item>
      <title>${escapeXml(blog.title ?? blog.slug ?? '')}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(blog.description ?? '')}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`
        })
        .join('')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Yogesh Chauhan — Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Notes on web development — React, Node.js, AI, and distributed systems.</description>
    <language>en</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
    })
}
