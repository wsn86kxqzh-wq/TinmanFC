import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-display font-bold text-bg-dark text-sm">
                T
              </div>
              <span className="font-display font-bold text-lg tracking-wider">
                TINMAN<span className="text-primary">FC</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              钢铁意志，绿茵永燃。<br />
              成都铁人足球俱乐部，用热爱丈量每一寸球场。
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-medium text-primary mb-4 tracking-wider">快速导航</h4>
            <div className="space-y-2">
              {[
                { to: '/about', label: '球队介绍' },
                { to: '/matches', label: '赛事战绩' },
                { to: '/roster', label: '球员阵容' },
                { to: '/gallery', label: '精彩相册' },
                { to: '/join', label: '加入我们' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-text-muted hover:text-primary text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-medium text-primary mb-4 tracking-wider">联系我们</h4>
            <div className="space-y-2 text-sm text-text-muted">
              <p>坐标：成都</p>
              <p>训练：每周三 / 周六</p>
              <p>主场：成都足球公园</p>
              <p className="pt-2">
                <span className="text-primary">tinmanfc.top</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-xs">
            &copy; 2026 TinmanFC. All rights reserved.
          </p>
          <p className="text-text-dim text-xs">
            Made with <span className="text-accent-red">heart</span> in Chengdu
          </p>
        </div>
      </div>
    </footer>
  )
}
