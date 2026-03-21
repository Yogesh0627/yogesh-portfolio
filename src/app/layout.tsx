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
});


export const metadata: Metadata = {
  title: {
    default: 'Yogesh | Full Stack Developer | Node.js & AWS Specialist',
    template: '%s | Yogesh'
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
  openGraph: {
    title: 'Yogesh | Portfolio',
    description: 'Portfolio of a Full Stack Developer.',
    type: 'website',
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
