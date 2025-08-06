# DeFi Token Dashboard

A test application built with Next.js 15, React 19, and Tailwind CSS 4.

## Tech Stack & Features

### Next.js 15 Features
- **App Router Architecture**: Modern file-based routing with nested layouts and route groups
- **Dynamic Routing**: Token detail pages with `[address]` dynamic segments
- **API Routes**: Next.js Route Handlers for backend API endpoints
- **Incremental Static Regeneration (ISR)**: Pages revalidate every hour (`revalidate: 3600`)
- **Static Site Generation (SSG)**: Pre-rendered token pages with `generateStaticParams`
- **Dynamic Metadata**: SEO-optimized meta tags with `generateMetadata`
- **Streaming & Suspense**: Loading UI with React Suspense boundaries
- **Error Boundaries**: Custom error handling with error.tsx
- **Image Optimization**: Built-in next/image with configured remote patterns for crypto assets
- **Turbopack**: Lightning-fast development builds with `--turbopack`
- **Font Optimization**: Automatic font loading with next/font/google (Geist fonts)

### React 19 Features
- **Server Components**: Default server-side rendering for optimal performance
- **Client Components**: Interactive components with `'use client'` directive
- **Concurrent Rendering**: Smooth UI updates with React Suspense
- **Error Boundaries**: Graceful error handling with custom error UI
- **React 19.1.0**: Latest stable React features and optimizations

### UI & Styling
- **Tailwind CSS 4**: Next-generation utility-first CSS with PostCSS integration
- **shadcn/ui Components**: 17+ pre-configured, accessible components including:
  - Data tables, charts, sidebars, cards, buttons, forms
  - Dropdown menus, sheets, drawers, tooltips
  - Badges, breadcrumbs, skeletons for loading states
- **Radix UI Primitives**: Accessible, unstyled components for maximum flexibility
- **Dark Mode**: Built-in theme support with CSS custom properties
- **Responsive Design**: Mobile-first approach with container queries

### Data Management & Visualization
- **@tanstack/react-table v8**: Advanced data tables with:
  - Sorting, filtering, and pagination
  - Column visibility controls
  - Row selection
- **Recharts**: Beautiful, responsive charts for price data visualization
- **Zod**: Runtime type validation for API responses and forms

### Additional Libraries
- **Lucide React & Tabler Icons**: Comprehensive icon libraries
- **Sonner**: Elegant toast notifications
- **next-themes**: Theme management with system preference detection
- **Vaul**: Drawer components for mobile experiences
- **class-variance-authority**: Type-safe component variants
- **tailwind-merge**: Intelligent Tailwind class merging

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── (tokens)/            # Route group for token pages
│   │   ├── loading.tsx      # Loading UI with skeletons
│   │   └── page.tsx         # Main dashboard page
│   ├── token/
│   │   └── [address]/       # Dynamic token detail pages
│   │       ├── loading.tsx  # Token page loading state
│   │       └── page.tsx     # Token detail view
│   ├── api/                 # API Routes
│   │   └── tokens/          # Token data endpoints
│   ├── layout.tsx           # Root layout with sidebar
│   ├── error.tsx            # Global error boundary
│   └── not-found.tsx        # 404 page
├── common/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── data-table.tsx  # Advanced data table
│   │   └── app-sidebar.tsx # Navigation sidebar
│   ├── models/             # TypeScript types
│   ├── api-clients/        # API fetching utilities
│   └── constants/          # App constants
├── data.json               # Token information
└── mockPriceData.json      # Price chart data
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- adding `data.json` and `mockPriceData.json` inside `src` folder

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. The application uses Turbopack for fast refresh during development.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server with Turbopack |
| `build` | Create optimized production build |
| `start` | Start production server |
| `lint` | Run ESLint for code quality |
| `format` | Format code with Prettier |
| `format:check` | Check code formatting |

## Development Guidelines

### Component Development
- Components follow shadcn/ui patterns for consistency
- All components are TypeScript-first with proper type definitions
- Server Components by default, Client Components only when needed

### Code Style
- TypeScript 5 with strict mode
- ESLint with Next.js configuration
- Prettier with Tailwind CSS plugin for consistent formatting
- Path aliases: Use `@/*` for imports from `/src/*`

## Performance Optimizations

- **Static Generation**: Token pages are pre-rendered at build time
- **ISR**: Pages regenerate in the background after 1 hour
- **Image Optimization**: Remote images are optimized and cached
- **Code Splitting**: Automatic code splitting with dynamic imports
- **Font Optimization**: Fonts are loaded and cached efficiently
- **Suspense Boundaries**: Non-blocking UI updates with streaming

## Browser Support

This application supports all modern browsers with ES2020+ compatibility.