export default function AboutPage() {
  return (
    <div className="page fade-in">
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero-bg">
          <img src="/about-us.png" alt="" />
        </div>
        <h1 className="page-title">About Us</h1>
        <div className="title-line" />
      </section>

      {/* About Intro */}
      <section className="about-intro">
        <div className="about-intro-inner">
          <p>
            Enchanting Himalaya Films is an end-to-end creative agency and production house specializing in branding, visual storytelling, and digital communication. With roots in the mountains, we bring a nuanced understanding of landscapes, culture, and communities, enabling us to create authentic and impactful narratives for destination promotion.
          </p>
          <p>
            Our expertise spans brand development, large-scale photography and videography, and integrated content development. We combine strategic thinking with strong execution capabilities to deliver high-quality creative assets and campaigns aligned with evolving audience behaviour.
          </p>
          <p>
            Backed by a diverse and experienced team, we are committed to delivering consistent, scalable, and result-oriented solutions. Our focus is on building compelling destination identities and driving sustained engagement through meaningful and well-crafted communication.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are">
        <h2 className="section-label">Who We Are</h2>
        <div className="who-we-are-img">
          <img src="/who-we-are.png" alt="Cinematic shot" />
        </div>
        <div className="pillars">
          <div className="pillar">
            <h3>Creative & Production Agency</h3>
            <p>We operate at the intersection of creativity and execution, offering end-to-end solutions across storytelling, content creation, and visual communication.</p>
          </div>
          <div className="pillar">
            <h3>Rooted in Real Stories</h3>
            <p>With our origins in the mountains, we bring a deep understanding of culture, landscapes, and people, enabling us to create authentic and meaningful narratives.</p>
          </div>
          <div className="pillar">
            <h3>Purpose-Driven Approach</h3>
            <p>We believe in creating work that is not only visually compelling but also emotionally engaging, delivering impact through thoughtful and responsible storytelling.</p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="founder-section">
        <h2 className="section-label">Greeting from our Founder</h2>
        <div className="founder-content">
          <div className="founder-image">
            <img src="/shubham.png" alt="Shubham Sharma" />
          </div>
          <div className="founder-text">
            <p>
              Enchanting Himalaya Films was built on the belief that storytelling can create both impact and connection. My journey across Uttarakhand, engaging closely with its people, culture, and landscapes, shaped a deep respect for authentic, human stories.
            </p>
            <p>
              These experiences instilled a sense of responsibility — to create work that is honest, meaningful, and rooted in real perspectives. Today, this philosophy drives everything we do.
            </p>
            <p>
              At Enchanting Himalaya Films, we strive to craft stories that connect emotionally, deliver with purpose, and leave a lasting impact.
            </p>
            <div className="founder-sign">
              <span className="founder-name">Shubham Sharma</span>
              <span className="founder-role">Founder, Enchanting Himalaya Films</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2 className="section-label">Our Services</h2>
        <div className="services-intro">
          <img src="/our-services.png" alt="Our Services" className="services-img" />
          <p>
            We offer end-to-end creative and production solutions, blending strategy with strong execution. Our work spans storytelling, visual content, campaigns, and digital media — focused on creating impactful content that connects and communicates effectively.
          </p>
        </div>
        <div className="services-list">
          <div className="service-item">Brand Films & Visual Storytelling</div>
          <div className="service-item">Photography & Videography</div>
          <div className="service-item">Creative Direction & Campaigns</div>
          <div className="service-item">Social Media Content & Management</div>
          <div className="service-item">Design & Visual Communication</div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="apart-section">
        <h2 className="section-label">What Sets Us Apart</h2>
        <div className="apart-grid">
          <div className="apart-item">
            <span className="apart-num">01</span>
            <h3>Story-First Approach</h3>
            <p>We focus on building narratives that are emotionally engaging and rooted in authenticity, ensuring every project connects meaningfully with its audience.</p>
          </div>
          <div className="apart-item">
            <span className="apart-num">02</span>
            <h3>Strong Execution Capability</h3>
            <p>From concept to delivery, we combine creative vision with technical expertise to produce high-quality content across formats and platforms.</p>
          </div>
          <div className="apart-item">
            <span className="apart-num">03</span>
            <h3>Agile & Adaptive Team</h3>
            <p>Our team is flexible and efficient, enabling us to work seamlessly across diverse environments and deliver consistently under dynamic project requirements.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
