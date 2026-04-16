import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import TeamPage from './pages/TeamPage'
import ConnectPage from './pages/ConnectPage'
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
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
