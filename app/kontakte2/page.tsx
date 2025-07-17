import styles from './kontakte2.module.css'

export default function Kontakte2() {
  return (
    <div className={styles['kontakte-container']}>
      <div className={styles.header}>
        <div className={styles['header-center']}>
          <div className={styles['small-text']}>GitHub</div>
          <div className={styles['small-text']}>Demo App</div>
          <div className={styles['small-text']}>About</div>
          <div className={styles['small-text']}>Newsletter</div>
        </div>
        <div className={styles.title}>
          <img src="/canary2.png" alt="Canary Logo" className={styles.logo} />
          canary
        </div>
      </div>
      
      <div className={styles['notation-area']}>
        <div className={styles['typewriter-text']}>
          <span className={styles['typewriter-line']}>open source truth protection</span>
        </div>
        {/* MORSE CODE: "OPEN SOURCE TRUTH PROTECTION" */}
        
        {/* O = --- */}
        <div className={styles['notation-row']}>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* P = .--. */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* E = . */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* N = -. */}
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.large}`}></div>
        </div>
        
        {/* S = ... */}
        <div className={styles['notation-row']}>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* O = --- */}
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* U = ..- */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* R = .-. */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
        </div>
        
        {/* C = -.-. */}
        <div className={styles['notation-row']}>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* E = . */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.large}`}></div>
          
          {/* T = - */}
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* R = .-. */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
        </div>
        
        {/* U = ..- */}
        <div className={styles['notation-row']}>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* T = - */}
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* H = .... */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.large}`}></div>
        </div>
        
        {/* P = .--. */}
        <div className={styles['notation-row']}>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* R = .-. */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* O = --- */}
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
        </div>
        
        {/* T = - */}
        <div className={styles['notation-row']}>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* E = . */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* C = -.-. */}
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* T = - */}
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* I = .. */}
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
        </div>
        
        {/* O = --- */}
        <div className={styles['notation-row']}>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.medium}`}></div>
          
          {/* N = -. */}
          <div className={`${styles.dash}`}></div>
          <div className={`${styles.space} ${styles.small}`}></div>
          <div className={`${styles.dot} ${styles.small}`}></div>
        </div>


      </div>
    </div>
  )
} 