import { useState } from 'react'
import { Send, Mail, Github, Linkedin, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    fetch('/contact.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => { setSubmitted(true); setSubmitting(false) })
      .catch(() => { setSubmitting(false) })
  }

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
        <ScrollReveal delay={2}>
          <p style={{ color: 'var(--p-text-muted)', maxWidth: 480, lineHeight: 1.7, marginBottom: 56, fontSize: '0.97rem' }}>
            Whether it's a new project, a consulting engagement, or just a question about
            distributed systems at 2am — my inbox is open.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56 }}>
          {/* Form */}
          <ScrollReveal>
            {submitted ? (
              <div
                className="glass-card"
                style={{
                  borderRadius: 12,
                  padding: '48px 32px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div style={{ color: '#34d399', marginBottom: 8 }}>
                  <CheckCircle size={40} />
                </div>
                <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--p-text-bright)' }}>
                  Message sent.
                </h3>
                <p style={{ color: 'var(--p-text-muted)', fontSize: '0.9rem' }}>
                  I'll get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                  style={{ marginTop: 8 }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="you@example.com" />
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={submitting}
                  style={{ opacity: submitting ? 0.7 : 1, width: '100%', justifyContent: 'center' }}
                >
                  <Send size={14} />
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </ScrollReveal>

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
                  <a href="mailto:zara@zaradev.io" style={{ color: 'var(--p-text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--p-amber)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--p-text)'}
                  >
                    zara@zaradev.io
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
                  <a href="https://github.com/zara-okafor" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--p-text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--p-cyan)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--p-text)'}
                  >
                    github.com/zara-okafor
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
                  <a href="https://linkedin.com/in/zara-okafor" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--p-text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'cornflowerblue'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--p-text)'}
                  >
                    linkedin.com/in/zara-okafor
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
                  Currently exploring senior IC and lead engineering roles. Remote-friendly.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
