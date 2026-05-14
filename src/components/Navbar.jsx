import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Home, Users, Trophy, UserCircle, Camera, UserPlus } from 'lucide-react'

const links = [
  { to: '/', label: '首页', icon: Home },
  { to: '/about', label: '球队', icon: Users },
  { to: '/matches', label: '赛事', icon: Trophy },
  { to: '/roster', label: '阵容', icon: UserCircle },
  { to: '/gallery', label: '相册', icon: Camera },
  { to: '/join', label: '加入', icon: UserPlus },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ===== 桌面端侧边栏 ===== */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-[260px] bg-bg border-r border-border z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3.5 px-6 h-[72px] border-b border-border shrink-0 group">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center font-display font-black text-bg text-lg">
            T
          </div>
          <div>
            <div className="font-display font-black text-[22px] tracking-wider leading-none">
              TINMAN<span className="text-primary">FC</span>
            </div>
            <div className="text-text-dim text-[9px] tracking-[0.25em] font-display mt-0.5">CHENGDU · IRON SPIRIT</div>
          </div>
        </Link>

        {/* 导航链接 */}
        <nav className="flex-1 py-6 px-4 space-y-0.5 overflow-y-auto no-scrollbar">
          {links.map((link) => {
            const active = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  relative flex items-center gap-3 px-4 h-[44px] rounded-md text-[14px] font-medium transition-all duration-150
                  ${active
                    ? 'text-primary bg-primary/[0.08]'
                    : 'text-text-secondary hover:text-text hover:bg-bg-elevated'}
                `}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-primary" />
                )}
                <link.icon size={18} strokeWidth={active ? 2.2 : 1.8} />
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* 底部 */}
        <div className="px-6 py-5 border-t border-border">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full anim-pulse-dot" />
            <span className="text-primary text-[10px] font-display tracking-[0.2em]">ACTIVE</span>
          </div>
          <p className="text-text-dim text-[11px] leading-relaxed">
            钢铁意志 · 绿茵永燃
          </p>
        </div>
      </aside>

      {/* ===== 移动端顶栏 ===== */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-[60px] bg-bg/95 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between h-full px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-display font-black text-bg text-sm">
              T
            </div>
            <span className="font-display font-black text-[17px] tracking-wider">
              TINMAN<span className="text-primary">FC</span>
            </span>
          </Link>
          <button onClick={() => setOpen(!open)} className="p-2 text-text-secondary hover:text-text">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="bg-bg border-b border-border">
            <nav className="px-3 py-2 space-y-0.5">
              {links.map((link) => {
                const active = pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 h-[44px] rounded-md text-sm font-medium transition-all
                      ${active ? 'text-primary bg-primary/[0.08]' : 'text-text-secondary hover:text-text hover:bg-bg-elevated'}
                    `}
                  >
                    <link.icon size={17} />
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
