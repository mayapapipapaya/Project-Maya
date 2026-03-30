// TODO: wire up supabase.auth.signInWithOtp()
import styles from './login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Welcome back.</h1>
        <p className={styles.sub}>Enter your email to get a magic link ✦</p>

        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              required
            />
          </div>
          <button type="submit" className={styles.btn}>
            Send magic link
          </button>
        </form>
      </div>
    </div>
  )
}
