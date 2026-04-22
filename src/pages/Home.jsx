import { Link } from 'react-router-dom'
import logo from '../assets/ehf-logo.png'
import heroVideo from '../assets/video.mp4'

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
          <source src={heroVideo} type="video/mp4" />
        </video>
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
