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
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* 品牌 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
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
            <p className="text-muted/40 text-xs mt-4 tracking-wider">
              {teamInfo.city} · Est. {teamInfo.founded}
            </p>
          </div>

          {/* 链接 */}
          <div>
            <h4 className="text-white text-xs font-medium tracking-[0.3em] mb-5 uppercase">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-2 text-sm link-underline hover:text-accent transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 信息 */}
          <div>
            <h4 className="text-white text-xs font-medium tracking-[0.3em] mb-5 uppercase">
              Contact
            </h4>
            <div className="space-y-3 text-muted-2 text-sm">
              <p>{teamInfo.nameCn}</p>
              <p>成都足球公园</p>
              <a
                href="mailto:hello@tinmanfc.top"
                className="text-muted-2 hover:text-accent transition-colors duration-300 link-underline w-fit"
              >
                hello@tinmanfc.top
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/60 text-xs tracking-wider">
            © {new Date().getFullYear()} TinmanFC
          </p>
          <p className="text-muted/30 text-xs tracking-widest uppercase">
            Built with iron will
          </p>
        </div>
      </div>
    </footer>
  )
}
