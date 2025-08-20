'use client'
import styles from './mobile.module.css'
import { useState, useEffect } from 'react'

export default function MobileVersion() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const fullText = 'If you go silent, Canary speaks for you.'

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
          <img src="/canary.png" alt="Canary" className={styles.mobileLogo} />
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
            GitHub
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
                displayedText.length >= 16 ? 'If you go silent' : displayedText.substring(0, 16)
              ) : (
                <span style={{ opacity: 0 }}>If you go silent</span>
              )}
            </div>
            <div className={styles.mobileTypewriterLine}>
              {displayedText.length > 17 ? (
                <>
                  <span className={styles.mobileCanaryWord}>
                    {displayedText.substring(18, Math.min(24, displayedText.length))}
                  </span>
                  {displayedText.length > 24 && (
                    <>
                      {' '}{displayedText.substring(25)}
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
        <h2 className={styles.mobileTaglineHeader}>
          <span className={styles.digitalFailsafeEmphasis}>A digital failsafe</span><br />
          for critical information
        </h2>
        <p className={styles.mobileDescription}>
          Think of it like a safe for your most critical stories, truths, or instructions. 
          If you can't personally unlock it — if you're detained, missing, or unable — Canary 
          shares access to a predetermined party automatically.
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

      <div className={styles.gradientTransition}></div>

      <section id="features" className={`${styles.mobileSection} ${styles.mobileFeaturesSection}`}>
        <h2 className={styles.mobileSectionTitle}>
          At its core, Canary is a<br />
          <a href="https://en.wikipedia.org/wiki/Dead_man%27s_switch" target="_blank" rel="noopener noreferrer" className={styles.deadMansSwitchLink}>
            dead man's switch
          </a>
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            Canary is a trusted, secure space for journalists, activists, and everyday citizens 
            to automatically release critical information if they're unable to speak for themselves.
          </p>
        </div>
        
        <div className={styles.mobileFeatureGrid}>
          <div className={styles.mobileFeatureItem}>
            <img src="/end_to_end_encryption_icon.svg" alt="" className={styles.mobileFeatureIcon} />
            <div className={styles.mobileFeatureText}>End-to-End Encryption</div>
          </div>
          <div className={styles.mobileFeatureItem}>
            <img src="/censorship_resistant_icon.svg" alt="" className={styles.mobileFeatureIcon} />
            <div className={styles.mobileFeatureText}>Censorship Resistant</div>
          </div>
          <div className={styles.mobileFeatureItem}>
            <img src="/decentralised_icon.svg" alt="" className={styles.mobileFeatureIcon} />
            <div className={styles.mobileFeatureText}>Decentralized</div>
          </div>
          <div className={styles.mobileFeatureItem}>
            <img src="/trust_minimized_icon.svg" alt="" className={styles.mobileFeatureIcon} />
            <div className={styles.mobileFeatureText}>Trust Minimized</div>
          </div>
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
              <div className={styles.mobileStepLabel}>Encrypt Files</div>
              <div className={styles.mobileStepDetail}>Automatic encryption on upload</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>02</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Upload Message</div>
              <div className={styles.mobileStepDetail}>Share critical information securely</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>03</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Set Check-in Schedule</div>
              <div className={styles.mobileStepDetail}>Define safety confirmation intervals</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>04</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Choose Release Method</div>
              <div className={styles.mobileStepDetail}>Trusted Contacts / Public / Both</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>05</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Activate Vault</div>
              <div className={styles.mobileStepDetail}>Digital safety net operational</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.mobileSection} ${styles.mobileAboutSection}`}>
        <h2 className={styles.mobileOriginStoryTitle}>
          Read about our<br />
          <a href="https://capsules.thirdroom.studio/1/" target="_blank" rel="noopener noreferrer" className={styles.originStoryLink}>
            origin story
          </a>
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            Canary originated as a winning hackathon project at the Web3 Privacy Now Hack in Berlin.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Canary was accepted as the first project in the Cypherpunk Launchpad program, 
            a 3-month incubation program for early-stage privacy projects. We are now building 
            an MVP of the app.
          </p>
        </div>
        <div className={styles.mobileSponsorContainer}>
          <img src="/w3pn.png" alt="W3PN" className={styles.mobileSponsorLogo} />
          <img src="/taco.svg" alt="Taco" className={styles.mobileSponsorLogo} />
        </div>
      </section>

      <section id="newsletter" className={styles.mobileNewsletter}>
        <h2 className={styles.mobileNewsletterTitle}>Stay Updated</h2>
        <p className={styles.mobileNewsletterDescription}>
          Get the latest updates on Canary's development.
        </p>
        <div className={styles.mobileSubscribeEmbed}>
          <iframe 
            src="https://canaryapp.substack.com/embed" 
            width="480" 
            height="150" 
            style={{
              border: '1px solid #EEE', 
              background: 'black', 
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