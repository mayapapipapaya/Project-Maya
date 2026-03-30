# Copilot Instructions — Studio
# Auto-loaded by VS Code Copilot. Read this before every task.

## Stack
- Next.js 14 App Router + Turbopack, TypeScript strict
- Plain CSS only: .module.css per component + globals.css + typography.css
- NO Tailwind. NO styled-components. NO CSS-in-JS. Ever.
- Fonts: Cormorant Garamond (--font-serif) · Caveat (--font-hand) · Inter (--font-sans)
- Convex: real-time reactive DB + serverless functions
- Cloudflare R2: file/object storage via @convex-dev/r2
- Supabase: auth only (magic link + email/password)
- lucide-react for icons
- clsx for conditional class names

## Project Structure
src/
  app/                    → Next.js App Router pages and layouts
  components/             → UI components — each has a paired .module.css
  components/providers/   → ConvexClientProvider
  lib/supabase/           → client.ts and server.ts Supabase helpers
  styles/                 → globals.css (CSS custom properties design tokens)
convex/
  schema.ts               → DB schema
  items.ts                → Sample real-time query + mutation
public/                   → Static assets
.env.local                → Secrets — gitignored
vercel.json               → Vercel config

## CSS Conventions
- All design tokens live in globals.css as CSS custom properties
- Never hardcode hex colors or font names in component CSS — always use var(--token)
- Component CSS files use CSS Modules (*.module.css), import as styles
- Use clsx() for conditional class names
- Never add Tailwind or any utility-class framework

## Convex Patterns
- All DB access goes through convex/ functions
- useQuery(api.items.list) for real-time reads
- useMutation(api.items.create) for writes

## Supabase Auth Pattern
- Browser: import createClient from @/lib/supabase/client
- Server: import createClient from @/lib/supabase/server
- Middleware at src/middleware.ts refreshes session

## Deployment
- Vercel: push to main → auto-deploys
- Convex: npx convex deploy for backend

## Rules
- When adding a component: create ComponentName.tsx + ComponentName.module.css
- When adding a Convex function: update schema.ts if new table needed
- Never ask to re-explain the stack — derive everything from here
