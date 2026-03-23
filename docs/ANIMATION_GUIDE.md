# Animation Guide

## Library: Framer Motion

### FadeIn (scroll-triggered)
```tsx
import { FadeIn } from '@/components/animations'
<FadeIn delay={0.2} direction="up">
  <YourContent />
</FadeIn>
```

### StaggerChildren (list animations)
```tsx
import { StaggerChildren, StaggerItem } from '@/components/animations'
<StaggerChildren>
  {items.map(item => <StaggerItem key={item.id}>{item.name}</StaggerItem>)}
</StaggerChildren>
```

### Inline Framer Motion
```tsx
'use client'
import { motion } from 'framer-motion'
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  content
</motion.div>
```

## Rules
- All animated components must be 'use client'
- Use FadeIn/StaggerChildren wrappers over raw motion.div when possible
- Keep animation durations between 0.3s - 0.7s