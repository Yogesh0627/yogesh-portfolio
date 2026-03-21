'use client'
import { IconBrandMongodb, IconBrandReact, IconBrandVercel } from "@tabler/icons-react";
import { motion } from "motion/react";
import { ReactElement } from "react";

type ChipItem = {
    id: number;
    logo: ReactElement;
    title: string;
};

type Props = {
    chipData?: ChipItem[];
};

const ExpandableChip = ({
    chipData = [
        { id: 1, logo: (<IconBrandReact />), title: "Next" },
        { id: 2, logo: (<IconBrandVercel />), title: "Vercel" },
        { id: 3, logo: (<IconBrandMongodb />), title: "MongoDB" },
    ],
}: Props) => {

    const childVariant = {
        initial: {
            paddingRight: 0
        },
        hover: {
            paddingRight: 4
        }
    };

    const textVariant = {
        initial: {
            width: 0,
            opacity: 0
        },
        hover: {
            width: "auto",
            opacity: 1
        }
    };

    return (
        <div className="mt-2 max-w-56 flex flex-wrap gap-1">
            {chipData.map((chip) => (
                <motion.div
                    key={chip.id}
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 -mr-3 hover:z-10"
                >
                    <motion.span variants={childVariant}>
                        {chip.logo}
                    </motion.span>

                    <motion.span
                        variants={textVariant}
                        className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
                    >
                        {chip.title}
                    </motion.span>
                </motion.div>
            ))}
        </div>
    );
};

export default ExpandableChip;



