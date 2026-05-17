import ScrollReveal from '@/components/ScrollReveal'

const technologies = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'Go',
  'PostgreSQL', 'Redis', 'GraphQL', 'AWS', 'Docker', 'Kubernetes',
]

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Text side */}
          <div>
            <ScrollReveal>
              <div className="section-label">About me</div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--p-text-bright)',
                  lineHeight: 1.15,
                  marginBottom: 24,
                }}
              >
                Building the web,<br />
                one{' '}
                <span style={{
                  color: 'var(--p-amber)',
                  fontStyle: 'italic',
                }}>system</span>{' '}
                at a time.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p style={{ lineHeight: 1.8, color: 'var(--p-text-muted)', marginBottom: 20, fontSize: '0.97rem' }}>
                I'm a full-stack engineer with 6 years of experience turning ambitious product ideas
                into fast, reliable, maintainable software. I care deeply about the intersection
                of engineering rigor and developer ergonomics.
              </p>
              <p style={{ lineHeight: 1.8, color: 'var(--p-text-muted)', fontSize: '0.97rem', marginBottom: 32 }}>
                When I'm not writing code, I'm contributing to open source, writing about
                distributed systems on my blog, or mentoring early-career engineers navigating
                their first production incidents.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {[
                  { value: '6+', label: 'Years Experience' },
                  { value: '47+', label: 'Projects Shipped' },
                  { value: '2.8k', label: 'GitHub Stars' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div
                      className="font-display"
                      style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--p-amber)', lineHeight: 1 }}
                    >
                      {value}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--p-text-muted)', marginTop: 4, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Visual side */}
          <ScrollReveal delay={2}>
            <div style={{ position: 'relative' }}>
              {/* Image card */}
              <div
                className="glass-card"
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/5',
                  maxWidth: 380,
                }}
              >
                <img
                  src="/headshot-on-white.jpg"
                  alt="Zara Okafor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.88)',
                  }}
                />
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(5,8,15,0.9), transparent)',
                }} />
                {/* Bottom label */}
                <div style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.7rem',
                  color: 'var(--p-text-muted)',
                  letterSpacing: '0.1em',
                }}>
                  BASED IN AUSTIN, TX
                </div>
              </div>

              {/* Floating tech pill */}
              <div
                style={{
                  position: 'absolute',
                  top: -16,
                  right: -16,
                  background: 'var(--p-bg-2)',
                  border: '1px solid var(--p-border)',
                  borderRadius: 100,
                  padding: '8px 16px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: 'var(--p-cyan)',
                  letterSpacing: '0.08em',
                  backdropFilter: 'blur(8px)',
                  animation: 'float-gentle 3.5s ease-in-out infinite',
                }}
              >
                {'// open to work'}
              </div>

              {/* Tech tags */}
              <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '4px 10px',
                      background: 'var(--p-bg-card)',
                      border: '1px solid var(--p-border)',
                      borderRadius: 4,
                      fontSize: '0.75rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      color: 'var(--p-text-muted)',
                      transition: 'border-color 0.2s, color 0.2s',
                      cursor: 'default',
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
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
