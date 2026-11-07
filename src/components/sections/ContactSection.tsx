import { useState } from 'react'
import { Send, Mail, Github, Linkedin, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactSection() {

  return (
    <section id="contact" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <div className="section-label">Get in touch</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--p-text-bright)',
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Let's build something{' '}
            <span style={{ color: 'var(--p-amber)' }}>great.</span>
          </h2>
        </ScrollReveal>

        {/*}
        <ScrollReveal delay={2}>
          <p style={{ color: 'var(--p-text-muted)', maxWidth: 480, lineHeight: 1.7, marginBottom: 56, fontSize: '0.97rem' }}>
            Whether it's a new project, a consulting engagement, or just a question about
            distributed systems at 2am — my inbox is open.
          </p>
        </ScrollReveal>
        */}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))', gap: 56 }}> 
          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <ScrollReveal delay={1}>
              <div
                className="glass-card"
                style={{ borderRadius: 10, padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  background: 'var(--p-amber-glow)',
                  border: '1px solid var(--p-amber-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--p-amber)',
                  flexShrink: 0,
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--p-text-muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', marginBottom: 4 }}>EMAIL</div>
                  <a href="mailto:prarthanaa07@gmail.com" style={{ color: 'var(--p-text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--p-amber)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--p-text)'}
                  >
                    prarthanaa07@gmail.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div
                className="glass-card"
                style={{ borderRadius: 10, padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  background: 'var(--p-cyan-dim)',
                  border: '1px solid rgba(79,172,254,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--p-cyan)',
                  flexShrink: 0,
                }}>
                  <Github size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--p-text-muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', marginBottom: 4 }}>GITHUB</div>
                  <a href="https://github.com/RPrarthanaa" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--p-text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--p-cyan)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--p-text)'}
                  >
                    github.com/RPrarthanaa
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div
                className="glass-card"
                style={{ borderRadius: 10, padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  background: 'rgba(100,149,237,0.1)',
                  border: '1px solid rgba(100,149,237,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'cornflowerblue',
                  flexShrink: 0,
                }}>
                  <Linkedin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--p-text-muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', marginBottom: 4 }}>LINKEDIN</div>
                  <a href="https://linkedin.com/in/prarthanaa-ragulan" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--p-text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'cornflowerblue'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--p-text)'}
                  >
                    linkedin.com/in/prarthanaa-ragulan
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div
                className="glass-card"
                style={{ borderRadius: 10, padding: '22px', marginTop: 8 }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--p-text-muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', marginBottom: 10 }}>AVAILABILITY</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#34d399',
                    boxShadow: '0 0 10px #34d399',
                    animation: 'glow-pulse 2s ease-in-out infinite',
                  }} />
                  <span style={{ color: '#34d399', fontSize: '0.875rem', fontWeight: 500 }}>
                    Open to new opportunities
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--p-text-muted)', marginTop: 8, lineHeight: 1.6 }}>
                  Currently exploring software engineering roles. Remote-friendly.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
