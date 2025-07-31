'use client'
import { useEffect } from 'react'
import Kontakte2 from '../page'

export default function AboutPage() {
  useEffect(() => {
    // Scroll to about section after component mounts
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 3500,
        behavior: 'smooth'
      })
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return <Kontakte2 />
} 