// Components
export { AnimateOnScroll } from './AnimateOnScroll';
export type { AnimateOnScrollProps } from './AnimateOnScroll';

export { StaggerContainer } from './StaggerContainer';
export type { StaggerContainerProps } from './StaggerContainer';

export { CountUp } from './CountUp';
export type { CountUpProps } from './CountUp';

export { ParallaxScroll } from './ParallaxScroll';
export type { ParallaxScrollProps } from './ParallaxScroll';

// Presets and utilities
export { 
  animationPresets, 
  transitionPresets, 
  durationPresets 
} from './presets';

// Re-export useful framer-motion hooks for convenience
export { 
  useInView, 
  useScroll, 
  useTransform, 
  useAnimation,
  useMotionValue,
  useSpring
} from 'framer-motion';
