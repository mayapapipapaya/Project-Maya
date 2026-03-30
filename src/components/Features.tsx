'use client'

import { useEffect, useRef } from 'react'
import { Zap, Layers, Globe } from 'lucide-react'
import clsx from 'clsx'
import styles from './Features.module.css'

const features = [
  {
    icon: Zap,
    accent: 'accent1',
    title: 'Real-time Everything',
    body: 'Powered by Convex — data syncs instantly across every connected client. No polling, no staleness.',
  },
  {
    icon: Layers,
    accent: 'accent2',
    title: 'Editorial Design',
    body: 'Typography-first layouts with expressive type scales, organic shapes, and intentional white space.',
  },
  {
    icon: Globe,
    accent: 'accent3',
    title: 'Edge Deployed',
    body: 'Vercel + Cloudflare R2 + Convex Cloud — your app lives at the edge, globally distributed.',
  },
]

export default function Features() {
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.visible)
        })
      },
      { threshold: 0.15 }
    )
    cardsRef.current.forEach((c) => c && observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="features">
      <h2 className={styles.heading}>What we do.</h2>
      <div className={styles.grid}>
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className={styles.card}
              ref={(el) => { if (el) cardsRef.current[i] = el }}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={clsx(styles.iconCircle, styles[f.accent])}>
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardBody}>{f.body}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
