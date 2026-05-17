import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const roles = [
  'Full-Stack Engineer',
  'Frontend Architect',
  'Open Source Contributor',
  'Systems Thinker',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 24px 60px',
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {/* Top tag */}
      <div
        className="section-label"
        style={{
          animation: 'reveal-up 0.7s ease 0.1s both',
        }}
      >
        Available for new opportunities
      </div>

      {/* Name */}
      <h1
        className="font-display"
        style={{
          fontSize: 'clamp(3rem, 9vw, 7.5rem)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          color: 'var(--p-text-bright)',
          margin: '0 0 8px',
          animation: 'reveal-up 0.8s ease 0.2s both',
        }}
      >
        Zara<br />
        <span className="gradient-text">Okafor.</span>
      </h1>

      {/* Typewriter role */}
      <div
        style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          fontFamily: 'JetBrains Mono, monospace',
          color: 'var(--p-text-muted)',
          marginBottom: '28px',
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          animation: 'reveal-up 0.8s ease 0.35s both',
        }}
      >
        <span style={{ color: 'var(--p-cyan)' }}>{'>'}</span>
        <span style={{ marginLeft: 10 }}>{displayed}</span>
        <span
          style={{
            display: 'inline-block',
            width: 2,
            height: '1.2em',
            background: 'var(--p-amber)',
            marginLeft: 2,
            animation: 'cursor-blink 1s step-end infinite',
          }}
        />
      </div>

      {/* Bio */}
      <p
        style={{
          maxWidth: 540,
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: 'var(--p-text-muted)',
          marginBottom: '40px',
          animation: 'reveal-up 0.8s ease 0.45s both',
        }}
      >
        I build high-performance web systems and elegant developer experiences.
        6 years shipping products that scale — from seed-stage startups to
        platforms serving millions.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          gap: 14,
          flexWrap: 'wrap',
          animation: 'reveal-up 0.8s ease 0.55s both',
        }}
      >
        <a
          href="#projects"
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          View Projects
          <ExternalLink size={14} />
        </a>
        <a
          href="#contact"
          className="btn-outline"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Contact Me
          <Mail size={14} />
        </a>
      </div>

      {/* Social links */}
      <div
        style={{
          display: 'flex',
          gap: 16,
          marginTop: 48,
          animation: 'reveal-up 0.8s ease 0.65s both',
        }}
      >
        {[
          { Icon: Github, href: 'https://github.com/zara-okafor', label: 'GitHub' },
          { Icon: Linkedin, href: 'https://linkedin.com/in/zara-okafor', label: 'LinkedIn' },
          { Icon: Mail, href: 'mailto:zara@zaradev.io', label: 'Email' },
        ].map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            style={{
              color: 'var(--p-text-muted)',
              transition: 'color 0.2s, transform 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--p-amber)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--p-text-muted)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          color: 'var(--p-text-muted)',
          animation: 'float-gentle 2.5s ease-in-out infinite',
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}>SCROLL</span>
        <ArrowDown size={14} />
      </div>

      {/* Decorative lines */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: 0,
          top: '15%',
          width: 1,
          height: '40%',
          background: 'linear-gradient(to bottom, transparent, var(--p-amber), transparent)',
          opacity: 0.2,
          display: 'none',
        }}
        className="lg:block"
      />
    </section>
  )
}
