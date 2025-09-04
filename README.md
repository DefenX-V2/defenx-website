# DefenX Website

A modern, responsive website for DefenX - a comprehensive school safety solution that provides AI-powered detection, real-time tracking, instant communication, and post-incident support.

## Features

- **Modern Design**: Clean, professional design with DefenX brand colors
- **Responsive Layout**: Fully responsive across all device sizes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Tabbed technology section and interactive elements
- **Performance Optimized**: Built with Vite for fast development and builds

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd defenx-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Problem.jsx     # Problem statement
│   ├── Solution.jsx    # DefenX solution overview
│   ├── Technology.jsx  # Technology details with tabs
│   ├── Pricing.jsx     # Pricing and revenue projections
│   ├── GoToMarket.jsx  # Go-to-market strategy
│   └── Footer.jsx      # Footer with contact info
├── App.jsx             # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles and Tailwind imports
```

## Brand Colors

- **Cream**: `#f8f6e7` - Primary background color
- **Burgundy**: `#962137` - Primary brand color
- **Dark Red**: `#7a1b2e` - Secondary brand color
- **Light Cream**: `#fdfcf4` - Light background variant

## Key Sections

1. **Hero** - Main landing with value proposition and key statistics
2. **Problem** - Current school safety challenges and system failures
3. **Solution** - DefenX's four pillars (Detection, Tracking, Communication, Post-Incident)
4. **Technology** - Interactive tabs showing technical details
5. **Pricing** - Pricing model and cost comparison
6. **Go-to-Market** - Strategic rollout plan and market opportunity
7. **Footer** - Contact information and additional resources

## Customization

### Colors
Update brand colors in `tailwind.config.js`:

```javascript
colors: {
  'cream': '#f8f6e7',
  'burgundy': '#962137',
  'dark-red': '#7a1b2e',
  'light-cream': '#fdfcf4',
}
```

### Content
All content is directly in the component files and can be easily updated by modifying the respective JSX files.

## Performance

- Lazy loading for images and components
- Optimized animations with Framer Motion
- Minimal bundle size with tree shaking
- Fast development with Vite HMR

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to DefenX.
