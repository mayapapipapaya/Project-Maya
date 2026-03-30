# Studio — Agent & Developer Reference

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

```
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
```

## CSS Conventions
- All design tokens live in `src/styles/globals.css` as CSS custom properties
- Never hardcode hex colors or font names in component CSS — always use `var(--token)`
- Component CSS files use CSS Modules (`*.module.css`), imported as `styles`
- Use `clsx()` for conditional class names
- Never add Tailwind or any utility-class framework

## Convex Patterns
- All DB access goes through `convex/` functions
- `useQuery(api.items.list)` for real-time reads
- `useMutation(api.items.create)` for writes
- Run `npx convex dev` to initialize and generate `convex/_generated/`

## Supabase Auth Pattern
- Browser: `import { createClient } from '@/lib/supabase/client'`
- Server: `import { createClient } from '@/lib/supabase/server'`
- Middleware at `src/middleware.ts` refreshes the session automatically

## Deployment
- **Vercel**: push to `main` → auto-deploys
- **Convex**: `npx convex deploy` for backend

## Adding Components
1. Create `src/components/ComponentName.tsx`
2. Create `src/components/ComponentName.module.css`
3. Only use `var(--css-token)` references — never hardcode values

## Adding Convex Functions
1. Create or update `convex/yourModule.ts`
2. Update `convex/schema.ts` if a new table is needed
3. Re-run `npx convex dev` to regenerate types

## Environment Variables
Fill in `.env.local` before running dev or build:
- `NEXT_PUBLIC_CONVEX_URL` — from Convex dashboard
- `NEXT_PUBLIC_SUPABASE_URL` — from Supabase project settings
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — from Supabase project settings
- `CLOUDFLARE_R2_*` — from Cloudflare R2 dashboard

<!-- convex-ai-start -->
This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read `convex/_generated/ai/guidelines.md` first** for important guidelines on how to correctly use Convex APIs and patterns. The file contains rules that override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running `npx convex ai-files install`.
<!-- convex-ai-end -->
