import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const el = document.documentElement
      const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: 'var(--p-amber)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              background: 'var(--p-amber)',
              color: 'var(--p-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 800,
            }}>ZO</span>
            <span style={{ color: 'var(--p-text-bright)' }}>Zara<span style={{ color: 'var(--p-amber)' }}>.</span></span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--p-text-muted)',
                  borderRadius: 6,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--p-amber)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--p-text-muted)')}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onToggleTheme}
              style={{
                background: 'var(--p-bg-card)',
                border: '1px solid var(--p-border)',
                borderRadius: 8,
                width: 36,
                height: 36,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--p-text-muted)',
                marginLeft: 8,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--p-amber)'
                e.currentTarget.style.color = 'var(--p-amber)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--p-border)'
                e.currentTarget.style.color = 'var(--p-text-muted)'
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: '1px solid var(--p-border)',
              borderRadius: 6,
              padding: 6,
              cursor: 'pointer',
              color: 'var(--p-text)',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: 'rgba(5,8,15,0.97)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--p-border)',
              padding: '16px 24px 24px',
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 0',
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--p-text)',
                  borderBottom: '1px solid var(--p-border)',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onToggleTheme}
              style={{
                marginTop: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--p-text-muted)',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '0.875rem',
              }}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
              {isDark ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        )}
      </nav>
    </>
  )
}
