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
        <h2 className={styles.mobileTaglineHeader}>
          <span className={styles.digitalFailsafeEmphasis}>A digital failsafe</span><br />
          for what matters most
        </h2>
        <p className={styles.mobileQuote}>
          <em>"If you are hearing this message, it means I could not respond. Here is what you need to know…"</em>
        </p>
        <div className={styles.mobileWaveformPlaceholder}>
          [audio waveform animation reminiscent of a voice note]
        </div>
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
          At it's core, Canary is a<br />
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.deadMansSwitchLink}>
            dead man's switch
          </a>
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            Canary releases your files or messages if you don't check in. You define the schedule and the recipients. If you go silent, the system triggers the release of your data — either privately to trusted contacts or publicly to everyone.
          </p>
          <p>
            It's built on first principles:
          </p>
        </div>
        
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
      </section>

      <section className={`${styles.mobileSection} ${styles.mobileHowItWorksSection}`}>
        <h2 className={styles.mobileHowItWorksTitle}>
          How it works
        </h2>
        
        <div className={styles.mobileSteps}>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>01</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Set Check-in Schedule</div>
              <div className={styles.mobileStepDetail}>Define safety confirmation intervals</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>02</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Choose Release Method</div>
              <div className={styles.mobileStepDetail}>Trusted Contacts / Public / Both</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>03</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Encrypt & Upload Files</div>
              <div className={styles.mobileStepDetail}>Automatic encryption on upload</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>04</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Activate Vault</div>
              <div className={styles.mobileStepDetail}>Digital safety net operational</div>
            </div>
          </div>
          <div className={styles.mobileStep}>
            <div className={styles.mobileStepNumber}>05</div>
            <div className={styles.mobileStepContent}>
              <div className={styles.mobileStepLabel}>Check In</div>
              <div className={styles.mobileStepDetail}>Regular safety confirmations</div>
            </div>
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
          <div className={styles.mobileGithubLink}>
            <a href="https://github.com/linaventures/canary" target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a>
          </div>
          <p>
            The system is designed with censorship resistance, redundancy, and trust minimization at its core. Files are encrypted end-to-end and stored across a decentralized network, making them far harder to lose, seize, or take offline. Release is coordinated through threshold cryptography (TACo), which distributes control so no single server, authority, or even the Canary team itself holds unilateral power over execution.
          </p>
          <div className={styles.mobileLearnMoreLink}>
            <a href="https://docs.canaryapp.io/" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.mobileSection} ${styles.mobileAboutSection}`}>
        <h2 className={styles.mobileOriginStoryTitle}>
          Origin Story
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            The name <em>Canary</em> comes from the <em>canary in the coal mine</em> — an early warning system that signaled danger before it was too late. Our project carries that same purpose: to ensure that silence itself becomes a signal, and that critical truths are not lost.
          </p>
          <p>
            Canary began as a winning hackathon project at the Web3 Privacy Now Hack in Berlin (<a href="#" target="_blank" rel="noopener noreferrer">link</a>) and was later accepted as the first project in the <strong>Cypherpunk Launchpad</strong>, a three-month incubation for early-stage privacy tools.
          </p>
        </div>
        <div className={styles.mobileSponsorContainer}>
          <img src="/w3pn.png" alt="W3PN" className={styles.mobileSponsorLogo} />
          <img src="/taco.svg" alt="TACo" className={styles.mobileSponsorLogo} />
        </div>
      </section>

      <section className={`${styles.mobileSection} ${styles.mobileSupportSection}`}>
        <h2 className={styles.mobileSectionTitle}>
          Support Us
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            Today, Canary is led by a small team of three. Running the project requires real overhead — from hosting and TACo node services to development and design. While not built for profit, sustainability matters. Supporting Canary means giving the project the chance not only to exist, but to evolve, and to pay the people doing the work of stewardship.
          </p>
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