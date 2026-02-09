"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  id?: string;
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  travel?: number;
};

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function FadeInSection({ children, className, delay = 0, y = 26, id }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={prefersReducedMotion ? undefined : { duration: 0.7, ease: easeCurve, delay }}
    >
      {children}
    </motion.section>
  );
}

export function FadeInBlock({ children, className, delay = 0, y = 20, id }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={prefersReducedMotion ? undefined : { duration: 0.64, ease: easeCurve, delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className, delay = 0, stagger = 0.08 }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: easeCurve,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxBlock({ children, className, travel = 42 }: ParallaxProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

  return (
    <div ref={wrapperRef} className={className}>
      <motion.div style={prefersReducedMotion ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}
