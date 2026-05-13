import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Home, Users, Trophy, UserCircle, Camera, UserPlus } from 'lucide-react'

const navLinks = [
  { path: '/', label: '首页', icon: Home },
  { path: '/about', label: '球队', icon: Users },
  { path: '/matches', label: '赛事', icon: Trophy },
  { path: '/roster', label: '阵容', icon: UserCircle },
  { path: '/gallery', label: '相册', icon: Camera },
  { path: '/join', label: '加入', icon: UserPlus },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* 桌面端：左侧侧边栏 */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-bg-dark border-r border-border-subtle z-50">
        <Link to="/" className="flex items-center gap-3 px-6 py-7 group border-b border-border-subtle">
          <div className="w-11 h-11 bg-primary rounded flex items-center justify-center font-display font-bold text-bg-dark text-lg">
            T
          </div>
          <span className="font-display font-bold text-2xl tracking-wider text-text-main group-hover:text-primary transition-colors">
            TINMAN<span className="text-primary">FC</span>
          </span>
        </Link>

        <nav className="flex-1 py-5 px-4 space-y-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3.5 px-5 py-3.5 rounded-lg text-base font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-primary bg-primary/10'
                  : 'text-text-muted hover:text-text-main hover:bg-bg-card'
              }`}
            >
              <link.icon size={20} />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 py-5 border-t border-border-subtle">
          <p className="text-text-dim text-sm leading-relaxed">
            成都铁人足球俱乐部<br />
            <span className="text-primary">钢铁意志 · 绿茵永燃</span>
          </p>
        </div>
      </aside>

      {/* 手机/平板端：顶部导航栏 */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-bg-dark/90 backdrop-blur-md border-b border-border-subtle">
        <div className="flex items-center justify-between h-14 px-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-display font-bold text-bg-dark text-sm">
              T
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-text-main group-hover:text-primary transition-colors">
              TINMAN<span className="text-primary">FC</span>
            </span>
          </Link>

          <button
            className="text-text-muted hover:text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="bg-bg-dark/95 backdrop-blur-md border-b border-border-subtle">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10'
                      : 'text-text-muted hover:text-text-main hover:bg-bg-card'
                  }`}
                >
                  <link.icon size={16} />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
