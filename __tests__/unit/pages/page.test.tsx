import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page'

// Mock CSS modules
jest.mock('@/app/page.module.css', () => ({
  'kontakte-container': 'kontakte-container',
  'paint-background': 'paint-background',
  'dark-paint-background': 'dark-paint-background',
  header: 'header',
  title: 'title',
  logo: 'logo',
  'header-center': 'header-center',
  'small-text': 'small-text',
  spacing: 'spacing',
  'typewriter-container': 'typewriter-container',
  'typewriter-text': 'typewriter-text',
  'typewriter-line': 'typewriter-line',
  cursor: 'cursor',
  'hero-content-container': 'hero-content-container',
  'description-container': 'description-container',
  'description-text': 'description-text',
  'cta-container': 'cta-container',
  'cta-button': 'cta-button',
  'cta-primary': 'cta-primary',
  'cta-secondary': 'cta-secondary',
  'cta-tertiary': 'cta-tertiary',
  'feature-section': 'feature-section',
  'feature-header': 'feature-header',
  'feature-title': 'feature-title',
  'feature-description': 'feature-description',
  'feature-grid': 'feature-grid',
  'feature-item': 'feature-item',
  'feature-icon': 'feature-icon',
  'feature-text': 'feature-text',
  'white-slide': 'white-slide',
  'white-slide-content': 'white-slide-content',
  'content-left': 'content-left',
  'white-slide-title': 'white-slide-title',
  'white-slide-description': 'white-slide-description',
  'flow-diagram': 'flow-diagram',
  'flow-step': 'flow-step',
  'flow-icon': 'flow-icon',
  'flow-text': 'flow-text',
  'flow-subtext': 'flow-subtext',
  'flow-connector': 'flow-connector',
  'newsletter-section': 'newsletter-section',
  'newsletter-container': 'newsletter-container',
  'newsletter-title': 'newsletter-title',
  'newsletter-description': 'newsletter-description',
  'newsletter-embed': 'newsletter-embed',
  'scroll-indicator': 'scroll-indicator',
  'scroll-arrow': 'scroll-arrow',
  'scroll-text': 'scroll-text'
}))

jest.mock('@/app/globals.module.css', () => ({}))
jest.mock('@/app/responsive.module.css', () => ({}))

// Mock useIsMobile hook
const mockUseIsMobile = jest.fn()
jest.mock('@/app/hooks/useIsMobile', () => ({
  useIsMobile: () => mockUseIsMobile()
}))

// Mock MobileVersion component
jest.mock('@/app/MobileVersion', () => ({
  __esModule: true,
  default: () => <div data-testid="mobile-version">Mobile Version</div>
}))

describe('Home Page Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseIsMobile.mockReturnValue(false) // Default to desktop
    // Reset scroll position
    window.scrollY = 0
  })

  describe('Desktop Version', () => {
    it('should render desktop version when not mobile', () => {
      mockUseIsMobile.mockReturnValue(false)
      const { queryByTestId } = render(<Home />)
      
      expect(queryByTestId('mobile-version')).not.toBeInTheDocument()
    })

    it('should render all main sections', () => {
      render(<Home />)
      
      // Check for logo
      const logo = screen.getByAlt('Canary Logo')
      expect(logo).toBeInTheDocument()
      
      // Check for navigation links
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Features')).toBeInTheDocument()
      expect(screen.getByText('Newsletter')).toBeInTheDocument()
      
      // Check for typewriter text
      expect(screen.getByText(/Your Digital/)).toBeInTheDocument()
      expect(screen.getByText(/Canary/)).toBeInTheDocument()
      
      // Check for description
      expect(screen.getByText(/Ensure your critical information/)).toBeInTheDocument()
      
      // Check for CTA buttons
      expect(screen.getByText('Get Started')).toBeInTheDocument()
      expect(screen.getByText('Learn More')).toBeInTheDocument()
      expect(screen.getByText('View Demo')).toBeInTheDocument()
    })

    it('should have correct initial scroll position', () => {
      render(<Home />)
      
      const featureSection = document.querySelector('.feature-section')
      expect(featureSection).toHaveStyle({ opacity: '0' })
    })

    it('should handle scroll events', () => {
      const { container } = render(<Home />)
      
      // Simulate scroll
      act(() => {
        window.scrollY = 500
        fireEvent.scroll(window)
      })
      
      // Check if dark background appears
      const darkBg = container.querySelector('.dark-paint-background')
      expect(darkBg).toHaveStyle({ opacity: '0' })
      
      // Scroll further
      act(() => {
        window.scrollY = 1500
        fireEvent.scroll(window)
      })
      
      // Feature section should become visible
      const featureSection = container.querySelector('.feature-section')
      expect(featureSection).toHaveStyle({ opacity: '0.5' })
    })

    it('should handle navigation link clicks', () => {
      const scrollToMock = jest.fn()
      window.scrollTo = scrollToMock
      
      render(<Home />)
      
      // Click About link
      const aboutLink = screen.getByText('About')
      fireEvent.click(aboutLink)
      expect(scrollToMock).toHaveBeenCalledWith({
        top: 1700,
        behavior: 'smooth'
      })
      
      // Click Features link
      const featuresLink = screen.getByText('Features')
      fireEvent.click(featuresLink)
      expect(scrollToMock).toHaveBeenCalledWith({
        top: 2700,
        behavior: 'smooth'
      })
      
      // Click Newsletter link
      const newsletterLink = screen.getByText('Newsletter')
      fireEvent.click(newsletterLink)
      expect(scrollToMock).toHaveBeenCalledWith({
        top: 3500,
        behavior: 'smooth'
      })
    })

    it('should render feature grid items', () => {
      render(<Home />)
      
      const featureTexts = [
        'Zero-Knowledge Encryption',
        'Automated Release',
        'Multi-Recipient Support',
        'Proof of Life Check-ins'
      ]
      
      featureTexts.forEach(text => {
        expect(screen.getByText(text)).toBeInTheDocument()
      })
    })

    it('should render flow diagram', () => {
      render(<Home />)
      
      const flowSteps = ['Setup', 'Check-in', 'Warning', 'Release']
      flowSteps.forEach(step => {
        expect(screen.getByText(step)).toBeInTheDocument()
      })
    })

    it('should render newsletter section', () => {
      render(<Home />)
      
      expect(screen.getByText('Stay Updated')).toBeInTheDocument()
      expect(screen.getByText(/Join our newsletter/)).toBeInTheDocument()
    })

    it('should handle CTA button clicks', () => {
      const { container } = render(<Home />)
      
      const getStartedBtn = screen.getByText('Get Started')
      const learnMoreBtn = screen.getByText('Learn More')
      const viewDemoBtn = screen.getByText('View Demo')
      
      // Check that buttons are rendered as links
      expect(getStartedBtn.closest('a')).toHaveAttribute('href', '#')
      expect(learnMoreBtn.closest('a')).toHaveAttribute('href', '#')
      expect(viewDemoBtn.closest('a')).toHaveAttribute('href', '#')
    })
  })

  describe('Mobile Version', () => {
    it('should render mobile version when on mobile device', () => {
      mockUseIsMobile.mockReturnValue(true)
      const { getByTestId } = render(<Home />)
      
      expect(getByTestId('mobile-version')).toBeInTheDocument()
    })

    it('should not render desktop content when on mobile', () => {
      mockUseIsMobile.mockReturnValue(true)
      render(<Home />)
      
      // Desktop-specific content should not be present
      const desktopContainer = document.querySelector('.kontakte-container')
      expect(desktopContainer).not.toBeInTheDocument()
    })
  })

  describe('Scroll Animations', () => {
    it('should update opacity based on scroll position', () => {
      const { container } = render(<Home />)
      
      // Initial state
      const featureSection = container.querySelector('.feature-section')
      expect(featureSection).toHaveStyle({ opacity: '0' })
      
      // Scroll to show feature section
      act(() => {
        window.scrollY = 1800
        fireEvent.scroll(window)
      })
      
      expect(featureSection).toHaveStyle({ opacity: '0.6' })
    })

    it('should handle white slide visibility', () => {
      const { container } = render(<Home />)
      
      const whiteSlide = container.querySelector('.white-slide')
      
      // Initially hidden
      expect(whiteSlide).toHaveStyle({ 
        transform: 'translateY(100vh)' 
      })
      
      // Scroll to show
      act(() => {
        window.scrollY = 2700
        fireEvent.scroll(window)
      })
      
      expect(whiteSlide).toHaveStyle({ 
        transform: 'translateY(0)' 
      })
    })

    it('should handle newsletter section visibility', () => {
      const { container } = render(<Home />)
      
      const newsletterSection = container.querySelector('.newsletter-section')
      
      // Initially hidden
      expect(newsletterSection).toHaveStyle({ 
        transform: 'translateY(100vh)' 
      })
      
      // Scroll to show
      act(() => {
        window.scrollY = 3500
        fireEvent.scroll(window)
      })
      
      expect(newsletterSection).toHaveStyle({ 
        transform: 'translateY(0)' 
      })
    })

    it('should show scroll indicator', () => {
      render(<Home />)
      
      const scrollIndicator = screen.getByText('Scroll to explore')
      expect(scrollIndicator).toBeInTheDocument()
      
      // Should hide after scrolling
      act(() => {
        window.scrollY = 200
        fireEvent.scroll(window)
      })
      
      expect(scrollIndicator.parentElement).toHaveStyle({ opacity: '0' })
    })
  })

  describe('Component Lifecycle', () => {
    it('should add scroll event listener on mount', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
      
      render(<Home />)
      
      expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
      addEventListenerSpy.mockRestore()
    })

    it('should remove scroll event listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
      
      const { unmount } = render(<Home />)
      unmount()
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
      removeEventListenerSpy.mockRestore()
    })

    it('should handle rapid scroll events', () => {
      const { container } = render(<Home />)
      
      // Simulate rapid scrolling
      act(() => {
        for (let i = 0; i < 100; i += 10) {
          window.scrollY = i * 10
          fireEvent.scroll(window)
        }
      })
      
      // Component should still be functioning
      const featureSection = container.querySelector('.feature-section')
      expect(featureSection).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper alt text for images', () => {
      render(<Home />)
      
      const logo = screen.getByAlt('Canary Logo')
      expect(logo).toBeInTheDocument()
    })

    it('should have proper link labels', () => {
      render(<Home />)
      
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveTextContent(/.+/)
      })
    })

    it('should have proper heading structure', () => {
      render(<Home />)
      
      const headings = screen.getAllByRole('heading')
      expect(headings.length).toBeGreaterThan(0)
    })
  })
})