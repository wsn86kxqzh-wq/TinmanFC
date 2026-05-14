import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Matches from './pages/Matches'
import Roster from './pages/Roster'
import Gallery from './pages/Gallery'
import Join from './pages/Join'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
