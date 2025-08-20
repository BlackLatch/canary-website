'use client'
import styles from './mobile.module.css'
import { useState, useEffect } from 'react'

export default function MobileVersion() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const fullText = 'If you go silent, Canary speaks for you.'

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setSubscribeStatus('loading')
    
    // Simulate API call - replace with actual Beehiiv API endpoint
    try {
      // You'll need to replace this with your actual Beehiiv subscription endpoint
      const response = await fetch('https://api.beehiiv.com/v1/publications/YOUR_PUBLICATION_ID/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })
      
      if (response.ok) {
        setSubscribeStatus('success')
        setEmail('')
      } else {
        setSubscribeStatus('error')
      }
    } catch (error) {
      setSubscribeStatus('error')
    }
    
    setTimeout(() => setSubscribeStatus('idle'), 3000)
  }

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
        <p className={styles.mobileTagline}>
          A digital failsafe for critical information
        </p>
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
          At its core, Canary is a dead man's switch
        </h2>
        <div className={styles.mobileSectionContent}>
          <p>
            Canary is a trusted, secure space for journalists, activists, and everyday citizens 
            to automatically release critical information if they're unable to speak for themselves.
          </p>
        </div>
        
        <div className={styles.mobileFeatureGrid}>
          <div className={styles.mobileFeatureItem}>
            <div className={styles.mobileFeatureIcon}>■</div>
            <div className={styles.mobileFeatureText}>End-to-End Encryption</div>
          </div>
          <div className={styles.mobileFeatureItem}>
            <div className={styles.mobileFeatureIcon}>▲</div>
            <div className={styles.mobileFeatureText}>Automated Check-ins</div>
          </div>
          <div className={styles.mobileFeatureItem}>
            <div className={styles.mobileFeatureIcon}>●</div>
            <div className={styles.mobileFeatureText}>Trusted Contact Network</div>
          </div>
          <div className={styles.mobileFeatureItem}>
            <div className={styles.mobileFeatureIcon}>✓</div>
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
        <h2 className={styles.mobileSectionTitle}>Origin Story</h2>
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
        <img src="/w3pn.png" alt="W3PN" className={styles.mobileSponsorLogo} />
      </section>

      <section id="newsletter" className={styles.mobileNewsletter}>
        <h2 className={styles.mobileNewsletterTitle}>Stay Updated</h2>
        <p className={styles.mobileNewsletterDescription}>
          Get the latest updates on Canary's development and security insights.
        </p>
        <form className={styles.mobileSubscribeForm} onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.mobileEmailInput}
            required
            disabled={subscribeStatus === 'loading'}
          />
          <button 
            type="submit" 
            className={styles.mobileSubscribeButton}
            disabled={subscribeStatus === 'loading'}
          >
            {subscribeStatus === 'loading' ? 'Subscribing...' : 
             subscribeStatus === 'success' ? 'Subscribed!' :
             subscribeStatus === 'error' ? 'Try Again' :
             'Subscribe'}
          </button>
        </form>
        {subscribeStatus === 'success' && (
          <p className={styles.mobileSubscribeMessage}>Thank you for subscribing!</p>
        )}
        {subscribeStatus === 'error' && (
          <p className={styles.mobileSubscribeMessage}>Something went wrong. Please try again.</p>
        )}
      </section>
    </div>
  )
}