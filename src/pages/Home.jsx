import { Link } from 'react-router-dom'
import logo from '../assets/ehf-logo.png'

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
          src="https://res.cloudinary.com/dniv0gqil/video/upload/v1776889533/video_bf8e6s.mp4"
        />
        <div className="hero-fallback" />
        <div className="hero-content">
          <img src={logo} alt="Enchanting Himalaya Films" className="hero-logo" />
          <p className="hero-eyebrow"><em>Video Production Company IND</em></p>
          <h1>Great ideas deserve<br /><em>Great execution.</em></h1>
          <p className="hero-sub">Storytellers from the mountains</p>
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
