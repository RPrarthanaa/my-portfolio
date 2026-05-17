import { useEffect, useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const skillCategories = [
  {
    label: 'Frontend',
    color: 'var(--p-amber)',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'CSS / Tailwind', level: 88 },
      { name: 'D3.js / Visualization', level: 74 },
    ],
  },
  {
    label: 'Backend',
    color: 'var(--p-cyan)',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / FastAPI', level: 82 },
      { name: 'Go', level: 68 },
      { name: 'GraphQL', level: 85 },
    ],
  },
  {
    label: 'Databases',
    color: '#a78bfa',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 80 },
      { name: 'MongoDB', level: 72 },
      { name: 'SQLite', level: 76 },
    ],
  },
  {
    label: 'DevOps & Cloud',
    color: '#34d399',
    skills: [
      { name: 'AWS (EC2, Lambda, S3)', level: 84 },
      { name: 'Docker / Kubernetes', level: 79 },
      { name: 'GitHub Actions / CI-CD', level: 88 },
      { name: 'Terraform', level: 65 },
    ],
  },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const fillRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barRef.current
    const fill = fillRef.current
    if (!el || !fill) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fill.style.width = `${level}%`
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={barRef} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--p-text)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--p-text-muted)' }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          ref={fillRef}
          className="skill-bar-fill"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            width: '0%',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <div className="section-label">Expertise</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--p-text-bright)',
              marginBottom: 60,
              lineHeight: 1.15,
            }}
          >
            Skills &{' '}
            <span style={{ color: 'var(--p-amber)' }}>Technologies</span>
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div
                className="glass-card"
                style={{
                  borderRadius: 12,
                  padding: '28px 24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: cat.color,
                      boxShadow: `0 0 10px ${cat.color}`,
                    }}
                  />
                  <span
                    className="font-display"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      color: cat.color,
                      textTransform: 'uppercase',
                    }}
                  >
                    {cat.label}
                  </span>
                </div>
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
