import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Matches from './pages/Matches'
import Roster from './pages/Roster'
import Gallery from './pages/Gallery'
import Join from './pages/Join'

function PageWrapper({ children }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen pt-16">
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/matches" element={<PageWrapper><Matches /></PageWrapper>} />
          <Route path="/roster" element={<PageWrapper><Roster /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
          <Route path="/join" element={<PageWrapper><Join /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
