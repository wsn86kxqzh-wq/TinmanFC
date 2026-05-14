import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/about', label: '球队' },
  { path: '/matches', label: '赛事' },
  { path: '/roster', label: '阵容' },
  { path: '/gallery', label: '相册' },
  { path: '/join', label: '加入' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-accent rounded-sm flex items-center justify-center font-display text-dark text-xl font-bold tracking-wider group-hover:scale-110 transition-transform">
            T
          </div>
          <div>
            <span className="font-display text-xl tracking-[0.15em] text-white">
              TINMAN<span className="text-accent">FC</span>
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  active ? 'text-accent' : 'text-muted-2 hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-2/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 rounded text-sm font-medium tracking-wide transition-colors ${
                    active
                      ? 'text-accent bg-accent/5'
                      : 'text-muted-2 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
