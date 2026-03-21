import { cn } from "@/utils";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("mx-auto h-full w-full max-w-4xl", className, "bg-white dark:bg-neutral-900 relative")}>
            {children}
        </div>
    );
};

export  {Container};
