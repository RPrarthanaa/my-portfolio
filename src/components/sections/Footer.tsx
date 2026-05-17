import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      style={{
        borderTop: '1px solid var(--p-border)',
        padding: '48px 24px 32px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div
              className="font-display"
              style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--p-amber)', marginBottom: 12 }}
            >
              Zara Okafor.
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--p-text-muted)', lineHeight: 1.7, maxWidth: 220 }}>
              Full-stack engineer crafting high-performance web experiences and developer tools.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.12em',
                color: 'var(--p-text-muted)',
                marginBottom: 16,
                textTransform: 'uppercase',
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{
                      color: 'var(--p-text-muted)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--p-amber)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--p-text-muted)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.12em',
                color: 'var(--p-text-muted)',
                marginBottom: 16,
                textTransform: 'uppercase',
              }}
            >
              Connect
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
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
                    width: 38,
                    height: 38,
                    borderRadius: 8,
                    background: 'var(--p-bg-card)',
                    border: '1px solid var(--p-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--p-text-muted)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--p-amber)'
                    e.currentTarget.style.color = 'var(--p-amber)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--p-border)'
                    e.currentTarget.style.color = 'var(--p-text-muted)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--p-border)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontSize: '0.78rem', color: 'var(--p-text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            © {new Date().getFullYear()} Zara Okafor. Built with React + TanStack Start.
          </p>
          <button
            onClick={scrollToTop}
            style={{
              background: 'var(--p-bg-card)',
              border: '1px solid var(--p-border)',
              borderRadius: 8,
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--p-text-muted)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--p-amber)'
              e.currentTarget.style.color = 'var(--p-amber)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--p-border)'
              e.currentTarget.style.color = 'var(--p-text-muted)'
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}
