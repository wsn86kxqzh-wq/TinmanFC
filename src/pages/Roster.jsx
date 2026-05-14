import { players, positionMap } from '../data/teamData'
import { useState } from 'react'
import { User, Filter } from 'lucide-react'

const posGroups = [
  { label: '全部', keys: null },
  { label: '门将', keys: ['GK'] },
  { label: '后卫', keys: ['CB', 'LB', 'RB'] },
  { label: '中场', keys: ['CDM', 'CM', 'CAM'] },
  { label: '前锋', keys: ['LW', 'RW', 'ST'] },
]

const posColor = {
  GK: { bg: 'bg-gold/10', text: 'text-gold', border: 'border-gold/15' },
  CB: { bg: 'bg-blue/10', text: 'text-blue', border: 'border-blue/15' },
  LB: { bg: 'bg-blue/10', text: 'text-blue', border: 'border-blue/15' },
  RB: { bg: 'bg-blue/10', text: 'text-blue', border: 'border-blue/15' },
  CDM: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/15' },
  CM: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/15' },
  CAM: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/15' },
  LW: { bg: 'bg-red/10', text: 'text-red', border: 'border-red/15' },
  RW: { bg: 'bg-red/10', text: 'text-red', border: 'border-red/15' },
  ST: { bg: 'bg-red/10', text: 'text-red', border: 'border-red/15' },
}

export default function Roster() {
  const [filter, setFilter] = useState('全部')

  const filtered = filter === '全部'
    ? players
    : players.filter(p => posGroups.find(g => g.label === filter)?.keys?.includes(p.position))

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[800px] mx-auto text-center px-6">
          <span className="text-blue font-display text-[11px] tracking-[0.3em]">ROSTER</span>
          <h1 className="font-display font-black text-4xl lg:text-7xl mt-3 mb-4">
            球员<span className="text-primary">阵容</span>
          </h1>
          <p className="text-text-secondary text-sm lg:text-lg">每一位都是铁人</p>
        </div>
      </section>

      {/* ===== 筛选 ===== */}
      <section className="border-y border-border bg-bg-card">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Filter size={13} className="text-text-dim shrink-0" />
          {posGroups.map(g => (
            <button
              key={g.label}
              onClick={() => setFilter(g.label)}
              className={`shrink-0 px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                filter === g.label
                  ? 'bg-primary text-bg'
                  : 'text-text-secondary hover:text-text bg-bg hover:bg-bg-elevated border border-border'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </section>

      {/* ===== 球员网格 ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {filtered.map(player => {
              const pc = posColor[player.position] || { bg: 'bg-bg-card', text: 'text-text-dim', border: 'border-border' }
              return (
                <div key={player.id} className={`border ${pc.border} rounded-lg p-5 bg-bg-card relative overflow-hidden hover:border-primary/25 transition-colors group`}>
                  {/* 号码水印 */}
                  <div className="absolute -right-3 -top-3 font-display font-black text-[5rem] text-primary/[0.025] leading-none select-none group-hover:text-primary/[0.05] transition-colors">
                    {player.number}
                  </div>

                  <div className="relative">
                    {/* 头部 */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 ${pc.bg} rounded-lg flex items-center justify-center`}>
                        <User className={pc.text} size={18} />
                      </div>
                      <div>
                        <div className="font-display font-bold text-base">{player.name}</div>
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <span className="text-primary font-display font-bold">#{player.number}</span>
                          <span className={`${pc.bg} ${pc.text} px-1.5 py-0.5 rounded text-[10px] font-medium`}>
                            {positionMap[player.position]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 绰号 */}
                    <div className="text-gold text-xs font-medium mb-0.5">"{player.nickname}"</div>
                    <div className="text-text-dim text-[11px] italic mb-4 line-clamp-1">"{player.motto}"</div>

                    {/* 数据 */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border text-center">
                      <div>
                        <div className="font-display font-bold text-lg text-primary">{player.goals}</div>
                        <div className="text-text-dim text-[10px]">进球</div>
                      </div>
                      <div>
                        <div className="font-display font-bold text-lg text-blue">{player.assists}</div>
                        <div className="text-text-dim text-[10px]">助攻</div>
                      </div>
                      <div>
                        <div className="font-display font-bold text-lg text-gold">{player.matches}</div>
                        <div className="text-text-dim text-[10px]">出场</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-text-dim text-sm">该位置暂无球员</div>
          )}
        </div>
      </section>
    </div>
  )
}
