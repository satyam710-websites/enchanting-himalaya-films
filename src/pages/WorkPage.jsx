import { useState } from 'react'

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

const categories = ['All', 'Brand Films', 'Documentaries & Human Stories', 'Other']

const sections = [
  {
    category: 'Brand Films',
    label: null,
    items: [
      { title: 'Woodburns Whisky', videoLink: 'https://youtu.be/UixG2nQxXe4' },
      { title: 'UPES | AI-First University', videoLink: 'https://youtu.be/eLbhseVydsA' },
      { title: 'UPES | AI-First University', videoLink: 'https://youtu.be/-txYO7RGiSQ' },
      { title: 'BITS Pilani WILP', videoLink: 'https://youtu.be/IYCB1WUXkCo' },
      { title: 'Pearl Academy', videoLink: 'https://youtu.be/KHx3EGSJoAs' },
      { title: 'BUMMER Apparel', videoLink: 'https://youtu.be/7DXJ8BL9Pkw' },
      { title: 'SUYU', videoLink: 'https://youtu.be/7QxtUdhYn2s' },
      { title: 'BITS Pilani WILP', videoLink: 'https://youtu.be/KJHZjR3Vdlg' },
      { title: 'Six Senses Fort Barwara', videoLink: 'https://youtu.be/Dx0jixECOZM' },
    ],
  },
  {
    category: 'Brand Films',
    label: 'Saatvik Solar',
    items: [
      { title: 'Saatvik Green Energy', videoLink: 'https://youtu.be/ZmqlTIxCsiY' },
      { title: 'Celebrating 10 Years of Purpose & Progress', videoLink: 'https://youtu.be/oNj-S6owfV8' },
      { title: 'The Saatvik Journey', videoLink: 'https://youtu.be/vWI6Z8mUrxU' },
    ],
  },
  {
    category: 'Brand Films',
    label: 'Reels',
    items: [
      { title: 'Royal Enfield | Service', videoLink: 'https://youtube.com/shorts/qy2Fb6vHYdI' },
      { title: 'Royal Enfield | Happy Diwali', videoLink: 'https://youtube.com/shorts/unQHh2XL-5U' },
      { title: 'Kicks Machine', videoLink: 'https://youtube.com/shorts/0t9CDA-Cd4s' },
      { title: 'Bummer', videoLink: 'https://www.instagram.com/reel/DEFOo-py53K/' },
      { title: 'Bummer', videoLink: 'https://youtube.com/shorts/Z11ln38wJO4' },
    ],
  },
  {
    category: 'Brand Films',
    label: 'Indian Military Academy',
    items: [
      { title: 'Multi-Activity Display at IMA Dehradun', videoLink: "https://www.youtube.com/watch?v=6eLRqLCHSe8" },
      { title: 'Bonding Exercise | IMA', videoLink: "https://youtu.be/ABN-AjuYXfo" },
      { title: 'Training Warriors | IMA', videoLink: "https://youtu.be/p9Vsw03fQP0" },
      { title: 'Valour and Wisdom | IMA', videoLink: "https://youtu.be/5pSdcEwzsYQ" },
      { title: 'Moulding a Future Indian Army Officer | IMA', videoLink: "https://youtu.be/ICqKH2HdwK8" },
    ],
  },
  {
    category: 'Documentaries & Human Stories',
    label: null,
    items: [
      { title: 'Proactive IRCON', videoLink: 'https://youtu.be/5PijEk859SY' },
      { title: 'Himalayan Yak', videoLink: 'https://youtu.be/SXTSiUqEtBw' },
      { title: 'New Horizon | Tata Trusts', videoLink: 'https://youtu.be/tv3pWXMSV9k' },
      { title: 'Rains | Tata Trusts', videoLink: 'https://youtu.be/F54TWnCrr2A' },
      { title: 'Sivok Rangpo Railway Project', videoLink: 'https://youtu.be/AbBgNkLEc68' },
    ],
  },
  {
    category: 'Documentaries & Human Stories',
    label: 'National Institute of Urban Affairs | MoHUA',
    items: [
      { title: 'Pitch Film | The WIN Programme', videoLink: "https://www.youtube.com/watch?v=6d55Va8yrYQ" },
      { title: 'Module 1 | Prerequisites | The WIN Programme', videoLink: "https://youtu.be/z19NgbZZ2BY" },
      { title: 'Module 2 | Sample Collection | The WIN Programme', videoLink: "https://youtu.be/BejUCwrY_Uc" },
      { title: 'Module 4 | Governance | The WIN Programme', videoLink: "https://youtu.be/kYq_sraOAco" },
    ],
  },
  {
    category: 'Other',
    label: 'Gradright | Masters of The Future',
    items: [
      { title: 'gradright and biswakalyanrath', videoLink: 'https://www.instagram.com/reel/C5-PGtPBRaB/' },
      { title: 'Top 30 Masters in USA Aspirants Attends Masters Of The Future | GradRight', videoLink: "https://youtu.be/zmnNCPQlxow?list=PLNoyonXH2A1y70FdOav2g43_PBg8dEd92" },
      { title: "India's Top 30 Students at Masters of the Future 2024 | GradRight X Washington University, St Louis", videoLink: "https://youtu.be/mpxLKIQ7MQU?list=PLNoyonXH2A1y70FdOav2g43_PBg8dEd92" },
      { title: 'What kind of students does Rutgers Business School look for? | Masters of the Future 2024', videoLink: "https://youtu.be/VktP6yCB4do?list=PLNoyonXH2A1y70FdOav2g43_PBg8dEd92" },
      { title: 'Masters of the Future: Student Experiences | Your Guide to Study Abroad, Loans, & Scholarships', videoLink: "https://youtu.be/O4LZ35AQq3o?list=PLNoyonXH2A1y70FdOav2g43_PBg8dEd92" },
    ],
  },
  {
    category: 'Other',
    label: 'McCain Food Service | BBDO',
    items: [
      { title: "Chef Veena Arora's review on the new appetizer in town McCain V Crisper", videoLink: "https://youtu.be/l50uQtyd7do" },
      { title: 'Chef Ankur Sharma reviews the new appetizer in town McCain V Crisper', videoLink: "https://youtu.be/2rpcOWyTmhQ" },
      { title: "Chef Shalini Kapoor's testimonial for the new appetizer in town McCain V Crisper", videoLink: "https://youtu.be/Gimn5wvOip0" },
      { title: "Chef Akanksha Sharma's review on the new appetizer in town McCain V Crisper", videoLink: "https://youtu.be/fwr7ftsZUJU" },
    ],
  },
  {
    category: 'Other',
    label: 'Virasat | Cultural Festival',
    items: [
      { title: "Virasat 2022 | The Wadali's", videoLink: "https://youtu.be/bqhRkHrK2vw" },
      { title: 'Father Puranchand and son Lakhvinder Wadali | Virasat 2022 | Sufi Singing', videoLink: "https://youtu.be/pZMtufAO1wU" },
      { title: "Ghazals by Talat Aziz | Virasat '22", videoLink: "https://youtu.be/FR_MMiv4fi4" },
      { title: "Parween Sultana ji | Virasat Dehradun '22", videoLink: "https://youtu.be/EyUBxudN53o" },
    ],
  },
  {
    category: 'Other',
    label: 'Rishikesh Festival 2023',
    items: [
      { title: 'RISHIKESH FESTIVAL: DAY 1 | Glimpses of the Curtain Raiser', videoLink: "https://youtu.be/9crTWrm3mHk" },
      { title: 'RISHIKESH FESTIVAL 2023 — DAY 2', videoLink: "https://youtu.be/MRuP9n8ZEvc" },
      { title: "Rishikesh Festival '23: Final Show Down", videoLink: "https://youtu.be/C8Zh3DccSqA" },
    ],
  },
  {
    category: 'Other',
    label: 'Music Videos',
    items: [
      { title: 'Bairiya (Official Video)', videoLink: 'https://youtu.be/Mji5cPEaqQA' },
    ],
  },
]

function getYouTubeThumbnail(url) {
  if (!url) return null
  const shorts = url.match(/shorts\/([^?&]+)/)
  if (shorts) return `https://img.youtube.com/vi/${shorts[1]}/hqdefault.jpg`
  const match = url.match(/(?:v=|youtu\.be\/)([^?&]{11})/)
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null
}

function WorkCard({ item }) {
  const thumb = getYouTubeThumbnail(item.videoLink)
  const content = (
    <>
      {thumb ? (
        <img src={thumb} alt={item.title} className="work-card-thumb" />
      ) : (
        <div className="work-card-placeholder">
          <span>{item.title}</span>
        </div>
      )}
      <div className="card-overlay">
        <h3>{item.title}</h3>
      </div>
    </>
  )
  if (item.videoLink) {
    return (
      <a className="work-card" href={item.videoLink} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }
  return <div className="work-card">{content}</div>
}

export default function WorkPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? sections : sections.filter(s => s.category === active)

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

        {filtered.map((section, si) => (
          <div key={si} style={{ marginTop: si > 0 ? 56 : 0 }}>
            {section.label && (
              <h2 className="subsection-title">{section.label}</h2>
            )}
            <div className="work-grid">
              {section.items.map((item, ii) => (
                <WorkCard key={ii} item={item} />
              ))}
            </div>
          </div>
        ))}
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

