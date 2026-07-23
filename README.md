# Yogesh Chauhan — Portfolio

Personal portfolio of a Full Stack Developer specializing in Node.js, Java/Spring Boot, and AWS. Built with Next.js 16, React 19, and Tailwind CSS 4.

🔗 **Live:** [yogeshchauhan.dev](https://yogeshchauhan.dev)

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS 4, `tw-animate-css`
- **Animation:** Motion (Framer Motion), `next-view-transitions`
- **UI:** Radix UI, Tabler / Lucide icons, `react-fast-marquee`
- **Content:** MDX blog (`@next/mdx`, `next-mdx-remote`)
- **Email:** Resend + React Email
- **Theming:** `next-themes` (light / dark / system)
- **Notifications:** Sonner
- **Language:** TypeScript

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Environment Variables

Create a `.env.local` file in the root:

```bash
RESEND_API_KEY=your_resend_api_key   # required for the contact form
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/            # App Router pages (home, about, projects, blog, contact)
│   ├── actions/    # Server actions (email)
│   └── sitemap.ts  # SEO sitemap
├── components/     # Feature + UI components
├── data/           # Projects data + MDX blog posts
├── emails/         # React Email templates
├── types/          # Shared TypeScript types
└── utils/          # Helpers (cn, mdx)
```

## Deployment

Deployed on [Vercel](https://vercel.com). Remember to set `RESEND_API_KEY` in the project's environment variables.

---

Built with love by Yogesh Chauhan.
