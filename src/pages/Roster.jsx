import { players, positionMap } from '../data/teamData'
import { useState } from 'react'
import { User, Filter } from 'lucide-react'

const positions = ['全部', 'GK', 'CB', 'LB', 'RB', 'CDM', 'CM', 'CAM', 'LW', 'RW', 'ST']

export default function Roster() {
  const [filter, setFilter] = useState('全部')

  const filteredPlayers = filter === '全部'
    ? players
    : players.filter(p => p.position === filter)

  return (
    <div className="min-h-screen pt-24 sm:pt-32 lg:pt-40">
      {/* Header */}
      <section className="pb-10 sm:pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="max-w-4xl mx-auto text-center px-5 sm:px-4 lg:px-8 relative z-10">
          <span className="inline-block text-primary font-display text-xs sm:text-sm lg:text-base tracking-widest mb-3 sm:mb-4 lg:mb-5">ROSTER</span>
          <h1 className="font-display font-900 text-3xl sm:text-5xl lg:text-7xl mb-3 sm:mb-4 lg:mb-6">
            球员<span className="text-primary">阵容</span>
          </h1>
          <p className="text-text-muted text-sm sm:text-base lg:text-lg">每一位都是铁人，每一位都不可替代</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-3 sm:py-4 lg:py-5 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 overflow-x-auto pb-2 -webkit-overflow-scrolling-touch">
            <Filter className="text-text-dim shrink-0" size={14} />
            {positions.map((pos) => (
              <button
                key={pos}
                onClick={() => setFilter(pos)}
                className={`shrink-0 px-2.5 sm:px-3 lg:px-4 py-1.5 lg:py-2 rounded text-xs lg:text-sm font-medium transition-all ${
                  filter === pos
                    ? 'bg-primary text-bg-dark'
                    : 'bg-bg-card text-text-muted border border-border-subtle hover:border-primary/30 hover:text-primary'
                }`}
              >
                {pos === '全部' ? '全部' : pos}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Player Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
            {filteredPlayers.map((player) => (
              <div key={player.id} className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-5 lg:p-6 card-hover relative overflow-hidden">
                {/* Jersey Number BG */}
                <div className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 lg:-right-6 lg:-top-6 font-display font-900 text-5xl sm:text-8xl lg:text-9xl text-primary/5 leading-none select-none">
                  {player.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2 sm:mb-3 lg:mb-4">
                    <div>
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                          <User className="text-primary" size={14} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-sm sm:text-lg lg:text-xl">{player.name}</h3>
                          <span className="text-primary text-[10px] sm:text-xs lg:text-sm font-medium">#{player.number} &middot; {positionMap[player.position]}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-accent-gold text-xs sm:text-sm lg:text-base font-medium mb-1 sm:mb-2">
                    "{player.nickname}"
                  </div>
                  <p className="text-text-muted text-[10px] sm:text-xs lg:text-sm italic mb-3 sm:mb-4 line-clamp-2 lg:line-clamp-1">"{player.motto}"</p>

                  <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-3 pt-2 sm:pt-3 lg:pt-4 border-t border-border-subtle">
                    <div className="text-center">
                      <div className="font-display font-bold text-base sm:text-lg lg:text-xl text-primary">{player.goals}</div>
                      <div className="text-text-dim text-[10px] sm:text-xs lg:text-sm">进球</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display font-bold text-base sm:text-lg lg:text-xl text-accent-blue">{player.assists}</div>
                      <div className="text-text-dim text-[10px] sm:text-xs lg:text-sm">助攻</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display font-bold text-base sm:text-lg lg:text-xl text-accent-gold">{player.matches}</div>
                      <div className="text-text-dim text-[10px] sm:text-xs lg:text-sm">出场</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPlayers.length === 0 && (
            <div className="text-center py-16 text-text-dim">
              该位置暂无球员
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
