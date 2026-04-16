import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('ehf-cookies-accepted')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('ehf-cookies-accepted', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to enhance your browsing experience. By continuing to use this site, you agree to our{' '}
        <a href="#/privacy-policy">Privacy Policy</a>.
      </p>
      <button onClick={accept} className="cookie-accept">Accept</button>
    </div>
  )
}
