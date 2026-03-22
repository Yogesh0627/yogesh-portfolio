"use client"

import { motion, HTMLMotionProps } from "framer-motion"

type MotionDivProps = HTMLMotionProps<"div">

const MotionDiv = (props: MotionDivProps) => {
    return <motion.div {...props} />
}

export default MotionDiv