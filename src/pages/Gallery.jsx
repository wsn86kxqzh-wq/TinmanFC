import { galleryItems } from '../data/teamData'
import { Camera, Calendar, Image, Film } from 'lucide-react'

export default function Gallery() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-accent-red/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 lg:px-12">
          <span className="inline-block text-accent-red font-display text-xs lg:text-sm tracking-[0.3em] mb-4 lg:mb-6">GALLERY</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl mb-4 lg:mb-6">
            精彩<span className="text-primary">瞬间</span>
          </h1>
          <p className="text-text-muted text-base lg:text-lg">每一个画面，都是一段铁人的故事</p>
        </div>
      </section>

      {/* ===== Bento 网格 ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[160px] lg:auto-rows-[200px]">
            {galleryItems.map((item, i) => {
              // Bento 布局：部分卡片跨行或跨列
              const isLarge = i === 0 || i === 3
              return (
                <div key={item.id} className={`group bg-bg-card border border-border-subtle rounded-xl overflow-hidden hover:border-primary/20 transition-all ${
                  isLarge ? 'col-span-2 row-span-2' : ''
                }`}>
                  {/* 图片区域 */}
                  <div className={`relative ${isLarge ? 'h-[70%]' : 'h-[60%]'} bg-bg-surface flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5" />
                    <div className="relative flex flex-col items-center gap-2">
                      {item.type === 'video' ? (
                        <Film className="text-primary/30 group-hover:text-primary/50 transition-colors" size={isLarge ? 40 : 28} />
                      ) : (
                        <Image className="text-primary/30 group-hover:text-primary/50 transition-colors" size={isLarge ? 40 : 28} />
                      )}
                      <span className="text-text-dim text-[10px] lg:text-xs">{item.title}</span>
                    </div>
                    {/* 类型标签 */}
                    <div className="absolute top-2 right-2 lg:top-3 lg:right-3 bg-bg-dark/80 backdrop-blur-sm rounded-md px-2 py-0.5 text-[10px] lg:text-xs text-primary font-medium flex items-center gap-1">
                      <Camera size={10} />
                      {item.type === 'photo' ? '照片' : '视频'}
                    </div>
                  </div>
                  {/* 文字区域 */}
                  <div className="p-3 lg:p-4">
                    <h3 className="font-display font-medium text-xs lg:text-sm mb-0.5 lg:mb-1 group-hover:text-primary transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-text-dim text-[10px] lg:text-xs line-clamp-1">{item.description}</p>
                    <div className="flex items-center gap-1 text-text-dim text-[10px] mt-1">
                      <Calendar size={9} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 上传提示 */}
          <div className="mt-12 lg:mt-20 bg-bg-card border border-border-subtle rounded-xl p-8 lg:p-14 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl mx-auto flex items-center justify-center mb-4 lg:mb-6">
              <Camera className="text-primary" size={28} />
            </div>
            <h3 className="font-display font-bold text-lg lg:text-2xl mb-2 lg:mb-3">更多精彩内容即将上线</h3>
            <p className="text-text-muted text-sm lg:text-base max-w-lg mx-auto leading-relaxed">
              我们正在整理更多比赛照片和训练视频，敬请期待！<br />
              如果你也有精彩照片，欢迎在球队群里分享。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
