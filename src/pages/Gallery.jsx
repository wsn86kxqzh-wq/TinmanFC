import { galleryItems } from '../data/teamData'
import { Camera, Calendar, Image } from 'lucide-react'

export default function Gallery() {
  return (
    <div className="min-h-screen pt-6 lg:pt-8">
      {/* Header */}
      <section className="pb-10 sm:pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="max-w-4xl mx-auto text-center px-5 sm:px-4 lg:px-8 relative z-10">
          <span className="inline-block text-primary font-display text-xs sm:text-sm lg:text-base tracking-widest mb-3 sm:mb-4 lg:mb-5">GALLERY</span>
          <h1 className="font-display font-900 text-3xl sm:text-5xl lg:text-7xl mb-3 sm:mb-4 lg:mb-6">
            精彩<span className="text-primary">瞬间</span>
          </h1>
          <p className="text-text-muted text-sm sm:text-base lg:text-lg">每一个画面，都是一段铁人的故事</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="group bg-bg-card border border-border-subtle rounded-lg overflow-hidden card-hover">
                {/* Placeholder Image */}
                <div className="relative h-32 sm:h-48 lg:h-56 bg-bg-surface flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5"></div>
                  <div className="relative flex flex-col items-center gap-1 sm:gap-2">
                    <Image className="text-primary/30 group-hover:text-primary/50 transition-colors" size={32} />
                    <span className="text-text-dim text-[10px] sm:text-xs lg:text-sm">{item.title}</span>
                  </div>
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 bg-bg-dark/70 backdrop-blur-sm rounded px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 lg:py-1 text-[10px] sm:text-xs lg:text-sm text-primary">
                    <Camera size={10} className="inline mr-0.5 sm:mr-1" />
                    {item.type === 'photo' ? '照片' : '视频'}
                  </div>
                </div>
                <div className="p-3 sm:p-4 lg:p-5">
                  <h3 className="font-display font-medium text-xs sm:text-base lg:text-lg mb-0.5 sm:mb-1 lg:mb-2 group-hover:text-primary transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-[10px] sm:text-sm lg:text-base mb-1 sm:mb-2 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-1 text-text-dim text-[10px] sm:text-xs lg:text-sm">
                    <Calendar size={10} />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upload notice */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center bg-bg-card border border-border-subtle rounded-lg p-6 sm:p-8 lg:p-10">
            <Camera className="mx-auto text-primary/40 mb-2 sm:mb-3 lg:mb-4" size={32} />
            <h3 className="font-display font-medium text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 lg:mb-3">更多精彩内容即将上线</h3>
            <p className="text-text-muted text-xs sm:text-sm lg:text-base">
              我们正在整理更多比赛照片和训练视频，敬请期待！<br />
              如果你也有精彩照片，欢迎在球队群里分享。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
