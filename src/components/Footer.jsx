import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} Enchanting Himalaya Films. All Rights Reserved.</p>
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
      </div>
    </footer>
  )
}
