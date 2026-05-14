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
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // 页面切换时回到顶部
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo - 仅首页显示 */}
        {pathname === '/' ? (
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-accent rounded-sm flex items-center justify-center font-display text-dark text-xl font-bold tracking-wider group-hover:shadow-[0_0_16px_rgba(0,255,136,0.3)] transition-all duration-300">
              T
            </div>
            <span className="font-display text-xl tracking-[0.15em] text-white">
              TINMAN<span className="text-accent">FC</span>
            </span>
          </Link>
        ) : (
          <Link to="/" className="flex items-center gap-3 group opacity-50 hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-accent/20 rounded-sm flex items-center justify-center font-display text-accent text-base font-bold tracking-wider group-hover:bg-accent group-hover:text-dark transition-all duration-300">
              T
            </div>
            <span className="font-display text-lg tracking-[0.15em] text-muted-2 group-hover:text-white transition-colors duration-300">
              TINMAN<span className="text-accent/60 group-hover:text-accent transition-colors duration-300">FC</span>
            </span>
          </Link>
        )}

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  active
                    ? 'text-accent'
                    : 'text-muted-2 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent rounded-full transition-all duration-300 ${
                    active ? 'w-5' : 'w-0'
                  }`}
                />
              </Link>
            )
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1 hover:text-accent transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 滚动进度条 */}
      <div className="h-[1px] bg-border">
        <div
          className="h-full bg-accent/60 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-2/98 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 rounded text-sm font-medium tracking-wide transition-all duration-200 ${
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
      </div>
    </nav>
  )
}
