import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import MobileVersion from '@/app/MobileVersion'

// Mock CSS modules
jest.mock('@/app/responsive.module.css', () => ({
  mobileContainer: 'mobileContainer',
  mobileHeader: 'mobileHeader',
  mobileLogo: 'mobileLogo',
  mobileHero: 'mobileHero',
  mobileTitle: 'mobileTitle',
  mobileTagline: 'mobileTagline',
  mobileQuote: 'mobileQuote',
  mobileCta: 'mobileCta',
  mobileCtaButton: 'mobileCtaButton',
  mobilePrimary: 'mobilePrimary',
  mobileSecondary: 'mobileSecondary'
}))

describe('MobileVersion Component', () => {
  it('should render mobile container', () => {
    const { container } = render(<MobileVersion />)
    const mobileContainer = container.querySelector('.mobileContainer')
    expect(mobileContainer).toBeInTheDocument()
  })

  it('should render logo', () => {
    const { getByAltText } = render(<MobileVersion />)
    const logo = getByAltText('Canary Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/canary.svg')
  })

  it('should render title with proper text', () => {
    const { getByText } = render(<MobileVersion />)
    expect(getByText('Your Digital')).toBeInTheDocument()
    expect(getByText('Canary')).toBeInTheDocument()
    expect(getByText('in the Coal Mine')).toBeInTheDocument()
  })

  it('should render tagline', () => {
    const { getByText } = render(<MobileVersion />)
    expect(getByText('Protecting What Matters Most')).toBeInTheDocument()
  })

  it('should render quote text', () => {
    const { getByText } = render(<MobileVersion />)
    const quoteText = '"In a world of uncertainty, ensure your voice is heard when it matters most."'
    expect(getByText(quoteText)).toBeInTheDocument()
  })

  it('should render CTA buttons', () => {
    const { getByText } = render(<MobileVersion />)
    
    const getStartedBtn = getByText('Get Started')
    const learnMoreBtn = getByText('Learn More')
    
    expect(getStartedBtn).toBeInTheDocument()
    expect(learnMoreBtn).toBeInTheDocument()
    
    // Check they are links
    expect(getStartedBtn.closest('a')).toHaveAttribute('href', '#')
    expect(learnMoreBtn.closest('a')).toHaveAttribute('href', '#')
  })

  it('should have correct button classes', () => {
    const { getByText } = render(<MobileVersion />)
    
    const getStartedBtn = getByText('Get Started')
    const learnMoreBtn = getByText('Learn More')
    
    expect(getStartedBtn.closest('a')).toHaveClass('mobileCtaButton', 'mobilePrimary')
    expect(learnMoreBtn.closest('a')).toHaveClass('mobileCtaButton', 'mobileSecondary')
  })

  it('should render all sections in correct order', () => {
    const { container } = render(<MobileVersion />)
    
    const sections = container.querySelectorAll('.mobileContainer > div')
    expect(sections.length).toBeGreaterThan(0)
    
    // Verify structure exists
    expect(container.querySelector('.mobileHeader')).toBeInTheDocument()
    expect(container.querySelector('.mobileHero')).toBeInTheDocument()
    expect(container.querySelector('.mobileCta')).toBeInTheDocument()
  })
})