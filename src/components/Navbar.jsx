import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
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
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/90 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 lg:gap-3 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-sm flex items-center justify-center font-display font-bold text-bg-dark text-sm lg:text-base">
              T
            </div>
            <span className="font-display font-bold text-lg lg:text-2xl tracking-wider text-text-main group-hover:text-primary transition-colors">
              TINMAN<span className="text-primary">FC</span>
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-1 lg:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 lg:px-5 lg:py-2.5 rounded text-sm lg:text-base font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-text-muted hover:text-text-main hover:bg-bg-card'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="sm:hidden text-text-muted hover:text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden bg-bg-dark/95 backdrop-blur-md border-b border-border-subtle">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-text-muted hover:text-text-main hover:bg-bg-card'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
