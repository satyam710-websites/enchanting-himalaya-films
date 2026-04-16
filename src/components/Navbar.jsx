import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/ehf-logo.png'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/work', label: 'Our Work' },
  { path: '/team', label: 'The Team' },
  { path: '/connect', label: 'Connect' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`navbar${scrolled || !isHome ? ' scrolled' : ''}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="Enchanting Himalaya Films" />
      </Link>
      <button
        className={`menu-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={location.pathname === path ? 'active' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
