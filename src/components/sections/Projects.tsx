import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import { allProjects } from 'content-collections'

type FilterKey = 'All' | 'Frontend' | 'Backend' | 'AI / ML' | 'DevOps'

const FILTERS: FilterKey[] = ['All', 'Frontend', 'Backend', 'AI / ML', 'DevOps']

const CATEGORY_MAP: Record<string, FilterKey> = {
  React: 'Frontend',
  'TypeScript': 'Frontend',
  'Next.js': 'Frontend',
  'D3.js': 'Frontend',
  'Canvas API': 'Frontend',
  Vite: 'Frontend',
  'Node.js': 'Backend',
  PostgreSQL: 'Backend',
  'Socket.io': 'Backend',
  Yjs: 'Backend',
  Docker: 'Backend',
  Redis: 'Backend',
  FastAPI: 'Backend',
  Python: 'Backend',
  'Transformers.js': 'AI / ML',
  WebGPU: 'AI / ML',
  Go: 'DevOps',
  Rust: 'DevOps',
  'AWS SDK': 'DevOps',
  gRPC: 'DevOps',
  SQLite: 'DevOps',
}

function getCategory(tags: string[]): FilterKey {
  for (const tag of tags) {
    const cat = CATEGORY_MAP[tag]
    if (cat) return cat
  }
  return 'Frontend'
}

export default function Projects() {
  const [filter, setFilter] = useState<FilterKey>('All')

  const filtered = allProjects.filter((p) =>
    filter === 'All' ? true : getCategory(p.tags) === filter
  )

  return (
    <section id="projects" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <div className="section-label">Work</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'var(--p-text-bright)',
                lineHeight: 1.15,
              }}
            >
              Selected{' '}
              <span style={{ color: 'var(--p-amber)' }}>Projects</span>
            </h2>

            {/* Filter tabs */}
            {/*
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`filter-tab ${filter === f ? 'active' : ''}`}
                >
                  {f}
                </button>
              ))}
            </div>
            */}
          </div>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: 64,
                color: 'var(--p-text-muted)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.875rem',
              }}
            >
              No projects in this category yet.
            </div>
          ) : (
            filtered.map((project, i) => (
              <ScrollReveal key={project._meta.path} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                <div
                  className="project-card glass-card"
                  style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {/* Image */}
                  {project.image && (
                    <div className="project-img-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--p-text-bright)',
                        marginBottom: 10,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--p-text-muted)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: '3px 9px',
                            background: 'var(--p-amber-glow)',
                            border: '1px solid var(--p-amber-dim)',
                            borderRadius: 4,
                            fontSize: '0.7rem',
                            fontFamily: 'JetBrains Mono, monospace',
                            color: 'var(--p-amber)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: 16 }}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: '0.8rem',
                            color: 'var(--p-text-muted)',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--p-text-bright)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--p-text-muted)'}
                        >
                          <Github size={14} /> GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: '0.8rem',
                            color: 'var(--p-amber)',
                            textDecoration: 'none',
                            transition: 'opacity 0.2s',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.75'}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
