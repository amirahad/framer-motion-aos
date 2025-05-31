// Animation presets for common use cases
export const animationPresets = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleOut: {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 0, scale: 0.8 },
  },

  // Slide animations
  slideInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },

  // Rotate animations
  rotateIn: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  },
  rotateInLeft: {
    hidden: { opacity: 0, rotate: -45 },
    visible: { opacity: 1, rotate: 0 },
  },
  rotateInRight: {
    hidden: { opacity: 0, rotate: 45 },
    visible: { opacity: 1, rotate: 0 },
  },

  // Flip animations
  flipInX: {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 },
  },
  flipInY: {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0 },
  },

  // Bounce effect
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  },

  // Elastic effect
  elasticIn: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 300,
      },
    },
  },
};

// Transition presets
export const transitionPresets = {
  easeInOut: { ease: "easeInOut" },
  easeIn: { ease: "easeIn" },
  easeOut: { ease: "easeOut" },
  linear: { ease: "linear" },
  spring: { type: "spring", damping: 20, stiffness: 300 },
  springBouncy: { type: "spring", damping: 10, stiffness: 100 },
  springGentle: { type: "spring", damping: 25, stiffness: 120 },
};

// Duration presets
export const durationPresets = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
};
