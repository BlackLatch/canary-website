'use client'
import styles from './kontakte2.module.css'
import { useEffect, useState, useRef } from 'react'

export default function Kontakte2() {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const fullText = 'If you go silent, Canary speaks for you.'
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
        }
      }, 80)
      
      return () => clearInterval(typeInterval)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 600)
    
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles['kontakte-container']} ref={containerRef}>
      <div 
        className={styles['paint-background']}
        style={{
          transform: `translateY(${scrollY > 1000 ? (scrollY - 1000) * 0.5 : 0}px)`
        }}
      ></div>
              <div 
          className={styles['dark-paint-background']}
          style={{
            opacity: scrollY > 3000 ? Math.min(1, (scrollY - 3000) / 500) : 0
          }}
        ></div>
      <div className={styles.header}>
        <div 
          className={styles['header-center']}
          style={{
            color: scrollY > 3000 ? 'white' : 'black',
            transition: 'color 0.3s ease'
          }}
        >
          <div className={styles['small-text']}>GitHub</div>
          <div className={styles['small-text']}>Docs</div>
          <div className={styles['small-text']}>Demo App</div>
          <div className={styles['small-text']}>About</div>
          <div className={styles['small-text']}>Newsletter</div>
        </div>
        <div className={styles.title}>
          <img src="/canary.png" alt="Canary Logo" className={styles.logo} />
        </div>
      </div>
      
      <div className={styles['typewriter-container']}>
        <div className={styles['target-circle']}>
          <div className={styles['circle-dot']} style={{transform: 'rotate(0deg) translateY(-400px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(45deg) translateY(-400px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(90deg) translateY(-400px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(135deg) translateY(-400px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(180deg) translateY(-400px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(225deg) translateY(-400px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(270deg) translateY(-400px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(315deg) translateY(-400px)'}}></div>
        </div>
        <div className={styles['typewriter-text']}>
          <span className={styles['typewriter-line']}>
            {displayedText}
            <span className={styles['cursor']} style={{opacity: showCursor ? 1 : 0}}>|</span>
          </span>
        </div>
      </div>
      
      <div 
        className={styles['description-container']}
        style={{
          opacity: (() => {
            if (scrollY < 100) return 0; // Hidden initially
            if (scrollY < 300) return (scrollY - 100) / 200; // Fade in
            if (scrollY < 2500) return 1; // Fully visible (much longer)
            if (scrollY < 2700) return 1 - (scrollY - 2500) / 200; // Fade out
            return 0; // Hidden after fade out
          })(),
          top: scrollY > 400 ? `${Math.max(40, 60 - (scrollY - 400) * 0.025)}%` : '60%',
          transition: 'opacity 0.4s ease-out, top 0.3s ease-out'
        }}
      >
        <p className={styles['description-text']}>
          Think of it like a safe for your most critical stories, truths, or instructions. If you can't personally unlock it—if you're detained, missing, or unable—Canary shares access to a predetermined party automatically.
        </p>
      </div>

      <div 
        className={styles['cta-container']}
        style={{
          opacity: (() => {
            if (scrollY < 200) return 0; // Hidden initially
            if (scrollY < 400) return (scrollY - 200) / 200; // Fade in
            if (scrollY < 2600) return 1; // Fully visible (much longer)
            if (scrollY < 2800) return 1 - (scrollY - 2600) / 200; // Fade out
            return 0; // Hidden after fade out
          })(),
          top: scrollY > 400 ? `${Math.max(55, 76 - (scrollY - 400) * 0.025)}%` : '76%',
          transition: 'opacity 0.4s ease-out, top 0.3s ease-out'
        }}
      >
        <button className={`${styles['cta-button']} ${styles['cta-primary']}`}>
          Try Demo
        </button>
        <button className={`${styles['cta-button']} ${styles['cta-secondary']}`}>
          Read Docs
        </button>
        <button className={`${styles['cta-button']} ${styles['cta-tertiary']}`}>
          Join Newsletter
        </button>
      </div>

              <div 
          className={styles['feature-section']}
          style={{
            opacity: scrollY > 3200 ? Math.min(1, (scrollY - 3200) / 400) : 0,
            transition: 'opacity 0.6s ease-out'
          }}
        >
        <div className={styles['feature-header']}>
          <h2 className={styles['feature-title']}>Canary Protection</h2>
          <p className={styles['feature-description']}>
            When silence speaks volumes, Canary ensures your most critical information reaches the right people at exactly the right time. Built with military-grade security and automated reliability.
          </p>
          <button className={styles['feature-cta']}>EXPLORE</button>
        </div>
        
        <div className={styles['feature-grid']}>
          <div className={styles['feature-item']}>
            <div className={styles['feature-icon']}>■</div>
            <div className={styles['feature-text']}>MILITARY-GRADE ENCRYPTION</div>
          </div>
          
          <div className={styles['feature-item']}>
            <div className={styles['feature-icon']}>▲</div>
            <div className={styles['feature-text']}>AUTOMATED DEAD MAN'S SWITCH</div>
          </div>
          
          <div className={styles['feature-item']}>
            <div className={styles['feature-icon']}>●</div>
            <div className={styles['feature-text']}>TRUSTED CONTACT DELIVERY</div>
          </div>
          
          <div className={styles['feature-item']}>
            <div className={styles['feature-icon']}>✓</div>
            <div className={styles['feature-text']}>ROBUST PRIVACY & SUPPORT</div>
          </div>
        </div>
      </div>

    </div>
  )
} 