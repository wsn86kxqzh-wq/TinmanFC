import { galleryItems } from '../data/teamData'
import { Camera, Calendar, Image } from 'lucide-react'

export default function Gallery() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <span className="inline-block text-primary font-display text-sm tracking-widest mb-4">GALLERY</span>
          <h1 className="font-display font-900 text-4xl sm:text-6xl mb-4">
            精彩<span className="text-primary">瞬间</span>
          </h1>
          <p className="text-text-muted">每一个画面，都是一段铁人的故事</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item) => (
              <div key={item.id} className="group bg-bg-card border border-border-subtle rounded-lg overflow-hidden card-hover">
                {/* Placeholder Image */}
                <div className="relative h-48 bg-bg-surface flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5"></div>
                  <div className="relative flex flex-col items-center gap-2">
                    <Image className="text-primary/30 group-hover:text-primary/50 transition-colors" size={48} />
                    <span className="text-text-dim text-xs">{item.title}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-bg-dark/70 backdrop-blur-sm rounded px-2 py-1 text-xs text-primary">
                    <Camera size={12} className="inline mr-1" />
                    {item.type === 'photo' ? '照片' : '视频'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-medium text-base mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-2">{item.description}</p>
                  <div className="flex items-center gap-1 text-text-dim text-xs">
                    <Calendar size={11} />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upload notice */}
          <div className="mt-12 text-center bg-bg-card border border-border-subtle rounded-lg p-8">
            <Camera className="mx-auto text-primary/40 mb-3" size={40} />
            <h3 className="font-display font-medium text-lg mb-2">更多精彩内容即将上线</h3>
            <p className="text-text-muted text-sm">
              我们正在整理更多比赛照片和训练视频，敬请期待！<br />
              如果你也有精彩照片，欢迎在球队群里分享。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
