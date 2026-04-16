import { Link } from 'react-router-dom'
import logo from '../assets/ehf-logo.png'

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

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster=""
        >
          {/* <source src="hero-video.mp4" type="video/mp4" /> */}
        </video>
        <div className="hero-fallback" />
        <div className="hero-content">
          <img src={logo} alt="Enchanting Himalaya Films" className="hero-logo" />
          <h1>Enchanting Himalaya Films</h1>
          <p className="tagline">Visual Stories &nbsp;|&nbsp; Events &nbsp;|&nbsp; Films</p>
          <div className="hero-cta">
            <Link to="/work" className="cta-button">View Our Work</Link>
            <Link to="/connect" className="cta-button cta-outline">Get in Touch</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span />
        </div>
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
    </>
  )
}
