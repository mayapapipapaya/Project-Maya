'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Work', accent: 'accent1' },
  { label: 'About', accent: 'accent2' },
  { label: 'Lab', accent: 'accent3' },
  { label: 'Contact', accent: 'accent4' },
]

function LiveClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) +
          ' · ' +
          now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return <span className={styles.clock}>{time}</span>
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logoGroup}>
          <span className={styles.logo}>Studio✦</span>
          <LiveClock />
        </div>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href="#" className={clsx(styles.link, styles[link.accent])}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={clsx(styles.drawer, open && styles.drawerOpen)}>
        {navLinks.map((link) => (
          <a key={link.label} href="#" className={clsx(styles.drawerLink, styles[link.accent])}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
