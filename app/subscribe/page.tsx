'use client'
import styles from './subscribe.module.css'

export default function SubscribePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="/canary-optimized.webp" alt="Canary" className={styles.logo} />
        <h1 className={styles.title}>Follow Canary's Development</h1>
        <p className={styles.blurb}>
          Get the latest updates on Canary's development. Be the first to know about new features, security updates, and important announcements.
        </p>
        <div className={styles.embedWrapper}>
          <div data-supascribe-embed-id="86399153858" data-supascribe-subscribe></div>
        </div>
      </div>
    </div>
  )
}