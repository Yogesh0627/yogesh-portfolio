import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/ui";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";
import { ThemeProvider as NextThemesProvider } from 'next-themes'
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: 'swap',
});


export const metadata: Metadata = {
  // metadataBase: new URL("https://yogeshchauhan.dev"),
  title: {
    default: 'Yogesh Chauhan | Full Stack Developer | Node.js & AWS Specialist',
    template: '%s | Yogesh Chauhan'
  },
  description: 'Full Stack Developer with experience in Quality Analysis. Specialized in building scalable backend systems with Node.js, MongoDB, and AWS cloud integration.',
  keywords: [
    'Full Stack Developer',
    'Node.js',
    'React',
    'Next.js',
    'MongoDB',
    'QA Analyst',
    'Software Engineer',
    'Backend Developer'
  ],
  // alternates: {
  //   canonical: "/",
  // },
  openGraph: {
    title: 'Yogesh Chauhan | Portfolio',
    description: 'Portfolio of a Full Stack Developer.',
    type: 'website',
    // url: 'https://yogeshchauhan.dev',
    // siteName: 'Yogesh Chauhan Portfolio',
    locale: 'en_IN',
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
                "url": "https://yourportfolio.com", // Replace with your actual domain
                "logo": "https://yourportfolio.com/logo.png",
                "image": "https://yourportfolio.com/avatar.png",
                "jobTitle": "Software Engineer",
                "worksFor": [
                  { "@type": "Organization", "name": "Google" },
                  { "@type": "Organization", "name": "Microsoft" },
                  { "@type": "Organization", "name": "Amazon" },
                  { "@type": "Organization", "name": "WorkCompanion" }
                ],
                "sameAs": [
                  "https://github.com/your-username",
                  "https://linkedin.com/in/your-profile",
                  "https://twitter.com/your-handle"
                ],
                "email": "chauhanyogesh950@gmail.com",
                "description": "Software Engineer specializing in scalable backend systems, AWS, and AI-powered SaaS development."
              })
            }}
          />
          <NextThemesProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange>
            <Toaster position="top-center" />
            <Navbar />
            {children}
            <Footer />
          </NextThemesProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
