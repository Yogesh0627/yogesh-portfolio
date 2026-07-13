import { Container, Heading, SubHeading } from "@/components/ui"
import { Link } from "next-view-transitions"
import { IconArrowLeft } from "@tabler/icons-react"

const NotFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Container className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
                <p className="text-6xl font-bold tracking-tighter text-neutral-300 md:text-8xl dark:text-neutral-700">
                    404
                </p>
                <Heading className="mt-4">Page not found</Heading>
                <SubHeading className="mx-auto text-center">
                    The page you&apos;re looking for doesn&apos;t exist or may have been moved.
                </SubHeading>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-100 px-4 py-2 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset] dark:hover:bg-neutral-700"
                >
                    <IconArrowLeft className="size-4" aria-hidden="true" />
                    Back to home
                </Link>
            </Container>
        </div>
    )
}

export default NotFound
