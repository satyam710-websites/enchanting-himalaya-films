export default function ConnectPage() {
  return (
    <div className="page fade-in">
      <section className="page-hero">
        <h1 className="page-title">Connect</h1>
        <div className="title-line" />
      </section>
      <section className="connect-section">
        <p className="connect-tagline">Let's create something meaningful.</p>
        <div className="connect-grid">
          <div className="connect-block">
            <h3>Location</h3>
            <p>Dehradun, Uttarakhand</p>
          </div>
          <div className="connect-block">
            <h3>Email</h3>
            <p><a href="mailto:hello@enchantinghimalayafilms.com">hello@enchantinghimalayafilms.com</a></p>
          </div>
          <div className="connect-block">
            <h3>Follow</h3>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">Vimeo</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
