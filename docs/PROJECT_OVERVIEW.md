# Career141 - Project Overview

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS + Shadcn/UI
- Framer Motion (animations)
- React Hook Form + Zod (forms)
- next-themes (dark mode)

## Route Groups
- (marketing) - public pages with Navbar + Footer
- (dashboard) - authenticated pages with sidebar
- (auth) - login/register, centered layout

## Key Rules
- All animations use Framer Motion via /components/animations/
- All shared UI uses Shadcn components from /components/ui/
- Sections reused across pages live in /components/sections/
- Cards reused across pages live in /components/cards/
- Page-specific content stays inside the page file
- Shared text/config lives in /constants/index.ts