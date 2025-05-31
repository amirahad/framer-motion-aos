"use client";

import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type ParallaxScrollProps = {
  children: ReactNode;
  className?: string;
  /** Parallax offset multiplier */
  offset?: number;
  /** Custom speed (negative for reverse) */
  speed?: number;
};

export function ParallaxScroll({
  children,
  className = "",
  offset = 50,
  speed = 0.5,
}: ParallaxScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset * speed, offset * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
