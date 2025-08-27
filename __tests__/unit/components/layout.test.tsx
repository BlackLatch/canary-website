import React from 'react'
import { render } from '@testing-library/react'
import RootLayout, { metadata } from '@/app/layout'

// Mock the CSS module imports
jest.mock('@/app/globals.css', () => ({}))

describe('RootLayout Component', () => {
  // Note: RootLayout renders html and body tags which can't be tested in jsdom
  // We'll just verify the component can be imported and metadata is correct
  it('should be defined', () => {
    expect(RootLayout).toBeDefined()
  })

  it('should be a function', () => {
    expect(typeof RootLayout).toBe('function')
  })

})

describe('Metadata Configuration', () => {
  it('should have correct title', () => {
    expect(metadata.title).toBe('Canary')
  })

  it('should have correct description', () => {
    expect(metadata.description).toBe('A digital dead man\'s switch for critical information')
  })

  it('should have all required metadata properties', () => {
    expect(metadata).toHaveProperty('title')
    expect(metadata).toHaveProperty('description')
  })

  it('should have correct metadata types', () => {
    expect(typeof metadata.title).toBe('string')
    expect(typeof metadata.description).toBe('string')
  })

  it('should have non-empty metadata values', () => {
    expect(metadata.title).not.toBe('')
    expect(metadata.description).not.toBe('')
  })
})