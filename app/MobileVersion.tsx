'use client'
import styles from './mobile.module.css'
import { useState, useEffect } from 'react'

export default function MobileVersion() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const fullText = 'If you go silent Canary speaks for you.'

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)


  useEffect(() => {
    setIsLoaded(true)
    const timer = setTimeout(() => {
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setIsAnimationComplete(true)
        }
      }, 80)
      
      return () => clearInterval(typeInterval)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    if (isAnimationComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 600)
      
      return () => clearInterval(cursorInterval)
    }
  }, [isAnimationComplete])

  return (
    <div className={`${styles.mobileContainer} ${isLoaded ? styles.loaded : ''}`}>
      <header className={styles.mobileHeader}>
        <nav className={styles.mobileNav}>
          <img src="/canary-optimized.webp" alt="Canary" className={styles.mobileLogo} />
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ''}`} onClick={closeMenu} />
      
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <button 
          className={styles.mobileMenuClose}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <div className={styles.mobileMenuLinks}>
          <a href="https://github.com/linaventures/canary" target="_blank" rel="noopener noreferrer" className={styles.mobileMenuLink}>
            Source Code
          </a>
          <a href="https://docs.canaryapp.io/" target="_blank" rel="noopener noreferrer" className={styles.mobileMenuLink}>
            Documentation
          </a>
          <a href="https://demo.canaryapp.io/" target="_blank" rel="noopener noreferrer" className={styles.mobileMenuLink}>
            Demo App
          </a>
          <a href="#about" className={styles.mobileMenuLink} onClick={closeMenu}>
            About
          </a>
          <a href="#features" className={styles.mobileMenuLink} onClick={closeMenu}>
            Features
          </a>
          <a href="#newsletter" className={styles.mobileMenuLink} onClick={closeMenu}>
            Newsletter
          </a>
        </div>
      </div>

      <section className={styles.mobileHero}>
        <div className={styles.mobileHeroContent}>
          <h1 className={styles.mobileTitle}>
            <div className={styles.mobileTypewriterLine}>
              {displayedText.length > 0 ? (
                displayedText.length >= 17 ? 'If you go silent' : displayedText.substring(0, 17)
              ) : (
                <span style={{ opacity: 0 }}>If you go silent</span>
              )}
            </div>
            <div className={styles.mobileTypewriterLine}>
              {displayedText.length > 17 ? (
                <>
                  <span className={styles.mobileCanaryWord}>
                    {displayedText.substring(17, Math.min(23, displayedText.length))}
                  </span>
                  {displayedText.length > 23 && (
                    <>
                      {' '}{displayedText.substring(23)}
                      {isAnimationComplete && (
                        <span className={styles.mobileCursor} style={{opacity: showCursor ? 1 : 0}}>|</span>
                      )}
                    </>
                  )}
                </>
              ) : (
                <span style={{ opacity: 0 }}>Canary speaks for you.</span>
              )}
            </div>
          </h1>
        </div>
        
        <div className={styles.mobileScrollIndicator}>
          <span className={styles.mobileScrollText}>Scroll to Learn</span>
          <div className={styles.mobileScrollArrow}></div>
        </div>
      </section>

      <div className={styles.mobileContentSection}>
        <p className={styles.mobileQuote} style={{ fontWeight: 'bold' }}>
          <em>"If you are hearing this message, it means I could not respond. Here is what you need to know…"</em>
        </p>
        <div className={styles.mobileCTA}>
          <a 
            href="https://demo.canaryapp.io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.mobileCTAButton} ${styles.mobilePrimary}`}
          >
            Try Demo
          </a>
          <a 
            href="https://docs.canaryapp.io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.mobileCTAButton} ${styles.mobileSecondary}`}
          >
            Read Documentation
          </a>
          <a 
            href="#newsletter" 
            className={`${styles.mobileCTAButton} ${styles.mobileTertiary}`}
          >
            Join Newsletter
          </a>
        </div>
      </div>


      <section id="features" className={`${styles.mobileSection} ${styles.mobileFeaturesSection}`}>
        <h2 className={styles.mobileSectionTitle}>
          At its core, Canary is a<br />
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.deadMansSwitchLink}>
            digital safe
          </a>
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            Canary releases your files or messages if you don't check in. You define the schedule and the recipients. If you go silent, the system triggers the release of your data either privately to trusted contacts or publicly to everyone.
          </p>
        </div>
      </section>

      <section className={`${styles.mobileSection} ${styles.mobileHowItWorksSection}`}>
        <h2 className={styles.mobileHowItWorksTitle}>
          How it works
        </h2>
        
        <div className={styles.mobileSteps}>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>01</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Name Your Dossier</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>02</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Choose Release Method</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>03</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Set Check-in Schedule</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>04</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Encrypt & Upload Files</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>05</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Activate Dossier</div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.gradientTransition}></div>

      <section className={`${styles.mobileSection} ${styles.mobileTechStackSection}`}>
        <h2 className={styles.mobileSectionTitle}>
          Technology
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            The system is designed with censorship resistance, redundancy, and trust minimization at its core. Files are encrypted end-to-end and stored across a decentralized network, making them far harder to lose, seize, or take offline. Release is coordinated through threshold cryptography (TACo), which distributes control so no single server, authority, or even the Canary team itself holds unilateral power over execution.
          </p>
          <div className={styles.mobileTechStackGrid}>
            <a href="https://taco.build" target="_blank" rel="noopener noreferrer" className={styles.mobileTechStackCard}>
              <img src="/taco.svg" alt="TACo" className={styles.mobileSponsorLogo} />
            </a>
            <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer" className={styles.mobileTechStackCard}>
              <img src="/ipfs.svg" alt="IPFS" className={styles.mobileSponsorLogo} />
            </a>
            <a href="https://codex.storage/" target="_blank" rel="noopener noreferrer" className={styles.mobileTechStackCard}>
              <img src="/codex.svg" alt="Codex" className={styles.mobileSponsorLogo} />
            </a>
            <a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer" className={styles.mobileTechStackCard}>
              <img src="/ethereum.svg" alt="Ethereum" className={styles.mobileSponsorLogo} />
            </a>
          </div>
          <div className={styles.mobileLearnMoreLink}>
            <a href="https://docs.canaryapp.io/" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        </div>
      </section>


      <section className={`${styles.mobileSection} ${styles.mobileOpenSourceSection}`}>
        <h2 className={styles.mobileSectionTitle}>
          An open-source public good under active development
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            Canary is not a stealth startup or a corporate product. It is an open-source public good, built in the open and under continuous development.
          </p>
          
          <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
            It's built on first principles:
          </p>
          
          <div className={styles.mobileFeatureGrid}>
            <div className={styles.mobileFeatureItem}>
              <img src="/end_to_end_encryption_icon.svg" alt="" className={styles.mobileFeatureIcon} />
              <div className={styles.mobileFeatureText}>End-to-end encryption</div>
              <div className={styles.mobileFeatureSubtext}>contents are sealed until release.</div>
            </div>
            <div className={styles.mobileFeatureItem}>
              <img src="/censorship_resistant_icon.svg" alt="" className={styles.mobileFeatureIcon} />
              <div className={styles.mobileFeatureText}>Censorship resistance</div>
              <div className={styles.mobileFeatureSubtext}>no authority can block delivery.</div>
            </div>
            <div className={styles.mobileFeatureItem}>
              <img src="/decentralised_icon.svg" alt="" className={styles.mobileFeatureIcon} />
              <div className={styles.mobileFeatureText}>Decentralization</div>
              <div className={styles.mobileFeatureSubtext}>no central server, no single point of failure.</div>
            </div>
            <div className={styles.mobileFeatureItem}>
              <img src="/trust_minimized_icon.svg" alt="" className={styles.mobileFeatureIcon} />
              <div className={styles.mobileFeatureText}>Trust minimized</div>
              <div className={styles.mobileFeatureSubtext}>guaranteed by cryptography, not by us.</div>
            </div>
          </div>
          
          <div className={styles.mobileGithubLink}>
            <a href="https://github.com/linaventures/canary" target="_blank" rel="noopener noreferrer">
              <span className={styles.githubIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span> Source Code
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.mobileSection} ${styles.mobileAboutSection}`}>
        <h2 className={styles.mobileOriginStoryTitle}>
          Learn about our<br />
          <a href="https://capsules.thirdroom.studio/1/" target="_blank" rel="noopener noreferrer" className={styles.originStoryLink} style={{ fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: '#e53e3e' }}>
            origin story
          </a>
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            The name <em>Canary</em> comes from the <em>canary in the coal mine</em> — an early warning system that signaled danger before it was too late. Our project carries that same purpose: to ensure that silence itself becomes a signal, and that critical truths are not lost.
          </p>
          <p>
            Canary began as a winning hackathon project at the <a href="https://hackathon.web3privacy.info/" target="_blank" rel="noopener noreferrer" className={styles.originStoryRed}>Web3 Privacy Now Hack in Berlin</a> and was later accepted as the first project in the <strong>Cypherpunk Launchpad</strong>, a three-month incubation for early-stage privacy tools.
          </p>
        </div>
        <div className={styles.mobileSponsorContainer}>
          <img src="/w3pn.png" alt="W3PN" className={styles.mobileSponsorLogo} />
        </div>
      </section>

      <section className={`${styles.mobileSection} ${styles.mobileSupportSection}`}>
        <h2 className={styles.mobileSectionTitle}>
          Support Us ♥
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            Today, Canary is led by a small team of three. Running the project requires real overhead, from servers, to tools that make it run, to the time spent on design and development. We didn't build Canary for profit, but for impact. To keep going, it needs support. Your contribution helps us survive, evolve, and sustains the people doing the work of stewardship.
          </p>
          <div className={styles.mobileDonateText}>
            <strong>Donate Here</strong>
          </div>
          <div className={styles.mobileDonationLink}>
            <a href="https://etherscan.io/address/canaryapp.eth" target="_blank" rel="noopener noreferrer">
              <span className={styles.ethereumIcon}>Ξ</span> canaryapp.eth
            </a>
          </div>
        </div>
      </section>

      <section id="newsletter" className={styles.mobileNewsletter}>
        <h2 className={styles.mobileNewsletterTitle}>Follow Canary's Development</h2>
        <div className={styles.mobileSubscribeEmbed}>
          <div data-supascribe-embed-id="86399153858" data-supascribe-subscribe></div>
        </div>
      </section>
    </div>
  )
}