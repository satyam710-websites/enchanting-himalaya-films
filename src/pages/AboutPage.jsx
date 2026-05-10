const base = import.meta.env.BASE_URL

export default function AboutPage() {
  return (
    <div className="page fade-in">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-img-wrap">
          <img src={`${base}about1.png`} alt="About Us" />
        </div>
        <div className="about-hero-overlay">
          <h1 className="page-title">About Us</h1>
          <div className="title-line" />
        </div>
      </section>

      {/* About Intro */}
      <section className="about-intro">
        <div className="about-intro-inner">
          <p>
            Enchanting Himalaya Films is an end-to-end creative agency and production house shaping stories at the intersection of branding, culture, and visual storytelling.
          </p>
          <p>
            Rooted in the Himalayas, we bring an intuitive understanding of landscapes, communities, and lived experiences allowing us to craft narratives that feel authentic, immersive, and deeply human.
          </p>
          <p>
            Our work spans brand campaign development, film production, and integrated digital content. We combine strategic insight with on-ground execution to create high-quality visual assets and campaigns that resonate with evolving audiences.
          </p>
          <p>
            Driven by a diverse and experienced team, we focus on delivering consistent, scalable, and result-oriented solutions. From building distinctive destination identities to creating impactful communication, our approach is grounded in clarity, craft, and purpose.
          </p>
          <p>
            At its core, our work is about telling stories that stay.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are">
        <h2 className="section-label">Who We Are</h2>
        <div className="who-we-are-img">
          <img src={`${base}who-we-are.png`} alt="Cinematic shot" />
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
        <h2 className="section-label">Greetings from our Founder</h2>
        <div className="founder-content">
          <div className="founder-image">
            <img src={`${base}shubham.png`} alt="Shubham Sharma" />
          </div>
          <div className="founder-text">
            <p>
              Enchanting Himalaya Films was built on the belief that storytelling can create both impact and connection. My journey across Uttarakhand, engaging closely with its people, culture, and landscapes, shaped a deep respect for authentic, human stories.
            </p>
            <p>
              These experiences instilled a sense of responsibility to create work that is honest, meaningful, and rooted in real perspectives. Today, this philosophy drives everything we do.
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
          <img src={`${base}our-services.png`} alt="Our Services" className="services-img" />
          <p>
            We offer end-to-end creative and production solutions, blending strategy with strong execution. Our work spans storytelling, visual content, campaigns, and digital media focused on creating impactful content that connects and communicates effectively.
          </p>
        </div>
        <div className="services-list">
          <div className="service-item">Brand Video Production</div>
          <div className="service-item">Documentary Production</div>
          <div className="service-item">Corporate Video Production</div>
          <div className="service-item">TV Commercial Production</div>
          {/* <div className="service-item">Design & Visual Communication</div> */}
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
