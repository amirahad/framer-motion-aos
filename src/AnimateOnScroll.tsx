"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Initial Y offset (pixels) */
  yOffset?: number;
  /** Animation type */
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "none";
  /** Custom variants if needed */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants?: any;
  /** Once or repeat on scroll */
  once?: boolean;  /** Margin for intersection observer */
  margin?: string | number;
  /** Easing function */
  ease?: string | number[];
};

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  yOffset = 30,
  animation = "fade",
  variants,
  once = true,
  margin = "-10% 0px -10% 0px",
  ease = "easeOut",
}: AnimateOnScrollProps) {
  const ref = useRef(null);  const isInView = useInView(ref, {
    once,
    margin: margin as any,
  });

  // Predefined variants for different animation types
  const getVariants = () => {
    if (variants) return variants;

    switch (animation) {
      case "slide-up":
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        };
      case "slide-down":
        return {
          hidden: { opacity: 0, y: -yOffset },
          visible: { opacity: 1, y: 0 },
        };
      case "slide-left":
        return {
          hidden: { opacity: 0, x: -yOffset },
          visible: { opacity: 1, x: 0 },
        };
      case "slide-right":
        return {
          hidden: { opacity: 0, x: yOffset },
          visible: { opacity: 1, x: 0 },
        };
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      case "none":
        return {
          hidden: {},
          visible: {},
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
