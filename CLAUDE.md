# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Canary website - a Next.js 14 static site with TypeScript, configured for static export. It's a landing page for the Canary application, which is a digital dead man's switch for critical information.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server on http://localhost:3000 (hot reload enabled)
- `npm run build` - Build production-ready static site
- `npm run lint` - Run ESLint for code quality checks
- `npm start` - Serve production build locally

### Build and Export
- `npm run static` or `npm run build` - Generate static HTML export (configured via `output: 'export'` in next.config.js)
- Static files are output to `out/` directory after build

## Architecture

### Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: CSS Modules (globals.module.css, responsive.module.css)
- **Deployment**: Configured for static hosting with Docker/Nginx support

### Key Structural Decisions
- **Static Export**: Configured as a static site with `output: 'export'` and `trailingSlash: true` for compatibility with static hosts
- **Client Components**: Main page uses `'use client'` directive for interactive features (typewriter animation, scroll effects)
- **App Router**: Uses Next.js 14 App Router structure with `app/` directory
- **Page Structure**: Single-page application with scroll-based navigation to sections (about, features, newsletter)

### Directory Layout
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page with scroll animations
  - `layout.tsx` - Root layout with metadata
  - `about/`, `features/`, `newsletter/` - Additional route pages
  - `*.module.css` - Component-specific styles
- `public/` - Static assets (images, fonts)
- `Dockerfile` & `nginx.conf` - Docker deployment configuration

### Important Implementation Details
- **Scroll-based animations**: Main page uses `scrollY` state to control visibility and transformations of sections
- **Section navigation**: Programmatic scrolling to specific Y positions for section anchors
- **Newsletter integration**: Beehiiv embed for newsletter signup
- **Font optimization**: Custom fonts loaded from public directory