import { cn } from "@/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string
}
const Container = ({ children, className, ...props }: ContainerProps) => {
    return (
        <div {...props} className={cn("relative mx-auto h-full w-full max-w-4xl", "bg-white dark:bg-neutral-900", className)}>
            {children}
        </div>
    );
};

export  {Container};
