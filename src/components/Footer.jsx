import { Link } from 'react-router-dom'
import { teamInfo } from '../data/teamData'

const footerLinks = [
  { path: '/', label: '首页' },
  { path: '/about', label: '球队' },
  { path: '/matches', label: '赛事' },
  { path: '/roster', label: '阵容' },
  { path: '/gallery', label: '相册' },
  { path: '/join', label: '加入' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* 品牌 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center font-display text-dark text-lg font-bold">
                T
              </div>
              <span className="font-display text-xl tracking-[0.15em] text-white">
                TINMAN<span className="text-accent">FC</span>
              </span>
            </div>
            <p className="text-muted-2 text-sm leading-relaxed">
              {teamInfo.slogan}
            </p>
          </div>

          {/* 链接 */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider mb-4">
              导航
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-2 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 信息 */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider mb-4">
              信息
            </h4>
            <div className="space-y-2 text-muted-2 text-sm">
              <p>{teamInfo.city} · {teamInfo.nameCn}</p>
              <p>成立 {teamInfo.founded}</p>
              <p className="text-muted text-xs mt-3">tinmanfc.top</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} TinmanFC. All rights reserved.
          </p>
          <p className="text-muted/50 text-xs">
            Built with iron will
          </p>
        </div>
      </div>
    </footer>
  )
}
