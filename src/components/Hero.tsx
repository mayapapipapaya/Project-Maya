import clsx from 'clsx'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.scatter}>
        <span className={styles.greeting}>Hi, I&apos;m a...</span>

        <h1 className={styles.title}>STUDIO</h1>

        <p className={styles.tagline}>
          We craft digital experiences that feel<br />
          <em>alive, intentional, and unforgettable.</em>
        </p>

        <span className={clsx(styles.deco, styles.deco1)}>Creative ✦</span>
        <span className={clsx(styles.deco, styles.deco2)}>Builder ★</span>
        <span className={clsx(styles.deco, styles.deco3)}>Designer ✶</span>
        <span className={clsx(styles.deco, styles.deco4)}>Maker ◈</span>
      </div>

      <div className={styles.ctas}>
        <a href="#features" className={styles.btnPrimary}>See the work</a>
        <a href="#contact" className={styles.btnSecondary}>Get in touch</a>
      </div>
    </section>
  )
}
