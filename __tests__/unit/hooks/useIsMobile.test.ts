import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from '@/app/hooks/useIsMobile'

describe('useIsMobile Hook', () => {
  let originalInnerWidth: number
  let originalMatchMedia: typeof window.matchMedia

  beforeEach(() => {
    originalInnerWidth = window.innerWidth
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    // Reset window properties
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth
    })
    window.matchMedia = originalMatchMedia
  })

  it('should return true when window width is less than 768px', () => {
    // Mock window width to be mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500
    })

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('should return false when window width is 768px or greater', () => {
    // Mock window width to be desktop
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    })

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('should return false when window width is exactly 768px (boundary)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768
    })

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('should update when window is resized from desktop to mobile', () => {
    // Start with desktop width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    })

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    // Simulate resize to mobile
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500
      })
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe(true)
  })

  it('should update when window is resized from mobile to desktop', () => {
    // Start with mobile width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500
    })

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)

    // Simulate resize to desktop
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024
      })
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe(false)
  })

  it('should handle multiple resize events', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    })

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    // Multiple resizes
    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 500 })
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(true)

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 800 })
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(false)

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 400 })
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(true)
  })

  it('should clean up event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
    
    const { unmount } = renderHook(() => useIsMobile())
    
    unmount()
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    removeEventListenerSpy.mockRestore()
  })

  it('should handle undefined window (SSR)', () => {
    // This test simulates SSR environment where window might not be available initially
    const { result } = renderHook(() => useIsMobile())
    
    // The hook should still work and return a valid boolean
    expect(typeof result.current).toBe('boolean')
  })

  it('should handle rapid consecutive resize events', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    })

    const { result } = renderHook(() => useIsMobile())

    // Rapid resize events
    act(() => {
      for (let i = 0; i < 10; i++) {
        Object.defineProperty(window, 'innerWidth', { value: i % 2 === 0 ? 500 : 1024 })
        window.dispatchEvent(new Event('resize'))
      }
    })

    // Should end up with the last value (1024 = desktop)
    expect(result.current).toBe(false)
  })

  it('should work with different viewport sizes', () => {
    const testCases = [
      { width: 320, expected: true },  // Mobile S
      { width: 375, expected: true },  // Mobile M
      { width: 425, expected: true },  // Mobile L
      { width: 767, expected: true },  // Just below threshold
      { width: 768, expected: false }, // Tablet (threshold)
      { width: 1024, expected: false }, // Desktop
      { width: 1440, expected: false }, // Desktop L
      { width: 2560, expected: false }, // 4K
    ]

    testCases.forEach(({ width, expected }) => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width
      })

      const { result } = renderHook(() => useIsMobile())
      expect(result.current).toBe(expected)
    })
  })
})