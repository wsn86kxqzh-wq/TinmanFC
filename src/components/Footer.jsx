import { Link } from 'react-router-dom'
import { Flame } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {/* 品牌 */}
          <div>
            <div className="flex items-center gap-3 mb-4 lg:mb-5">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-display font-black text-bg-dark text-base shadow-[0_0_12px_rgba(0,255,136,0.2)]">
                T
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-wider">
                  TINMAN<span className="text-primary">FC</span>
                </span>
                <div className="text-text-dim text-[9px] tracking-[0.2em] font-display">CHENGDU</div>
              </div>
            </div>
            <p className="text-text-muted text-xs lg:text-sm leading-relaxed">
              钢铁意志，绿茵永燃。<br />
              成都铁人足球俱乐部，用热爱丈量每一寸球场。
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Flame size={12} className="text-primary" />
              <span className="text-primary text-[10px] font-display tracking-widest">IRON SPIRIT</span>
            </div>
          </div>

          {/* 快速导航 */}
          <div>
            <h4 className="font-display text-xs lg:text-sm font-semibold text-primary mb-4 lg:mb-5 tracking-wider">快速导航</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 lg:gap-y-2">
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
                  className="text-text-muted hover:text-primary text-xs lg:text-sm transition-colors py-0.5 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-primary/30 rounded-full group-hover:bg-primary transition-colors" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="font-display text-xs lg:text-sm font-semibold text-primary mb-4 lg:mb-5 tracking-wider">联系我们</h4>
            <div className="space-y-2 lg:space-y-3 text-xs lg:text-sm text-text-muted">
              <p>坐标：成都</p>
              <p>训练：每周三 / 周六</p>
              <p>主场：成都足球公园</p>
              <p className="pt-1.5">
                <span className="text-primary font-display text-xs lg:text-sm">tinmanfc.top</span>
              </p>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-text-dim text-[10px] lg:text-xs">
            &copy; 2026 TinmanFC. All rights reserved.
          </p>
          <p className="text-text-dim text-[10px] lg:text-xs">
            Made with <span className="text-accent-red">&#9829;</span> in Chengdu
          </p>
        </div>
      </div>
    </footer>
  )
}
