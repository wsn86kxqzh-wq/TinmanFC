import { galleryItems } from '../data/teamData'
import { Camera, Calendar, Image, Film } from 'lucide-react'

export default function Gallery() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[800px] mx-auto text-center px-6">
          <span className="text-red font-display text-[11px] tracking-[0.3em]">GALLERY</span>
          <h1 className="font-display font-black text-4xl lg:text-7xl mt-3 mb-4">
            精彩<span className="text-primary">瞬间</span>
          </h1>
          <p className="text-text-secondary text-sm lg:text-lg">每一个画面，都是一段铁人的故事</p>
        </div>
      </section>

      {/* ===== 瀑布流网格 ===== */}
      <section className="py-0 lg:py-0">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {galleryItems.map((item, i) => {
              const isFeatured = i === 0
              return (
                <div key={item.id} className={`group border border-border rounded-lg overflow-hidden hover:border-primary/20 transition-colors ${isFeatured ? 'col-span-2 row-span-2' : ''}`}>
                  {/* 图片占位 */}
                  <div className={`relative bg-bg-card flex items-center justify-center overflow-hidden ${isFeatured ? 'h-[200px] lg:h-[280px]' : 'h-[120px] lg:h-[160px]'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-blue/[0.02]" />
                    {item.type === 'video' ? (
                      <Film className="text-primary/20 group-hover:text-primary/40 transition-colors" size={isFeatured ? 36 : 24} />
                    ) : (
                      <Image className="text-primary/20 group-hover:text-primary/40 transition-colors" size={isFeatured ? 36 : 24} />
                    )}
                    <div className="absolute top-2 right-2 bg-bg/80 backdrop-blur-sm rounded px-1.5 py-0.5 text-[10px] text-primary flex items-center gap-1">
                      <Camera size={9} />
                      {item.type === 'photo' ? '照片' : '视频'}
                    </div>
                  </div>
                  {/* 文字 */}
                  <div className="p-3 lg:p-4">
                    <h3 className="font-medium text-xs lg:text-sm mb-0.5 group-hover:text-primary transition-colors truncate">{item.title}</h3>
                    <p className="text-text-dim text-[10px] lg:text-xs line-clamp-1">{item.description}</p>
                    <div className="flex items-center gap-1 text-text-dim text-[10px] mt-1">
                      <Calendar size={9} /><span>{item.date}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 更多提示 */}
          <div className="mt-12 lg:mt-16 border border-border rounded-lg p-6 lg:p-10 text-center">
            <Camera className="mx-auto text-primary/30 mb-3" size={28} />
            <h3 className="font-display font-medium text-sm lg:text-base mb-1.5">更多精彩即将上线</h3>
            <p className="text-text-dim text-xs">正在整理更多比赛照片和训练视频，敬请期待</p>
          </div>
        </div>
      </section>
    </div>
  )
}
