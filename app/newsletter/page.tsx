'use client'
import { useEffect } from 'react'
import Kontakte2 from '../page'

export default function NewsletterPage() {
  useEffect(() => {
    // Scroll to newsletter section after component mounts
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 6500,
        behavior: 'smooth'
      })
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return <Kontakte2 />
} 