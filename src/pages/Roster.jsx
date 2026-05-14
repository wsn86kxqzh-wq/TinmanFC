import { players, positionMap } from '../data/teamData'
import { useState } from 'react'
import { User, Filter, Shield, Swords } from 'lucide-react'

const positions = ['全部', 'GK', 'CB', 'LB', 'RB', 'CDM', 'CM', 'CAM', 'LW', 'RW', 'ST']

const positionColor = {
  GK: { text: 'text-accent-gold', bg: 'bg-accent-gold/10', border: 'border-accent-gold/20' },
  CB: { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/20' },
  LB: { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/20' },
  RB: { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/20' },
  CDM: { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  CM: { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  CAM: { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  LW: { text: 'text-accent-red', bg: 'bg-accent-red/10', border: 'border-accent-red/20' },
  RW: { text: 'text-accent-red', bg: 'bg-accent-red/10', border: 'border-accent-red/20' },
  ST: { text: 'text-accent-red', bg: 'bg-accent-red/10', border: 'border-accent-red/20' },
}

export default function Roster() {
  const [filter, setFilter] = useState('全部')

  const filteredPlayers = filter === '全部'
    ? players
    : players.filter(p => p.position === filter)

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 lg:px-12">
          <span className="inline-block text-accent-blue font-display text-xs lg:text-sm tracking-[0.3em] mb-4 lg:mb-6">ROSTER</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl mb-4 lg:mb-6">
            球员<span className="text-primary">阵容</span>
          </h1>
          <p className="text-text-muted text-base lg:text-lg">每一位都是铁人，每一位都不可替代</p>
        </div>
      </section>

      {/* ===== 筛选器 ===== */}
      <section className="py-4 lg:py-6 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 lg:gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <Filter className="text-text-dim shrink-0" size={14} />
            {positions.map((pos) => {
              const isActive = filter === pos
              const posColor = pos !== '全部' ? positionColor[pos] : null
              return (
                <button
                  key={pos}
                  onClick={() => setFilter(pos)}
                  className={`shrink-0 px-3 lg:px-5 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-bg-dark shadow-[0_0_12px_rgba(0,255,136,0.2)]'
                      : 'bg-bg-card text-text-muted border border-border-subtle hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  {pos === '全部' ? '全部' : pos}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== 球员卡片 ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filteredPlayers.map((player) => {
              const pc = positionColor[player.position] || { text: 'text-text-muted', bg: 'bg-bg-card', border: 'border-border-subtle' }
              return (
                <div key={player.id} className={`relative bg-bg-card border ${pc.border} rounded-xl p-5 lg:p-6 hover:scale-[1.02] transition-transform overflow-hidden group`}>
                  {/* 球衣号码大背景 */}
                  <div className="absolute -right-4 -top-4 lg:-right-6 lg:-top-6 font-display font-black text-[6rem] lg:text-[8rem] text-primary/[0.03] leading-none select-none group-hover:text-primary/[0.06] transition-colors">
                    {player.number}
                  </div>

                  <div className="relative z-10">
                    {/* 顶部：头像+名字+位置 */}
                    <div className="flex items-center gap-3 lg:gap-4 mb-4">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 ${pc.bg} border ${pc.border} rounded-xl flex items-center justify-center`}>
                        <User className={pc.text} size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-lg lg:text-xl truncate">{player.name}</h3>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-primary font-display text-xs lg:text-sm font-bold`}>#{player.number}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] lg:text-xs font-bold ${pc.bg} ${pc.text}`}>
                            {positionMap[player.position]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 绰号 */}
                    <div className="text-accent-gold text-xs lg:text-sm font-medium mb-1.5">
                      "{player.nickname}"
                    </div>
                    <p className="text-text-dim text-[11px] lg:text-xs italic mb-4 line-clamp-1">"{player.motto}"</p>

                    {/* 数据条 */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border-subtle">
                      {[
                        { value: player.goals, label: '进球', color: 'text-primary' },
                        { value: player.assists, label: '助攻', color: 'text-accent-blue' },
                        { value: player.matches, label: '出场', color: 'text-accent-gold' },
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className={`font-display font-black text-lg lg:text-2xl ${stat.color}`}>{stat.value}</div>
                          <div className="text-text-dim text-[10px] lg:text-xs">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredPlayers.length === 0 && (
            <div className="text-center py-20 text-text-dim">
              <Shield className="mx-auto mb-3" size={40} />
              <p className="font-display">该位置暂无球员</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
