'use client'
import { useEffect } from 'react'
import Kontakte2 from '../page'

export default function FeaturesPage() {
  useEffect(() => {
    // Scroll to features section after component mounts
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 5000,
        behavior: 'smooth'
      })
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return <Kontakte2 />
} 