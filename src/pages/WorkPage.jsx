import { useState } from 'react'

const base = import.meta.env.BASE_URL

const clients = [
  'Woodburns Whisky',
  'Pearl Academy',
  'BITS Pilani',
  'Nissan India',
  'Bummer',
  'SUYU',
  'Eicher Motors',
  'Royal Enfield',
  'Saatvik Green Energy',
  'Tata Trusts',
]

const categories = ['All', 'Brand Films', 'Digital & Social', 'Documentary & Human Stories']

const projects = [
  // Brand Films (Commercials)
  { title: 'Woodburns Whisky', category: 'Brand Films', client: 'Woodburns', type: 'brand', videoLink: 'https://www.youtube.com/watch?v=UixG2nQxXe4' },
  { title: 'Nissan | Mother\'s Day', category: 'Brand Films', client: 'Nissan India', type: 'brand', videoLink: 'https://www.youtube.com/watch?v=KnQnwZa2k98' },
  { title: 'Bummer Apparel', category: 'Brand Films', client: 'Bummer', type: 'brand', videoLink: 'https://www.youtube.com/watch?v=jpqx1x5Vklc' },
  { title: 'Pearl Academy', category: 'Brand Films', client: 'Pearl Academy', type: 'brand', videoLink: 'https://www.youtube.com/watch?v=KHx3EGSJoAs' },
  { title: 'SUYU', category: 'Brand Films', client: 'SUYU', type: 'brand', videoLink: 'https://www.youtube.com/watch?v=7QxtUdhYn2s' },
  { title: 'BITS Pilani WILP', category: 'Brand Films', client: 'BITS Pilani', type: 'brand', videoLink: 'https://www.youtube.com/watch?v=KJHZjR3Vdlg' },
  { title: 'Eicher Motors | Driver\'s Day', category: 'Brand Films', client: 'Eicher Motors', type: 'brand', videoLink: 'https://www.youtube.com/watch?v=Ny1TKOmmQTo' },

  // Digital & Social - Featured
  {
    title: 'Royal Enfield Motowave X2',
    category: 'Digital & Social',
    client: 'Royal Enfield',
    type: 'featured',
    image: 'social-media-content.png',
    objective: 'To create a visually compelling campaign for the Motowave X2 helmet that reflects Royal Enfield\'s spirit of adventure, safety, and riding culture.',
    execution: 'We conceptualized and executed the complete campaign, capturing the product in real riding environments. The focus was on blending cinematic visuals with authentic motorcycling moments, highlighting both performance and lifestyle.',
    output: 'A series of campaign films and digital assets showcasing the helmet across dynamic terrains, designed for digital and social media platforms.',
  },
  {
    title: 'Royal Enfield | Service Campaign',
    category: 'Digital & Social',
    client: 'Royal Enfield',
    type: 'featured',
    videoLink: 'https://www.youtube.com/shorts/9itXzTIu1dI',
    objective: 'To highlight the service and support ecosystem of Royal Enfield, showcasing reliability and rider assistance beyond just the product.',
    execution: 'The campaign was conceptualized to bring out the often-overlooked service backbone of the brand through real, on-ground storytelling. The narrative focused on authenticity, blending real moments with visually engaging storytelling.',
    output: 'A set of 8 reels along with supporting digital content, designed for social media distribution.',
  },

  // Brand Films - Featured
  {
    title: 'Saatvik Green Energy Limited',
    category: 'Brand Films',
    client: 'Saatvik',
    type: 'featured',
    videoLink: 'https://www.youtube.com/watch?v=ZmqlTIxCsiY',
    objective: 'To create compelling films that establish Saatvik as a trusted and evolving leader in the solar energy space.',
    execution: 'Working within a tight one-week timeline, we conceptualized and delivered two distinct films — one on manufacturing excellence and one capturing the brand\'s decade-long journey.',
    output: 'Two brand films, one centered on manufacturing capabilities and the other on the company\'s legacy, crafted for digital and corporate communication.',
  },

  // Documentary & Human Stories - Featured
  {
    title: 'Against The Wind',
    category: 'Documentary & Human Stories',
    client: 'India-Australia Co-production',
    type: 'featured',
    videoLink: 'https://www.youtube.com/watch?v=N91q7BUysWc',
    objective: 'To capture the emotional journey of a solo rider seeking connection and meaning in an increasingly digital and disconnected world.',
    execution: 'Set against the dramatic landscapes of Ladakh, the film follows Jan as she rides to Khardung La. We focused on creating an immersive visual narrative that blends the scale of the terrain with intimate human moments.',
    output: 'A sizzle film that encapsulates the spirit of exploration, human connection, and the raw beauty of Ladakh.',
  },

  // Documentary grid items
  { title: 'Himalayan Yak', category: 'Documentary & Human Stories', client: '', type: 'documentary', videoLink: 'https://www.youtube.com/watch?v=SXTSiUqEtBw' },
  { title: 'New Horizon | Tata Trusts', category: 'Documentary & Human Stories', client: 'Tata Trusts', type: 'documentary', videoLink: 'https://www.youtube.com/watch?v=tv3pWXMSV9k' },
  { title: 'The Wisdom Corridor Project', category: 'Documentary & Human Stories', client: '', type: 'documentary', videoLink: 'https://www.youtube.com/watch?v=O-Sv_YUuIss' },
  { title: 'Dalhousie', category: 'Documentary & Human Stories', client: '', type: 'documentary', videoLink: 'https://www.youtube.com/watch?v=BvSm5ET_008' },
  { title: 'Rains | Tata Trusts', category: 'Documentary & Human Stories', client: 'Tata Trusts', type: 'documentary', videoLink: 'https://www.youtube.com/watch?v=F54TWnCrr2A' },
  { title: 'Sivok Rangpo Railway Project', category: 'Documentary & Human Stories', client: '', type: 'documentary', videoLink: 'https://www.youtube.com/watch?v=AbBgNkLEc68' },
]

function getYouTubeThumbnail(url) {
  if (!url) return null
  const shorts = url.match(/shorts\/([^?&]+)/)
  if (shorts) return `https://img.youtube.com/vi/${shorts[1]}/hqdefault.jpg`
  const match = url.match(/(?:v=|\/)([\w-]{11})/)
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null
}

function FeaturedCard({ project }) {
  const thumb = getYouTubeThumbnail(project.videoLink)
  return (
    <div className="featured-work">
      <div className="featured-image">
        {project.image ? (
          <img src={`${base}${project.image}`} alt={project.title} />
        ) : thumb ? (
          <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
            <div className="thumb-wrapper">
              <img src={thumb} alt={project.title} />
              <div className="play-icon">&#9654;</div>
            </div>
          </a>
        ) : (
          <div className="featured-placeholder" />
        )}
      </div>
      <div className="featured-details">
        <h3>{project.title}</h3>
        {project.client && <p className="featured-client">{project.client}</p>}
        {project.objective && (
          <div className="featured-block">
            <span className="featured-label">Objective</span>
            <p>{project.objective}</p>
          </div>
        )}
        {project.execution && (
          <div className="featured-block">
            <span className="featured-label">Execution</span>
            <p>{project.execution}</p>
          </div>
        )}
        {project.output && (
          <div className="featured-block">
            <span className="featured-label">Output</span>
            <p>{project.output}</p>
          </div>
        )}
        {project.videoLink && (
          <a href={project.videoLink} className="watch-btn" target="_blank" rel="noopener noreferrer">
            Watch Film
          </a>
        )}
      </div>
    </div>
  )
}

export default function WorkPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)
  const featured = filtered.filter(p => p.type === 'featured')
  const grid = filtered.filter(p => p.type !== 'featured')

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

        {/* Featured Projects */}
        {featured.length > 0 && (
          <div className="featured-list">
            <h2 className="subsection-title">Featured Work</h2>
            {featured.map((project, i) => (
              <FeaturedCard key={i} project={project} />
            ))}
          </div>
        )}

        {/* Grid Projects */}
        {grid.length > 0 && (
          <>
            {active === 'Digital & Social' && (
              <p className="work-subtitle">Reels | Short Form Content | Campaign Snippets</p>
            )}
            {active === 'Documentary & Human Stories' && (
              <h2 className="subsection-title" style={{ marginTop: 48 }}>Documentary Work | Social Impact Films | Cultural Stories</h2>
            )}
            <div className="work-grid">
              {grid.map((project, i) => {
                const thumb = getYouTubeThumbnail(project.videoLink)
                return (
                  <a
                    className="work-card"
                    key={i}
                    href={project.videoLink || '#'}
                    target={project.videoLink ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {thumb ? (
                      <img src={thumb} alt={project.title} className="work-card-thumb" />
                    ) : (
                      <div className="work-card-placeholder">
                        <span>{project.title}</span>
                      </div>
                    )}
                    <div className="card-overlay">
                      <h3>{project.title}</h3>
                      {project.client && <p>{project.client}</p>}
                    </div>
                  </a>
                )
              })}
            </div>
          </>
        )}
      </section>

      {/* Clientele */}
      <section className="clientele">
        <h2 className="section-label">Clientele</h2>
        <div className="client-marquee">
          <div className="client-track">
            {[...clients, ...clients].map((name, i) => (
              <span className="client-name" key={i}>{name}</span>
            ))}
          </div>
        </div>
        <div className="client-grid">
          {clients.map((name, i) => (
            <span className="client-grid-item" key={i}>{name}</span>
          ))}
        </div>
      </section>
    </div>
  )
}
