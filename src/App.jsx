import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Matches from './pages/Matches'
import Roster from './pages/Roster'
import Gallery from './pages/Gallery'
import Join from './pages/Join'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-dark text-text-main flex flex-col">
        <Navbar />
        <main className="flex-1">
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
      </div>
    </BrowserRouter>
  )
}

export default App
