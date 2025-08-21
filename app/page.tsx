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
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const fullText = 'If you go silent Canary speaks for you.'

  const scrollToSection = (section: string) => {
    let targetScrollY = 0;
    
    switch(section) {
      case 'about':
        targetScrollY = 3500; // Position where About (Origin Story) section is visible
        break;
      case 'features':
        targetScrollY = 5000; // Position where Features (At its core) section is visible
        break;
      case 'newsletter':
        targetScrollY = 10000; // Position where Newsletter section is visible
        break;
      default:
        targetScrollY = 0;
    }
    
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        // Small delay to ensure page is loaded
        setTimeout(() => {
          scrollToSection(hash)
        }, 100)
      }
    }

    // Handle initial load with hash
    handleHashChange()

    // Handle hash changes
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
            transform: `translateY(${
              scrollY < 2500 ? 100 : 
              scrollY < 3500 ? Math.max(0, 100 - ((scrollY - 2500) / 1000) * 100) :
              0
            }vh)`
          }}
        ></div>
      <div className={styles.header}>
        <div 
          className={styles['header-center']}
          style={{
            color: scrollY > 3000 && scrollY < 4500 ? 'white' : 'black',
            transition: 'color 0.3s ease'
          }}
        >
          <a href="https://github.com/linaventures/canary" target="_blank" rel="noopener noreferrer" className={styles['small-text']}>Source Code</a>
          <a href="https://docs.canaryapp.io/" target="_blank" rel="noopener noreferrer" className={styles['small-text']}>Docs</a>
          <a href="https://demo.canaryapp.io/" target="_blank" rel="noopener noreferrer" className={styles['small-text']}>Demo App</a>
          <div className={styles['small-text']} onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About</div>
          <div className={styles['small-text']} onClick={() => scrollToSection('features')} style={{ cursor: 'pointer' }}>Features</div>
          <div className={styles['small-text']} onClick={() => scrollToSection('newsletter')} style={{ cursor: 'pointer' }}>Newsletter</div>
        </div>
        <div className={styles.title}>
          <img src="/canary-optimized.webp" alt="Canary Logo" className={styles.logo} />
        </div>
      </div>
      
      <div className={styles['typewriter-container']}>
        <div className={styles['typewriter-text']}>
          <div className={styles['typewriter-line']}>
            If you go silent
          </div>
          <div className={styles['typewriter-line']}>
            <span>Canary</span> speaks for you.
            <span className={styles['cursor']} style={{opacity: showCursor ? 1 : 0}}>|</span>
          </div>
        </div>
      </div>


      
      <div 
        className={styles['hero-content-container']}
        style={{
          opacity: 1, // Always visible from start
          transform: scrollY > 500 ? `translateY(${Math.min(-300, (scrollY - 500) * -0.3)}px)` : 'translateY(0)',
          transition: 'opacity 0.4s ease-out, transform 0.3s ease-out'
        }}
      >
        <div className={styles['description-container']}>
          <h2 className={styles['desktop-tagline']}>
            A digital failsafe for what matters most
          </h2>
          <p className={styles['desktop-quote']}>
            <em>"If you are hearing this message, it means I could not respond. Here is what you need to know…"</em>
          </p>
          <div className={styles['desktop-waveform-placeholder']}>
            [audio waveform animation reminiscent of a voice note]
          </div>
        </div>

        <div className={styles['cta-container']}>
          <a href="https://demo.canaryapp.io/" target="_blank" rel="noopener noreferrer" className={`${styles['cta-button']} ${styles['cta-primary']}`}>
            Try Demo
          </a>
          <a href="https://docs.canaryapp.io/" target="_blank" rel="noopener noreferrer" className={`${styles['cta-button']} ${styles['cta-secondary']}`}>
            Read Docs
          </a>
          <div className={`${styles['cta-button']} ${styles['cta-tertiary']}`} onClick={() => window.scrollTo({ top: 10000, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            Join Newsletter
          </div>
        </div>
      </div>

                    <div 
        id="about"
        className={styles['feature-section']}
        style={{
          opacity: (() => {
            if (scrollY < 3200) return 0; // Hidden initially
            if (scrollY < 3600) return Math.min(1, (scrollY - 3200) / 400); // Fade in
            return 1; // Always visible once it appears
          })(),
          transition: 'opacity 0.6s ease-out'
        }}
      >
        <div className={styles['feature-header']}>
          <h2 className={styles['feature-title']}>Learn about our<br /><a href="https://capsules.thirdroom.studio/1/" target="_blank" rel="noopener noreferrer" className={styles['origin-story-red']} style={{ fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: '#e53e3e' }}>origin story</a></h2>
          <p className={styles['feature-description']}>
            The name <em>Canary</em> comes from the <em>canary in the coal mine</em> — an early warning system that signaled danger before it was too late. Our project carries that same purpose: to ensure that silence itself becomes a signal, and that critical truths are not lost.
          </p>
          <p className={styles['feature-description']}>
            Canary began as a winning hackathon project at the Web3 Privacy Now Hack in Berlin (<a href="#" className={styles['link']}>link</a>) and was later accepted as the first project in the <strong>Cypherpunk Launchpad</strong>, a three-month incubation for early-stage privacy tools.
          </p>
          <div className={styles['sponsor-container']}>
            <img src="/w3pn.png" alt="W3PN Sponsor" className={styles['inline-logo']} />
          </div>
        </div>
      </div>

      {/* White Slide */}
      <div 
        id="features"
        className={styles['white-slide']}
        style={{
          opacity: (() => {
            if (scrollY < 4500) return 0;
            if (scrollY < 5000) return Math.min(1, (scrollY - 4500) / 500);
            if (scrollY < 6000) return 1;
            if (scrollY < 6500) return Math.max(0, 1 - (scrollY - 6000) / 500);
            return 0;
          })(),
          transition: 'opacity 0.6s ease-out'
        }}
      >
        <div 
          className={styles['white-slide-content']}
          style={{
            transform: scrollY > 4800 && scrollY < 6200 
              ? `translateY(${(scrollY - 5000) * 0.15}px) scale(${1 + Math.max(0, (scrollY - 5000) * 0.0001)})`
              : 'translateY(0) scale(1)',
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className={styles['content-left']}>
            <h2 className={styles['white-slide-title']}>At its core, Canary is a dead man's switch (<a href="#" className={styles['link']}>link</a>)</h2>
            <p className={styles['white-slide-description']}>
              Canary releases your files or messages if you don't check in. You define the schedule and the recipients. If you go silent, the system triggers the release of your data — either privately to trusted contacts or publicly to everyone.
            </p>
            <p className={styles['white-slide-description']} style={{ fontWeight: 'bold', textAlign: 'center' }}>
              It's built on first principles:
            </p>
            
            <div className={styles['feature-grid']}>
              <div className={styles['feature-item']}>
                <img src="/end_to_end_encryption_icon.svg" alt="" className={styles['feature-icon']} />
                <div className={styles['feature-text']}>End-to-end encryption</div>
                <div className={styles['feature-subtext']}>contents are sealed until release.</div>
              </div>
              
              <div className={styles['feature-item']}>
                <img src="/censorship_resistant_icon.svg" alt="" className={styles['feature-icon']} />
                <div className={styles['feature-text']}>Censorship resistance</div>
                <div className={styles['feature-subtext']}>no authority can block delivery.</div>
              </div>
              
              <div className={styles['feature-item']}>
                <img src="/decentralised_icon.svg" alt="" className={styles['feature-icon']} />
                <div className={styles['feature-text']}>Decentralization</div>
                <div className={styles['feature-subtext']}>no central server, no single point of failure.</div>
              </div>
              
              <div className={styles['feature-item']}>
                <img src="/trust_minimized_icon.svg" alt="" className={styles['feature-icon']} />
                <div className={styles['feature-text']}>Trust minimized</div>
                <div className={styles['feature-subtext']}>guaranteed by cryptography, not by us.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Slide */}
      <div 
        className={styles['how-it-works-slide']}
        style={{
          opacity: (() => {
            if (scrollY < 5500) return 0;
            if (scrollY < 6000) return Math.min(1, (scrollY - 5500) / 500);
            if (scrollY < 6500) return 1;
            if (scrollY < 7000) return Math.max(0, 1 - (scrollY - 6500) / 500);
            return 0;
          })(),
          transition: 'opacity 0.6s ease-out'
        }}
      >
        <div className={styles['how-it-works-content']}>
          <h2 className={styles['how-it-works-main-title']}>How it works</h2>
          <div className={styles['industrial-steps-centered']}>
            <div className={styles['step-item']}>
              <div className={styles['step-marker']}>01</div>
              <div className={styles['step-content']}>
                <div className={styles['step-label']}>SET CHECK-IN SCHEDULE</div>
              </div>
            </div>
            <div className={styles['step-item']}>
              <div className={styles['step-marker']}>02</div>
              <div className={styles['step-content']}>
                <div className={styles['step-label']}>CHOOSE RELEASE METHOD</div>
              </div>
            </div>
            <div className={styles['step-item']}>
              <div className={styles['step-marker']}>03</div>
              <div className={styles['step-content']}>
                <div className={styles['step-label']}>ENCRYPT & UPLOAD FILES</div>
              </div>
            </div>
            <div className={styles['step-item']}>
              <div className={styles['step-marker']}>04</div>
              <div className={styles['step-content']}>
                <div className={styles['step-label']}>ACTIVATE VAULT</div>
              </div>
            </div>
            <div className={styles['step-item']}>
              <div className={styles['step-marker']}>05</div>
              <div className={styles['step-content']}>
                <div className={styles['step-label']}>CHECK IN</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack section */}
      <div 
        className={styles['white-slide']}
        style={{
          opacity: (() => {
            if (scrollY < 6800) return 0;
            if (scrollY < 7300) return Math.min(1, (scrollY - 6800) / 500);
            if (scrollY < 8800) return 1;
            if (scrollY < 9300) return Math.max(0, 1 - (scrollY - 8800) / 500);
            return 0;
          })(),
          transition: 'opacity 0.6s ease-out'
        }}
      >
        <div className={styles['white-slide-content']}>
          <div className={styles['content-left']}>
            <h2 className={styles['white-slide-title']}>Technology</h2>
            <p className={styles['white-slide-description']}>
              The system is designed with censorship resistance, redundancy, and trust minimization at its core. Files are encrypted end-to-end and stored across a decentralized network, making them far harder to lose, seize, or take offline. Release is coordinated through threshold cryptography (TACo), which distributes control so no single server, authority, or even the Canary team itself holds unilateral power over execution.
            </p>
            <div className={styles['desktop-tech-stack-grid']}>
              <a href="https://taco.build" target="_blank" rel="noopener noreferrer" className={styles['desktop-tech-stack-card']}>
                <img src="/taco.svg" alt="TACo" className={styles['inline-logo']} />
              </a>
              <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer" className={styles['desktop-tech-stack-card']}>
                <img src="/ipfs.svg" alt="IPFS" className={styles['inline-logo']} />
              </a>
              <a href="https://codex.storage/" target="_blank" rel="noopener noreferrer" className={styles['desktop-tech-stack-card']}>
                <img src="/codex.svg" alt="Codex" className={styles['inline-logo']} />
              </a>
              <a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer" className={styles['desktop-tech-stack-card']}>
                <img src="/ethereum.svg" alt="Ethereum" className={styles['inline-logo']} />
              </a>
            </div>
            <div className={styles['desktop-learn-more-link']}>
              <a href="https://docs.canaryapp.io/" target="_blank" rel="noopener noreferrer" className={styles['link']}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Open Source section */}
      <div 
        className={styles['white-slide']}
        style={{
          opacity: (() => {
            if (scrollY < 6800) return 0;
            if (scrollY < 7300) return Math.min(1, (scrollY - 6800) / 500);
            if (scrollY < 8800) return 1;
            if (scrollY < 9300) return Math.max(0, 1 - (scrollY - 8800) / 500);
            return 0;
          })(),
          transition: 'opacity 0.6s ease-out'
        }}
      >
        <div className={styles['white-slide-content']}>
          <div className={styles['content-left']}>
            <h2 className={styles['white-slide-title']}>An open-source public good under active development</h2>
            <p className={styles['white-slide-description']}>
              Canary is not a stealth startup or a corporate product. It is an open-source public good, built in the open and under continuous development.
            </p>
            <div className={styles['desktop-github-link']}>
              <a href="https://github.com/linaventures/canary" target="_blank" rel="noopener noreferrer" className={styles['link']}>
                <span className={styles['github-icon']}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Support Us section */}
      <div 
        className={styles['feature-section']}
        style={{
          opacity: (() => {
            if (scrollY < 9200) return 0;
            if (scrollY < 9700) return Math.min(1, (scrollY - 9200) / 500);
            return 1;
          })(),
          transition: 'opacity 0.6s ease-out'
        }}
      >
        <div className={styles['feature-header']}>
          <h2 className={styles['feature-title']}>Support Us ♥</h2>
          <p className={styles['feature-description']}>
            Today, Canary is led by a small team of three. Running the project requires real overhead, from servers, to tools that make it run, to the time spent on design and development. We didn't build Canary for profit, but for impact. To keep going, it needs support. Your contribution helps us survive, evolve, and sustains the people doing the work of stewardship.
          </p>
          <div className={styles['desktop-donate-text']}>
            <strong>Donate Here</strong>
          </div>
          <div className={styles['desktop-donation-link']}>
            <a href="https://etherscan.io/address/canaryapp.eth" target="_blank" rel="noopener noreferrer" className={styles['link']}>
              <span className={styles['ethereum-icon']}>Ξ</span> canaryapp.eth
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div 
        id="newsletter"
        className={styles['newsletter-section']}
        style={{
          transform: `translateY(${
            scrollY < 10000 ? 100 : 
            scrollY < 11000 ? Math.max(0, 100 - ((scrollY - 10000) / 1000) * 100) :
            0
          }vh)`
        }}
      >
        <div className={styles['newsletter-container']}>
          <h2 className={styles['newsletter-title']}>Stay Updated</h2>
          <p className={styles['newsletter-description']}>
            Get the latest updates on Canary's development.
          </p>
          <div className={styles['newsletter-embed']}>
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
        </div>
      </div>

      {/* Add extra height to ensure scrolling space */}
      <div style={{ height: '12000px' }}></div>


    </div>
  )
} 