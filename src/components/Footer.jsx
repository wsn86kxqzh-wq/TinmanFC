import { Link } from 'react-router-dom'

const nav = [
  { to: '/about', label: '球队' },
  { to: '/matches', label: '赛事' },
  { to: '/roster', label: '阵容' },
  { to: '/gallery', label: '相册' },
  { to: '/join', label: '加入' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 品牌 */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-display font-black text-bg text-sm">
                T
              </div>
              <span className="font-display font-black text-lg tracking-wider">
                TINMAN<span className="text-primary">FC</span>
              </span>
            </div>
            <p className="text-text-dim text-xs leading-relaxed max-w-[240px]">
              成都铁人足球俱乐部<br />
              钢铁意志，绿茵永燃
            </p>
          </div>

          {/* 导航 */}
          <div>
            <h4 className="text-text-dim text-[11px] font-display tracking-[0.15em] mb-3 uppercase">导航</h4>
            <div className="space-y-2">
              {nav.map(n => (
                <Link key={n.to} to={n.to} className="block text-text-secondary text-sm hover:text-primary transition-colors">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 信息 */}
          <div>
            <h4 className="text-text-dim text-[11px] font-display tracking-[0.15em] mb-3 uppercase">信息</h4>
            <div className="space-y-2 text-text-secondary text-sm">
              <p>坐标 · 成都</p>
              <p>训练 · 每周三 / 周六</p>
              <p>主场 · 成都足球公园</p>
            </div>
          </div>

          {/* 域名 */}
          <div>
            <h4 className="text-text-dim text-[11px] font-display tracking-[0.15em] mb-3 uppercase">线上</h4>
            <p className="text-primary font-display text-sm">tinmanfc.top</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-text-dim text-[11px]">&copy; 2026 TinmanFC</p>
          <p className="text-text-dim text-[11px]">Made with <span className="text-red">&#9829;</span> in Chengdu</p>
        </div>
      </div>
    </footer>
  )
}
