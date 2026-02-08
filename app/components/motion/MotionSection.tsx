"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

type MotionSectionProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    id?: string;
};

const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for "premium" feel
            delay: delay
        }
    })
};

export const MotionSection = ({ children, delay = 0, className = "", id = "" }: MotionSectionProps) => {
    return (
        <motion.section
            id={id}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            custom={delay}
        >
            {children}
        </motion.section>
    );
};

export const MotionText = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
};
