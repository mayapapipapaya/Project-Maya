'use client'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { ReactNode, useMemo } from 'react'

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL

  const convex = useMemo(() => {
    if (!convexUrl) return null
    try {
      return new ConvexReactClient(convexUrl)
    } catch {
      return null
    }
  }, [convexUrl])

  if (!convex) {
    // Convex not configured yet — render children without realtime support
    return <>{children}</>
  }

  return <ConvexProvider client={convex}>{children}</ConvexProvider>
}
