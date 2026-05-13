import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-sm flex items-center justify-center font-display font-bold text-bg-dark text-xs sm:text-sm">
                T
              </div>
              <span className="font-display font-bold text-base sm:text-lg tracking-wider">
                TINMAN<span className="text-primary">FC</span>
              </span>
            </div>
            <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
              钢铁意志，绿茵永燃。<br />
              成都铁人足球俱乐部，用热爱丈量每一寸球场。
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4 tracking-wider">快速导航</h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-2">
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
                  className="text-text-muted hover:text-primary text-xs sm:text-sm transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4 tracking-wider">联系我们</h4>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-text-muted">
              <p>坐标：成都</p>
              <p>训练：每周三 / 周六</p>
              <p>主场：成都足球公园</p>
              <p className="pt-1 sm:pt-2">
                <span className="text-primary">tinmanfc.top</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-text-dim text-[10px] sm:text-xs">
            &copy; 2026 TinmanFC. All rights reserved.
          </p>
          <p className="text-text-dim text-[10px] sm:text-xs">
            Made with <span className="text-accent-red">heart</span> in Chengdu
          </p>
        </div>
      </div>
    </footer>
  )
}
