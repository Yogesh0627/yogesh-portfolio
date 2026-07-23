import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/ui";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL("https://yogeshchauhan.dev"),
  title: {
    default: 'Yogesh Chauhan | Full Stack Developer (Node.js, Java & React)',
    template: '%s | Yogesh Chauhan'
  },
  description: 'Full-stack developer who ships web apps end-to-end — from Node.js and Spring Boot APIs to polished React interfaces. Software Engineer at Work Companion.',
  keywords: [
    'Full Stack Developer',
    'Node.js',
    'React',
    'Next.js',
    'TypeScript',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'MongoDB',
    'AI Integration',
    'Software Engineer',
    'Backend Developer'
  ],
  alternates: {
    canonical: "/",
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'Yogesh Chauhan — Blog' }],
    },
  },
  openGraph: {
    title: 'Yogesh Chauhan | Portfolio',
    description: 'Full-stack developer building scalable web apps with React, Node.js, Java and Spring Boot.',
    type: 'website',
    url: 'https://yogeshchauhan.dev',
    siteName: 'Yogesh Chauhan Portfolio',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yogesh Chauhan | Portfolio',
    description: 'Full-stack developer building scalable web apps with React, Node.js, Java and Spring Boot.',
    creator: '@Yogesh0130',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} relative bg-neutral-100 antialiased  [--pattern-fg:var(--color-neutral-950)]/5 dark:bg-neutral-950 dark:[--pattern-fg:var(--color-neutral-100)]/5`}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Yogesh Chauhan",
                "url": "https://yogeshchauhan.dev", // Replace with your actual domain
                "logo": "https://yogeshchauhan.dev/yogesh.jpg",
                "image": "https://yogeshchauhan.dev/yogesh.jpg",
                "jobTitle": "Software Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Work Companion (WoCo)",
                  "url": "https://woco.co.in"
                },
                "alumniOf": {
                  "@type": "Organization",
                  "name": "Agami Technologies",
                  "url": "https://www.agamitechnologies.com"
                },
                "sameAs": [
                  "https://github.com/Yogesh0627",
                  "https://www.linkedin.com/in/yogeshchauhan-dev/",
                  "https://x.com/Yogesh0130"
                ],
                "email": "chauhanyogesh950@gmail.com",
                "knowsAbout": [
                  "Full Stack Development",
                  "Node.js",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Java",
                  "Spring Boot",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "AI Integration",
                  "AWS"
                ],
                "description": "Full-stack software engineer specializing in scalable web applications with React, Node.js, TypeScript, Java and Spring Boot."
              })
            }}
          />
          <NextThemesProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange>
            <Toaster position="top-center" />
            <Navbar />
            {children}
            <Footer />
          </NextThemesProvider>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
