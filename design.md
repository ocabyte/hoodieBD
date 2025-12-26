# Hoodie E-commerce Website - Design Style Guide

## Design Philosophy

### Color Palette
- **Primary**: Deep charcoal (#2A2A2A) and warm white (#FAFAFA) for high contrast sophistication
- **Accent**: Sage green (#8B9A8B) for buttons and interactive elements - representing sustainable fashion trends
- **Supporting**: Soft beige (#F5F2ED) for section backgrounds and subtle warmth
- **Text**: Rich black (#1A1A1A) on light backgrounds, warm white on dark sections

### Typography
- **Display Font**: "Canela" serif for headings - bold, editorial feel that elevates streetwear to luxury status
- **Body Font**: "Suisse Int'l" sans-serif for clean, readable body text and UI elements
- **Accent Font**: "Reckless" serif for product names and special callouts

### Visual Language
- **Aesthetic**: Modern editorial meets streetwear luxury - think Highsnobiety or Hypebeast editorial design
- **Mood**: Sophisticated yet accessible, premium but not pretentious
- **Inspiration**: Kinfolk magazine's minimalism with the edge of contemporary streetwear brands
- **Photography Style**: High-contrast, moody lighting that emphasizes texture and fabric quality

## Visual Effects & Styling

### Used Libraries
1. **Anime.js** - Smooth micro-interactions and product card animations
2. **Splide.js** - Hero image carousel and product image galleries
3. **ECharts.js** - Size guide visualization and product comparison charts
4. **p5.js** - Dynamic background particles that respond to mouse movement
5. **Matter.js** - Floating product images in hero section
6. **PIXI.js** - Advanced image filters and hover effects on product cards
7. **Shader-park** - Subtle gradient background animations

### Animation & Effects
- **Hero Section**: Floating hoodie images with gentle physics-based movement using Matter.js
- **Product Cards**: 3D tilt effect on hover with depth shadows using CSS transforms and Anime.js
- **Image Galleries**: Ken Burns pan/zoom effects on product images
- **Background**: Subtle particle system with p5.js that creates ambient movement
- **Text Effects**: Color cycling emphasis on key phrases using Anime.js
- **Scroll Motion**: Gentle fade-in animations (max 24px movement) with 200ms timing

### Header & Navigation Effect
- **Navigation Bar**: Clean, minimal design with subtle backdrop blur
- **Logo**: Custom typography treatment with slight letter-spacing animation on hover
- **Cart Icon**: Animated item count with bounce effect when items added
- **Search Bar**: Expanding animation with focus states

### Interactive Elements
- **Buttons**: Soft shadows with hover lift effects and color transitions
- **Product Filters**: Smooth slide animations with active state indicators
- **Size Selection**: Visual size guide with hover measurements
- **Image Zoom**: Magnifying glass effect on product detail images
- **Shopping Cart**: Slide-out drawer with smooth transitions

### Layout & Composition
- **Grid System**: 12-column responsive grid with generous whitespace
- **Product Grid**: Masonry-style layout with staggered loading animations
- **Hero Section**: Split-screen layout with floating product imagery
- **Content Sections**: Alternating left/right content blocks with subtle parallax

### Color Usage Guidelines
- **Product Cards**: White backgrounds with subtle shadows, sage green accents for pricing
- **Call-to-Action Buttons**: Sage green with white text, darker green on hover
- **Navigation**: Dark charcoal background with warm white text
- **Footer**: Deep charcoal with sage green accents
- **Forms**: Clean white inputs with sage green focus states

### Responsive Design
- **Desktop**: Full-width hero with side-by-side product layouts
- **Tablet**: Stacked sections with maintained visual hierarchy
- **Mobile**: Single-column layout with touch-optimized interactions

### Accessibility Features
- **Contrast Ratios**: Minimum 4.5:1 for all text combinations
- **Focus States**: Clear visual indicators for keyboard navigation
- **Alt Text**: Descriptive text for all product images
- **Screen Reader**: Semantic HTML structure with proper ARIA labels

This design system creates a premium, modern shopping experience that elevates hoodies from casual wear to desirable fashion pieces while maintaining excellent usability and accessibility.