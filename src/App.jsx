import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import TeamPage from './pages/TeamPage'
import ConnectPage from './pages/ConnectPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

export default App
