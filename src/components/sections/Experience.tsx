import ScrollReveal from '@/components/ScrollReveal'
import { allJobs, allEducations } from 'content-collections'

function TimelineItem({
  title,
  subtitle,
  period,
  description,
  tags,
  isLast,
}: {
  title: string
  subtitle: string
  period: string
  description: string
  tags: string[]
  isLast: boolean
}) {
  return (
    <div style={{ display: 'flex', gap: 24, position: 'relative', paddingBottom: isLast ? 0 : 40 }}>
      {/* Left column: line + dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 40, flexShrink: 0 }}>
        <div className="timeline-dot" />
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: 1,
              background: 'linear-gradient(to bottom, var(--p-amber), rgba(232,168,56,0.1))',
              marginTop: 8,
            }}
          />
        )}
      </div>

      {/* Right column: content */}
      <div
        className="glass-card"
        style={{
          flex: 1,
          borderRadius: 10,
          padding: '20px 22px',
          marginTop: 0,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
          <h3
            className="font-display"
            style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--p-text-bright)' }}
          >
            {title}
          </h3>
          <span
            style={{
              fontSize: '0.7rem',
              fontFamily: 'JetBrains Mono, monospace',
              color: 'var(--p-amber)',
              background: 'var(--p-amber-glow)',
              border: '1px solid var(--p-amber-dim)',
              padding: '3px 10px',
              borderRadius: 20,
              whiteSpace: 'nowrap',
            }}
          >
            {period}
          </span>
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--p-cyan)', marginBottom: 12, fontWeight: 500 }}>
          {subtitle}
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--p-text-muted)', lineHeight: 1.7, marginBottom: 14 }}>
          {description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '2px 8px',
                background: 'var(--p-bg-card)',
                border: '1px solid var(--p-border)',
                borderRadius: 4,
                fontSize: '0.68rem',
                fontFamily: 'JetBrains Mono, monospace',
                color: 'var(--p-text-muted)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function formatPeriod(start: string, end?: string) {
  const fmt = (d: string) => {
    const date = new Date(d)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }
  return `${fmt(start)} — ${end ? fmt(end) : 'Present'}`
}

export default function Experience() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )
  const education = [...allEducations].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  return (
    <section id="experience" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <div className="section-label">Background</div>
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
            Experience &{' '}
            <span style={{ color: 'var(--p-amber)' }}>Education</span>
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 64 }}>
          {/* Work Experience */}
          <div>
            <ScrollReveal>
              <div style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span
                  className="font-display"
                  style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--p-text-bright)', letterSpacing: '0.02em' }}
                >
                  Work Experience
                </span>
                <div style={{ flex: 1, height: 1, background: 'var(--p-border)' }} />
              </div>
            </ScrollReveal>
            {jobs.map((job, i) => (
              <ScrollReveal key={job.jobTitle + job.company} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                <TimelineItem
                  title={job.jobTitle}
                  subtitle={`${job.company} · ${job.location}`}
                  period={formatPeriod(job.startDate, job.endDate)}
                  description={job.summary}
                  tags={job.tags}
                  isLast={i === jobs.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Education */}
          <div>
            <ScrollReveal>
              <div style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span
                  className="font-display"
                  style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--p-text-bright)', letterSpacing: '0.02em' }}
                >
                  Education & Certs
                </span>
                <div style={{ flex: 1, height: 1, background: 'var(--p-border)' }} />
              </div>
            </ScrollReveal>
            {education.map((edu, i) => (
              <ScrollReveal key={edu.school} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                <TimelineItem
                  title={edu.school}
                  subtitle={edu.summary}
                  period={formatPeriod(edu.startDate, edu.endDate)}
                  description={edu.content || ''}
                  tags={edu.tags}
                  isLast={i === education.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
