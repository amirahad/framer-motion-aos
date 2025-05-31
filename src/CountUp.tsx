"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type CountUpProps = {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  margin?: string;
  suffix?: string;
  prefix?: string;
};

export function CountUp({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className = "",
  once = true,
  margin = "-10% 0px -10% 0px",
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const ref = useRef(null);  const isInView = useInView(ref, {
    once,
    margin: margin as any,
  });
  
  const [currentValue, setCurrentValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now() + delay * 1000;
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      
      if (now >= endTime) {
        setCurrentValue(to);
        return;
      }

      const progress = (now - startTime) / (duration * 1000);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const value = from + (to - from) * easeOutProgress;
      
      setCurrentValue(value);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, from, to, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {`${prefix}${Math.round(currentValue)}${suffix}`}
    </motion.span>
  );
}
