import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>Studio✦</span>
        <div className={styles.right}>
          <nav className={styles.links}>
            <a href="https://github.com" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://instagram.com" className={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://vercel.com" className={styles.link} target="_blank" rel="noopener noreferrer">Vercel</a>
            <a href="https://convex.dev" className={styles.link} target="_blank" rel="noopener noreferrer">Convex</a>
          </nav>
          <p className={styles.copy}>© {new Date().getFullYear()} Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
