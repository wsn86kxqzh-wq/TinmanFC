import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useT } from '../i18n/useT'

export default function Navbar() {
  const { pathname } = useLocation()
  const { lang, toggleLang } = useLanguage()
  const t = useT()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/matches', label: t.nav.matches },
    { path: '/roster', label: t.nav.roster },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/join', label: t.nav.join },
  ]

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        {pathname === '/' ? (
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-accent rounded-sm flex items-center justify-center font-display text-dark text-lg sm:text-xl font-bold tracking-wider group-hover:shadow-[0_0_16px_rgba(0,255,136,0.3)] transition-all duration-300">
              T
            </div>
            <span className="font-display text-lg sm:text-xl tracking-[0.15em] text-white">
              TINMAN<span className="text-accent">FC</span>
            </span>
          </Link>
        ) : (
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group opacity-50 hover:opacity-100 transition-opacity duration-300 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent/20 rounded-sm flex items-center justify-center font-display text-accent text-sm sm:text-base font-bold tracking-wider group-hover:bg-accent group-hover:text-dark transition-all duration-300">
              T
            </div>
            <span className="font-display text-base sm:text-lg tracking-[0.15em] text-muted-2 group-hover:text-white transition-colors duration-300 hidden sm:inline">
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
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
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
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="ml-3 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium tracking-wider text-muted-2 hover:text-accent border border-border hover:border-accent/30 transition-all duration-300 rounded-sm"
          >
            <Globe size={13} />
            {lang === 'zh' ? 'EN' : '中'}
          </button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2 py-1.5 text-[10px] font-medium tracking-wider text-muted-2 hover:text-accent border border-border hover:border-accent/30 transition-all duration-300 rounded-sm"
          >
            <Globe size={11} />
            {lang === 'zh' ? 'EN' : '中'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1 hover:text-accent transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="h-[1px] bg-border">
        <div
          className="h-full bg-accent/60 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-2/98 backdrop-blur-xl border-t border-border">
          <div className="px-4 sm:px-6 py-3 space-y-0.5">
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
