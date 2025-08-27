import React from 'react'
import { render, waitFor } from '@testing-library/react'
import FeaturesPage from '@/app/features/page'

// Mock the main page component
jest.mock('@/app/page', () => ({
  __esModule: true,
  default: () => <div data-testid="main-page">Main Page Content</div>
}))

describe('Features Page', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn()
  })

  it('should render the main page component', () => {
    const { getByTestId } = render(<FeaturesPage />)
    expect(getByTestId('main-page')).toBeInTheDocument()
  })

  it('should scroll to features section on mount', async () => {
    render(<FeaturesPage />)
    
    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 5000,
        behavior: 'smooth'
      })
    }, { timeout: 200 })
  })
})