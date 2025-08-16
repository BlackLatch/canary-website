import { useState, useEffect } from 'react'

export function useIsMobile(breakpoint: number = 768) {
  // Initialize with a safe default based on typical mobile widths
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }
    return window.innerWidth < breakpoint
  })

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = width < breakpoint
      
      setIsMobile(isSmallScreen || (isTouchDevice && width < 1024))
    }

    checkMobile()
    
    window.addEventListener('resize', checkMobile)
    window.addEventListener('orientationchange', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkMobile)
    }
  }, [breakpoint])

  return isMobile
}