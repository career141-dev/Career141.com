# Folder Structure
```
career141/
|- src/
|  |- app/
|  |  |- layout.tsx                  <- Root layout (fonts, ThemeProvider)
|  |  |- globals.css
|  |  |- (marketing)/               <- Public pages (Navbar + Footer)
|  |  |  |- layout.tsx
|  |  |  |- page.tsx               <- Home
|  |  |  |- about/page.tsx
|  |  |  |- services/page.tsx
|  |  |  |- careers/
|  |  |  |  |- page.tsx           <- Job listing
|  |  |  |  '- [id]/page.tsx      <- Job detail
|  |  |  |- blog/
|  |  |  |  |- page.tsx
|  |  |  |  '- [slug]/page.tsx
|  |  |  |- contact/page.tsx
|  |  |  '- pricing/page.tsx
|  |  |- (auth)/                    <- Centered layout
|  |  |  |- layout.tsx
|  |  |  |- login/page.tsx
|  |  |  |- register/page.tsx
|  |  |  '- forgot-password/page.tsx
|  |  |- (dashboard)/               <- Sidebar layout
|  |  |  |- layout.tsx
|  |  |  '- dashboard/
|  |  |     |- page.tsx
|  |  |     |- profile/page.tsx
|  |  |     |- applications/page.tsx
|  |  |     |- saved-jobs/page.tsx
|  |  |     '- settings/page.tsx
|  |  '- api/
|  |     |- contact/route.ts
|  |     |- jobs/route.ts
|  |     '- auth/route.ts
|  |- components/
|  |  |- ui/                        <- Shadcn auto-generated
|  |  |- animations/                <- FadeIn, StaggerChildren
|  |  |- layout/                    <- Navbar, Footer, ThemeProvider
|  |  |- sections/                  <- HeroSection, StatsSection, CTASection
|  |  |- cards/                     <- JobCard, BlogCard
|  |  |- forms/                     <- ContactForm
|  |  '- shared/                    <- SectionHeader, PageHeader
|  |- lib/
|  |  '- utils.ts                   <- cn(), formatDate(), truncate()
|  |- hooks/
|  |  |- useMediaQuery.ts
|  |  '- useDebounce.ts
|  |- types/
|  |  '- index.ts                   <- Job, BlogPost, Author, NavItem...
|  |- constants/
|  |  '- index.ts                   <- navItems, stats, siteConfig
|  '- config/
|     '- site.ts                    <- SEO config, routes
|- docs/
|  |- PROJECT_OVERVIEW.md
|  |- FOLDER_STRUCTURE.md
|  |- COMPONENT_GUIDE.md
|  '- ANIMATION_GUIDE.md
'- public/
   |- images/
   '- icons/
```