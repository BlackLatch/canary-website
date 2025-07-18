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
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      ></div>
      <div className={styles.header}>
        <div className={styles['header-center']}>
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
      
      <div 
        className={styles['typewriter-container']}
        style={{
          transform: `translateY(${scrollY * -0.1}px)`
        }}
      >
        <div className={styles['target-circle']}>
          <div className={styles['circle-dot']} style={{transform: 'rotate(0deg) translateY(-300px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(45deg) translateY(-300px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(90deg) translateY(-300px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(135deg) translateY(-300px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(180deg) translateY(-300px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(225deg) translateY(-300px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(270deg) translateY(-300px)'}}></div>
          <div className={styles['circle-dot']} style={{transform: 'rotate(315deg) translateY(-300px)'}}></div>
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
          transform: `translateY(${scrollY * -0.05}px)`,
          opacity: Math.max(0, 1 - scrollY / 800)
        }}
      >
        <p className={styles['description-text']}>
          Think of it like a safe for your most critical stories, truths, or instructions. If you can't personally unlock it—if you're detained, missing, or unable—Canary shares access to a predetermined party automatically.
        </p>
      </div>

      <div 
        className={styles['cta-container']}
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          opacity: Math.max(0, 1 - scrollY / 1000)
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

    </div>
  )
} 