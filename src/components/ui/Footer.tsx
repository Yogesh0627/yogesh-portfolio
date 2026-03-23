import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react"
import Link from "next/link"
import { Container } from "./Container"


const Footer = () => {
    return (
        <footer className="w-full mx-auto">
            <Container
                className="relative mx-auto h-full w-full max-w-4xl bg-white dark:bg-neutral-900 flex justify-between border-t border-neutral-100 px-10 py-3 md:py-3 dark:border-neutral-800">
                <p className=" text-xs text-neutral-500">Built with love by Yogesh</p>
                <div className="flex items-center justify-center gap-4">

                    {/* <Link href="#">
                    <IconBrandX className=" size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
                </Link> */}
                    <Link href="https://www.linkedin.com/in/yogesh-chauhan-318172119/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
                        <IconBrandLinkedin className=" size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
                    </Link>
                    <Link href="https://github.com/Yogesh0627" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">
                        <IconBrandGithub className=" size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
                    </Link>
                </div>
            </Container>
        </footer>
    )
}

export { Footer }