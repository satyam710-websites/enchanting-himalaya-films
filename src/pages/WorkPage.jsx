import { useState } from 'react'

const projects = [
  { title: 'Coming Soon', category: 'Films', client: '' },
  { title: 'Coming Soon', category: 'Events & Concerts', client: '' },
  { title: 'Coming Soon', category: 'Corporate Stories', client: '' },
  { title: 'Coming Soon', category: 'Films', client: '' },
  { title: 'Coming Soon', category: 'Events & Concerts', client: '' },
  { title: 'Coming Soon', category: 'Corporate Stories', client: '' },
]

const categories = ['All', 'Films', 'Events & Concerts', 'Corporate Stories']

export default function WorkPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="page fade-in">
      <section className="page-hero">
        <h1 className="page-title">Our Work</h1>
        <div className="title-line" />
      </section>
      <section className="work-section">
        <div className="work-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? 'active' : ''}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="work-grid">
          {filtered.map((project, i) => (
            <div className="work-card" key={i}>
              <div className="work-card-placeholder">
                <span>{project.category}</span>
              </div>
              <div className="card-overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
