'use client'
import styles from './subscribe.module.css'

export default function SubscribePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="/canary2.png" alt="Canary" className={styles.logo} />
        <h1 className={styles.title}>Follow Canary's Development</h1>
        <p className={styles.blurb}>
          Canary releases your files or messages if you don't check in. You define the schedule and the recipients. If you go silent, the system triggers the release of your data.
        </p>
        <div className={styles.embedWrapper}>
          <div data-supascribe-embed-id="86399153858" data-supascribe-subscribe></div>
        </div>
      </div>
    </div>
  )
}