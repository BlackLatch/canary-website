'use client'
import styles from './globals.module.css'
import responsive from './responsive.module.css'
import { useEffect, useState, useRef } from 'react'
import Script from 'next/script'
import { useIsMobile } from './hooks/useIsMobile'
import MobileVersion from './MobileVersion'

export default function Kontakte2() {
  const isMobile = useIsMobile(768)
  const [isClient, setIsClient] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'If you go silent Canary speaks for you.'

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isMobile && isClient) {
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
    }
  }, [isMobile, isClient])
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 600)
    
    return () => clearInterval(cursorInterval)
  }, [])

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash)
        }, 100)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (!isClient) {
    return null
  }

  if (isMobile) {
    return (
      <>
        <MobileVersion />
      </>
    )
  }

  return (
    <div className={styles['desktop-container']}>
      {/* Header */}
      <header className={styles['desktop-header']}>
        <div className={styles['desktop-nav']}>
          <img src="/canary-optimized.webp" alt="Canary" className={styles['desktop-logo']} />
          <div className={styles['desktop-nav-links']}>
            <a href="https://github.com/linaventures/canary" target="_blank" rel="noopener noreferrer">Source Code</a>
            <a href="https://docs.canaryapp.io/" target="_blank" rel="noopener noreferrer">Documentation</a>
            <a href="https://demo.canaryapp.io/" target="_blank" rel="noopener noreferrer">Demo App</a>
            <div onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About</div>
            <div onClick={() => scrollToSection('features')} style={{ cursor: 'pointer' }}>Features</div>
            <div onClick={() => scrollToSection('newsletter')} style={{ cursor: 'pointer' }}>Newsletter</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles['desktop-hero']}>
        <div className={styles['desktop-hero-content']}>
          <h1 className={styles['desktop-title']}>
            <div className={styles['desktop-typewriter-line']}>
              If you go silent
            </div>
            <div className={styles['desktop-typewriter-line']}>
              <span className={styles['desktop-canary-word']}>Canary</span> speaks for you.
              <span className={styles['desktop-cursor']} style={{opacity: showCursor ? 1 : 0}}>|</span>
            </div>
          </h1>
        </div>
        <div className={styles['desktop-hero-bottom-section']}>
          <p className={styles['desktop-hero-quote']}>
            <em>"If you are hearing this message, it means I could not respond. Here is what you need to know…"</em>
          </p>
          <div className={styles['desktop-hero-bottom-buttons']}>
            <a href="https://demo.canaryapp.io/" target="_blank" rel="noopener noreferrer" className={`${styles['desktop-cta-button']} ${styles['desktop-primary']}`}>
              Try Demo
            </a>
            <a href="https://docs.canaryapp.io/" target="_blank" rel="noopener noreferrer" className={`${styles['desktop-cta-button']} ${styles['desktop-secondary']}`}>
              Read Documentation
            </a>
            <a href="#newsletter" className={`${styles['desktop-cta-button']} ${styles['desktop-tertiary']}`}>
              Join Newsletter
            </a>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className={styles['desktop-section']}>
        <h2 className={styles['desktop-section-title']}>
          At its core, Canary is a<br />
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles['desktop-dead-mans-switch-link']}>
            dead man's switch
          </a>
        </h2>
        <div className={styles['desktop-section-content']}>
          <p>
            Canary releases your files or messages if you don't check in. You define the schedule and the recipients. If you go silent, the system triggers the release of your data — either privately to trusted contacts or publicly to everyone.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles['desktop-section']}>
        <h2 className={styles['desktop-section-title']}>How it works</h2>
        <div className={styles['desktop-steps']}>
          <div className={styles['desktop-step']}>
            <div className={styles['desktop-step-number']}>01</div>
            <div className={styles['desktop-step-content']}>
              <div className={styles['desktop-step-label']}>Set Check-in Schedule</div>
            </div>
          </div>
          <div className={styles['desktop-step']}>
            <div className={styles['desktop-step-number']}>02</div>
            <div className={styles['desktop-step-content']}>
              <div className={styles['desktop-step-label']}>Choose Release Method</div>
            </div>
          </div>
          <div className={styles['desktop-step']}>
            <div className={styles['desktop-step-number']}>03</div>
            <div className={styles['desktop-step-content']}>
              <div className={styles['desktop-step-label']}>Encrypt & Upload Files</div>
            </div>
          </div>
          <div className={styles['desktop-step']}>
            <div className={styles['desktop-step-number']}>04</div>
            <div className={styles['desktop-step-content']}>
              <div className={styles['desktop-step-label']}>Activate Vault</div>
            </div>
          </div>
          <div className={styles['desktop-step']}>
            <div className={styles['desktop-step-number']}>05</div>
            <div className={styles['desktop-step-content']}>
              <div className={styles['desktop-step-label']}>Check In</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className={styles['desktop-section']}>
        <h2 className={styles['desktop-section-title']}>Technology</h2>
        <div className={styles['desktop-section-content']}>
          <p>
            The system is designed with censorship resistance, redundancy, and trust minimization at its core. Files are encrypted end-to-end and stored across a decentralized network, making them far harder to lose, seize, or take offline. Release is coordinated through threshold cryptography (TACo), which distributes control so no single server, authority, or even the Canary team itself holds unilateral power over execution.
          </p>
          <div className={styles['desktop-tech-stack-grid']}>
            <a href="https://taco.build" target="_blank" rel="noopener noreferrer" className={styles['desktop-tech-stack-card']}>
              <img src="/taco.svg" alt="TACo" className={styles['desktop-tech-logo']} />
            </a>
            <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer" className={styles['desktop-tech-stack-card']}>
              <img src="/ipfs.svg" alt="IPFS" className={styles['desktop-tech-logo']} />
            </a>
            <a href="https://codex.storage/" target="_blank" rel="noopener noreferrer" className={styles['desktop-tech-stack-card']}>
              <img src="/codex.svg" alt="Codex" className={styles['desktop-tech-logo']} />
            </a>
            <a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer" className={styles['desktop-tech-stack-card']}>
              <img src="/ethereum.svg" alt="Ethereum" className={styles['desktop-tech-logo']} />
            </a>
          </div>
          <div className={styles['desktop-learn-more-link']}>
            <a href="https://docs.canaryapp.io/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className={styles['desktop-section']}>
        <h2 className={styles['desktop-section-title']}>An open-source public good under active development</h2>
        <div className={styles['desktop-section-content']}>
          <p>
            Canary is not a stealth startup or a corporate product. It is an open-source public good, built in the open and under continuous development.
          </p>
          
          <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
            It's built on first principles:
          </p>
          
          <div className={styles['desktop-feature-grid']}>
            <div className={styles['desktop-feature-item']}>
              <img src="/end_to_end_encryption_icon.svg" alt="" className={styles['desktop-feature-icon']} />
              <div className={styles['desktop-feature-text']}>End-to-end encryption</div>
              <div className={styles['desktop-feature-subtext']}>contents are sealed until release.</div>
            </div>
            <div className={styles['desktop-feature-item']}>
              <img src="/censorship_resistant_icon.svg" alt="" className={styles['desktop-feature-icon']} />
              <div className={styles['desktop-feature-text']}>Censorship resistance</div>
              <div className={styles['desktop-feature-subtext']}>no authority can block delivery.</div>
            </div>
            <div className={styles['desktop-feature-item']}>
              <img src="/decentralised_icon.svg" alt="" className={styles['desktop-feature-icon']} />
              <div className={styles['desktop-feature-text']}>Decentralization</div>
              <div className={styles['desktop-feature-subtext']}>no central server, no single point of failure.</div>
            </div>
            <div className={styles['desktop-feature-item']}>
              <img src="/trust_minimized_icon.svg" alt="" className={styles['desktop-feature-icon']} />
              <div className={styles['desktop-feature-text']}>Trust minimized</div>
              <div className={styles['desktop-feature-subtext']}>guaranteed by cryptography, not by us.</div>
            </div>
          </div>
          
          <div className={styles['desktop-github-link']}>
            <a href="https://github.com/linaventures/canary" target="_blank" rel="noopener noreferrer">
              <span className={styles['desktop-github-icon']}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span> Source Code
            </a>
          </div>
        </div>
      </section>

      {/* Combined Origin Story and Support Us Section */}
      <section className={styles['desktop-combined-section']}>
        <div className={styles['desktop-two-columns']}>
          {/* Origin Story Column */}
          <div id="about" className={styles['desktop-column-left']}>
            <h2 className={styles['desktop-section-title']}>
              Learn about our<br />
              <a href="https://capsules.thirdroom.studio/1/" target="_blank" rel="noopener noreferrer" className={styles['desktop-origin-story-link']}>
                origin story
              </a>
            </h2>
            <div className={styles['desktop-section-content']}>
              <p>
                The name <em>Canary</em> comes from the <em>canary in the coal mine</em> — an early warning system that signaled danger before it was too late. Our project carries that same purpose: to ensure that silence itself becomes a signal, and that critical truths are not lost.
              </p>
              <p>
                Canary began as a winning hackathon project at the Web3 Privacy Now Hack in Berlin (<a href="#" target="_blank" rel="noopener noreferrer">link</a>) and was later accepted as the first project in the <strong>Cypherpunk Launchpad</strong>, a three-month incubation for early-stage privacy tools.
              </p>
            </div>
            <div className={styles['desktop-sponsor-container']}>
              <a href="https://web3privacy.info/" target="_blank" rel="noopener noreferrer" className={styles['desktop-sponsor-card']}>
                <img src="/w3pn.png" alt="W3PN" className={styles['desktop-sponsor-logo']} />
              </a>
            </div>
          </div>

          {/* Support Us Column */}
          <div className={styles['desktop-column-right']}>
            <h2 className={styles['desktop-section-title']}>Support Us ♥</h2>
            <div className={styles['desktop-section-content']}>
              <p>
                Today, Canary is led by a small team of three. Running the project requires real overhead, from servers, to tools that make it run, to the time spent on design and development. We didn't build Canary for profit, but for impact. To keep going, it needs support. Your contribution helps us survive, evolve, and sustains the people doing the work of stewardship.
              </p>
              <div className={styles['desktop-donation-container']}>
                <a href="https://etherscan.io/address/canaryapp.eth" target="_blank" rel="noopener noreferrer" className={styles['desktop-donation-button']}>
                  <span className={styles['desktop-ethereum-icon']}>Ξ</span> Donate: canaryapp.eth
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className={styles['desktop-newsletter']}>
        <h2 className={styles['desktop-newsletter-title']}>Stay Updated</h2>
        <p className={styles['desktop-newsletter-description']}>
          Get the latest updates on Canary's development.
        </p>
        <div className={styles['desktop-newsletter-embed']}>
          <iframe 
            src="https://canaryapp.substack.com/embed" 
            width="480" 
            height="280" 
            style={{
              border: '1px solid #EEE', 
              background: 'white', 
              borderRadius: '8px',
              maxWidth: '100%',
              width: '100%'
            }} 
            frameBorder="0" 
            scrolling="no"
          />
        </div>
      </section>
    </div>
  )
} 