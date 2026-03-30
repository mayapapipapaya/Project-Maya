import styles from './Marquee.module.css'

const text = 'DESIGN  ✦  BUILD  ✦  SHIP  ✦  REPEAT  ✦  '

export default function Marquee() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        <span>{text.repeat(6)}</span>
        <span aria-hidden>{text.repeat(6)}</span>
      </div>
    </div>
  )
}
