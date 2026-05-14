import { useState } from 'react'
import { players, positionMap } from '../data/teamData'

const positions = [
  { key: 'all', label: '全部' },
  { key: 'GK', label: '门将' },
  { key: 'DEF', label: '后卫', positions: ['CB', 'LB', 'RB'] },
  { key: 'MID', label: '中场', positions: ['CDM', 'CM', 'CAM'] },
  { key: 'FWD', label: '前锋', positions: ['LW', 'RW', 'ST'] },
]

const positionColors = {
  GK: 'bg-accent/10 text-accent border-accent/20',
  CB: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  LB: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  RB: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  CDM: 'bg-gold/10 text-gold border-gold/20',
  CM: 'bg-gold/10 text-gold border-gold/20',
  CAM: 'bg-gold/10 text-gold border-gold/20',
  LW: 'bg-red/10 text-red border-red/20',
  RW: 'bg-red/10 text-red border-red/20',
  ST: 'bg-red/10 text-red border-red/20',
}

export default function Roster() {
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all'
      ? players
      : players.filter((p) => {
          const group = positions.find((pos) => pos.key === filter)
          return group.positions ? group.positions.includes(p.position) : p.position === filter
        })

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] font-medium mb-4">
            THE SQUAD
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wide">
            球员阵容
          </h1>
        </div>
      </section>

      {/* 筛选器 */}
      <section className="border-y border-border bg-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-1">
            {positions.map((pos) => (
              <button
                key={pos.key}
                onClick={() => setFilter(pos.key)}
                className={`px-5 py-3 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                  filter === pos.key
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-muted-2 hover:text-white'
                }`}
              >
                {pos.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 球员卡片 */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((player, i) => (
              <div
                key={player.id}
                className="border border-border p-6 hover:border-accent/20 transition-colors relative overflow-hidden animate-slide-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* 号码水印 */}
                <span className="absolute -right-2 -top-4 font-display text-[7rem] leading-none text-white/[0.03]">
                  {player.number}
                </span>

                <div className="relative">
                  {/* 头部 */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-sm flex items-center justify-center font-display text-lg border ${positionColors[player.position]}`}
                      >
                        {player.number}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">
                          {player.name}
                        </h3>
                        <p className="text-muted text-xs">
                          {positionMap[player.position]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 昵称 */}
                  <p className="text-accent text-sm font-medium mb-1">
                    「{player.nickname}」
                  </p>
                  <p className="text-muted-2 text-xs italic mb-5">
                    {player.motto}
                  </p>

                  {/* 数据 */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                    <div>
                      <div className="font-display text-xl text-accent">
                        {player.goals}
                      </div>
                      <div className="text-muted text-[10px] tracking-wider">
                        进球
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-xl text-white">
                        {player.assists}
                      </div>
                      <div className="text-muted text-[10px] tracking-wider">
                        助攻
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-xl text-white">
                        {player.matches}
                      </div>
                      <div className="text-muted text-[10px] tracking-wider">
                        出场
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
