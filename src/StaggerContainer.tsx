"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  /** Delay between each child animation */
  staggerDelay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Once or repeat on scroll */
  once?: boolean;
  /** Margin for intersection observer */
  margin?: string;
};

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  duration = 0.5,
  once = true,
  margin = "-10% 0px -10% 0px",
}: StaggerContainerProps) {
  const ref = useRef(null);  const isInView = useInView(ref, {
    once,
    margin: margin as any,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={childVariants}>{children}</motion.div>}
    </motion.div>
  );
}
