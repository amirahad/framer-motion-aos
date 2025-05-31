# Framer Motion AOS (Animate on Scroll)

A beautiful and performant React library for scroll-based animations using Framer Motion. Create stunning scroll-triggered animations with minimal code.

## Features

- 🎨 **Multiple Animation Types**: Fade, slide, zoom, rotate, flip, bounce, and elastic animations
- 🚀 **Performance Optimized**: Uses Framer Motion's optimized animation engine
- 📱 **Responsive**: Works perfectly on all device sizes
- 🎛️ **Highly Customizable**: Extensive props for fine-tuning animations
- 📦 **TypeScript Support**: Full TypeScript support with comprehensive type definitions
- 🔧 **Developer Friendly**: Simple API with sensible defaults
- 🎯 **Intersection Observer**: Efficient scroll detection using modern web APIs

## Installation

```bash
npm install framer-motion-aos framer-motion
```

```bash
yarn add framer-motion-aos framer-motion
```

```bash
pnpm add framer-motion-aos framer-motion
```

## Quick Start

```tsx
import { AnimateOnScroll } from 'framer-motion-aos';

function App() {
  return (
    <div>
      <AnimateOnScroll animation="fade">
        <h1>This will fade in when scrolled into view</h1>
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="slide-up" delay={0.2}>
        <p>This will slide up with a delay</p>
      </AnimateOnScroll>
    </div>
  );
}
```

## Components

### AnimateOnScroll

The main component for scroll-based animations.

```tsx
<AnimateOnScroll
  animation="slide-up"
  duration={0.6}
  delay={0.1}
  yOffset={50}
  once={true}
  className="my-component"
>
  <YourContent />
</AnimateOnScroll>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | `string` | `"fade"` | Animation type: `"fade"`, `"slide-up"`, `"slide-down"`, `"slide-left"`, `"slide-right"`, `"zoom"`, `"none"` |
| `duration` | `number` | `0.5` | Animation duration in seconds |
| `delay` | `number` | `0` | Animation delay in seconds |
| `yOffset` | `number` | `30` | Initial Y offset for slide animations (pixels) |
| `once` | `boolean` | `true` | Whether to animate only once or on every scroll |
| `margin` | `string` | `"-10% 0px -10% 0px"` | Intersection observer margin |
| `ease` | `string \| number[]` | `"easeOut"` | Easing function |
| `variants` | `object` | `undefined` | Custom Framer Motion variants |
| `className` | `string` | `""` | CSS class name |

### StaggerContainer

Animate multiple children with staggered timing.

```tsx
<StaggerContainer staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerContainer>
```

### CountUp

Animate numbers counting up when scrolled into view.

```tsx
<CountUp
  from={0}
  to={100}
  duration={2}
  suffix="%"
  prefix="$"
/>
```

### ParallaxScroll

Create parallax scrolling effects.

```tsx
<ParallaxScroll speed={0.5} offset={100}>
  <img src="background.jpg" alt="Parallax background" />
</ParallaxScroll>
```

## Animation Presets

Use pre-built animation variants for common effects:

```tsx
import { AnimateOnScroll, animationPresets } from 'framer-motion-aos';

<AnimateOnScroll variants={animationPresets.bounceIn}>
  <div>Bouncy animation!</div>
</AnimateOnScroll>
```

Available presets:
- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `scaleOut`
- `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`
- `rotateIn`, `rotateInLeft`, `rotateInRight`
- `flipInX`, `flipInY`
- `bounceIn`, `elasticIn`

## Advanced Usage

### Custom Variants

```tsx
const customVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    rotate: -10 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300
    }
  }
};

<AnimateOnScroll variants={customVariants}>
  <div>Custom animation</div>
</AnimateOnScroll>
```

### Staggered Lists

```tsx
<StaggerContainer staggerDelay={0.1} duration={0.6}>
  {items.map((item, index) => (
    <div key={index} className="list-item">
      {item.title}
    </div>
  ))}
</StaggerContainer>
```

### Multiple Triggers

```tsx
<AnimateOnScroll 
  animation="slide-up" 
  once={false}
  margin="-20% 0px -20% 0px"
>
  <div>Animates every time it enters the viewport</div>
</AnimateOnScroll>
```

## TypeScript

Full TypeScript support is included:

```tsx
import { AnimateOnScrollProps } from 'framer-motion-aos';

const MyComponent: React.FC<AnimateOnScrollProps> = (props) => {
  return <AnimateOnScroll {...props} />;
};
```

## Performance Tips

1. Use `once={true}` for better performance when you only need animations to run once
2. Adjust the `margin` prop to control when animations trigger
3. Consider using `will-change: transform` CSS property for smoother animations
4. Use `transform` and `opacity` properties for the best performance

## Browser Support

- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 79+

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see LICENSE file for details.

## Credits

Built with ❤️ using [Framer Motion](https://www.framer.com/motion/)
