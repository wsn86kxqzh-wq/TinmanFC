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
      <div className="min-h-screen bg-bg text-text">
        <Navbar />
        {/* 移动端顶部留出导航高度；桌面端左侧留出侧边栏 */}
        <div className="pt-[60px] lg:pt-0 lg:pl-[260px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/join" element={<Join />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
