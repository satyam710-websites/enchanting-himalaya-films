import { Link } from 'react-router-dom'
import logo from '../assets/ehf-logo.png'

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-video">
          <iframe
            src="https://www.youtube.com/embed/UixG2nQxXe4?autoplay=1&mute=1&loop=1&playlist=UixG2nQxXe4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Hero background"
          />
        </div>
        <div className="hero-fallback" />
        <div className="hero-content">
          <img src={logo} alt="Enchanting Himalaya Films" className="hero-logo" />
          <h1>Enchanting Himalaya Films</h1>
          {/* <p className="tagline">Visual Stories &nbsp;|&nbsp; Events &nbsp;|&nbsp; Films</p> */}
          <div className="hero-cta">
            <Link to="/work" className="cta-button">View Our Work</Link>
            <Link to="/connect" className="cta-button cta-outline">Get in Touch</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span />
        </div>
      </section>
    </>
  )
}
