import React from 'react'
import { render, waitFor } from '@testing-library/react'
import NewsletterPage from '@/app/newsletter/page'

// Mock the main page component
jest.mock('@/app/page', () => ({
  __esModule: true,
  default: () => <div data-testid="main-page">Main Page Content</div>
}))

describe('Newsletter Page', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn()
  })

  it('should render the main page component', () => {
    const { getByTestId } = render(<NewsletterPage />)
    expect(getByTestId('main-page')).toBeInTheDocument()
  })

  it('should scroll to newsletter section on mount', async () => {
    render(<NewsletterPage />)
    
    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 6500,
        behavior: 'smooth'
      })
    }, { timeout: 200 })
  })
})