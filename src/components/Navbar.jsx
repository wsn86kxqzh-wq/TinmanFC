import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Home, Users, Trophy, UserCircle, Camera, UserPlus, Flame } from 'lucide-react'

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
      {/* ===== 桌面端：左侧侧边栏 ===== */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-bg-dark border-r border-border-subtle z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3.5 px-6 py-7 group border-b border-border-subtle hover:bg-bg-card/50 transition-colors">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center font-display font-black text-bg-dark text-xl shadow-[0_0_20px_rgba(0,255,136,0.3)] group-hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-shadow">
            T
          </div>
          <div>
            <span className="font-display font-black text-2xl tracking-wider text-text-main group-hover:text-primary transition-colors">
              TINMAN<span className="text-primary">FC</span>
            </span>
            <div className="text-text-dim text-[10px] tracking-[0.2em] font-display mt-0.5">CHENGDU</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-3.5 px-4 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-200 group ${
                  isActive
                    ? 'text-primary bg-primary/8'
                    : 'text-text-muted hover:text-text-main hover:bg-bg-card/60'
                }`}
              >
                {/* 活跃指示条 */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-primary rounded-r-full shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
                )}
                <link.icon size={20} className={isActive ? 'text-primary' : 'text-text-dim group-hover:text-text-muted'} />
                {link.label}
                {isActive && <Flame size={14} className="ml-auto text-primary animate-pulse-glow" />}
              </Link>
            )
          })}
        </nav>

        {/* 底部签名 */}
        <div className="px-6 py-5 border-t border-border-subtle">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span className="text-primary text-xs font-display tracking-widest">IRON SPIRIT</span>
          </div>
          <p className="text-text-dim text-xs leading-relaxed">
            成都铁人足球俱乐部<br />
            <span className="text-text-muted">钢铁意志 · 绿茵永燃</span>
          </p>
        </div>
      </aside>

      {/* ===== 手机/平板端：顶部导航栏 ===== */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-md border-b border-border-subtle">
        <div className="flex items-center justify-between h-14 px-4">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-primary rounded flex items-center justify-center font-display font-black text-bg-dark text-sm shadow-[0_0_12px_rgba(0,255,136,0.3)]">
              T
            </div>
            <div>
              <span className="font-display font-black text-lg tracking-wider text-text-main group-hover:text-primary transition-colors">
                TINMAN<span className="text-primary">FC</span>
              </span>
            </div>
          </Link>

          <button
            className="text-text-muted hover:text-primary p-2 rounded-lg hover:bg-bg-card/60 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="bg-bg-dark/98 backdrop-blur-md border-b border-border-subtle">
            <div className="px-3 py-3 space-y-0.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-text-muted hover:text-text-main hover:bg-bg-card/60'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-primary rounded-r-full" />
                    )}
                    <link.icon size={18} />
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
