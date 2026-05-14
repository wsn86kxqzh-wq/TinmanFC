import { Image, Film } from 'lucide-react'
import { galleryItems } from '../data/teamData'
import useInView from '../hooks/useInView'

function RevealSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`${className} reveal ${isVisible ? 'visible' : ''} ${delay ? `reveal-delay-${delay}` : ''}`}
    >
      {children}
    </div>
  )
}

export default function Gallery() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-4 uppercase">
            Gallery
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wide">
            球队相册
          </h1>
        </div>
      </section>

      {/* 相册网格 */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => {
              const isFeatured = i === 0
              return (
                <RevealSection
                  key={item.id}
                  className={`${isFeatured ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                  delay={Math.min(i + 1, 4)}
                >
                  <div className="group border border-border overflow-hidden card-lift hover:border-accent/25 h-full">
                    {/* 图片占位 */}
                    <div
                      className={`relative bg-dark-3 flex items-center justify-center overflow-hidden ${
                        isFeatured ? 'min-h-[400px]' : 'min-h-[220px]'
                      }`}
                    >
                      {/* 悬停遮罩 */}
                      <div className="absolute inset-0 bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* 类型标识 */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-dark/80 backdrop-blur-sm px-2.5 py-1.5 text-xs">
                        {item.type === 'video' ? (
                          <>
                            <Film size={12} className="text-accent" />
                            <span className="text-muted-2">视频</span>
                          </>
                        ) : (
                          <>
                            <Image size={12} className="text-muted-2" />
                            <span className="text-muted-2">照片</span>
                          </>
                        )}
                      </div>

                      {/* 日期 */}
                      <div className="absolute top-3 left-3 text-muted text-[10px] bg-dark/80 backdrop-blur-sm px-2 py-1 tracking-wider">
                        {item.date}
                      </div>

                      {/* 占位图案 */}
                      <div className="text-center">
                        <div className="w-12 h-12 border border-border/60 mx-auto mb-2 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-300">
                          {item.type === 'video' ? (
                            <Film size={20} className="text-accent/25" />
                          ) : (
                            <Image size={20} className="text-muted/25" />
                          )}
                        </div>
                        <span className="text-muted/30 text-xs">
                          {isFeatured ? '精选照片' : '照片'}
                        </span>
                      </div>
                    </div>

                    {/* 文字区 */}
                    <div className="p-5">
                      <h3
                        className={`font-medium text-white group-hover:text-accent transition-colors duration-300 ${
                          isFeatured ? 'text-xl' : 'text-base'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted-2 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
