import React from 'react'
import { render, waitFor } from '@testing-library/react'
import AboutPage from '@/app/about/page'

// Mock the main page component
jest.mock('@/app/page', () => ({
  __esModule: true,
  default: () => <div data-testid="main-page">Main Page Content</div>
}))

describe('About Page', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn()
  })

  it('should render the main page component', () => {
    const { getByTestId } = render(<AboutPage />)
    expect(getByTestId('main-page')).toBeInTheDocument()
  })

  it('should scroll to about section on mount', async () => {
    render(<AboutPage />)
    
    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 3500,
        behavior: 'smooth'
      })
    }, { timeout: 200 })
  })
})