export default function AboutPage() {
  return (
    <div className="page fade-in">
      <section className="page-hero">
        <h1 className="page-title">About Us</h1>
        <div className="title-line" />
      </section>
      <section className="about-content">
        <div className="about-text">
          <p>
            Enchanting Himalaya Films is a visual production house based in Dehradun, working across India.
          </p>
          <p>
            We create films, events, and live experiences rooted in emotion, scale, and storytelling.
          </p>
          <p>
            From corporate narratives to concerts and cinematic visuals, we focus on crafting stories that feel real and immersive.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">Dehradun</span>
            <span className="stat-label">Based In</span>
          </div>
          <div className="stat">
            <span className="stat-number">Pan India</span>
            <span className="stat-label">Working Across</span>
          </div>
          <div className="stat">
            <span className="stat-number">Films & Events</span>
            <span className="stat-label">What We Do</span>
          </div>
        </div>
      </section>
    </div>
  )
}
