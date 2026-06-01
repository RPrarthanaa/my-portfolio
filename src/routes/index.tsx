import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import ParticleBackground from '@/components/ParticleBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setIsDark(saved === 'dark')
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--p-bg)', color: 'var(--p-text)' }}>
      <ParticleBackground />
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        {/* <About /> */}
        {/* <Skills /> */}
        <Projects />
        <Experience />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
