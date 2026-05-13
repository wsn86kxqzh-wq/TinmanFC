export const teamInfo = {
  name: 'TinmanFC',
  nameCn: '铁人足球俱乐部',
  city: '成都',
  founded: '2023',
  slogan: '钢铁意志，绿茵永燃',
  description: '我们是一群来自成都的足球狂热者，以铁人般的意志在绿茵场上奔跑。不论胜负，只论热爱。',
  playerCount: 22,
  matchCount: 48,
  winRate: '62%',
  goalsTotal: 127,
}

export const players = [
  { id: 1, name: '老铁', number: 1, position: 'GK', nickname: '叹息之墙', motto: '球门是我的领地', goals: 0, assists: 0, matches: 35 },
  { id: 2, name: '阿强', number: 4, position: 'CB', nickname: '铁闸', motto: '过我可以，先过我这关', goals: 2, assists: 3, matches: 40 },
  { id: 3, name: '小刘', number: 5, position: 'CB', nickname: '定海神针', motto: '稳住就是赢', goals: 1, assists: 1, matches: 38 },
  { id: 4, name: '大伟', number: 3, position: 'LB', nickname: '边路飞翼', motto: '跑到对手怀疑人生', goals: 3, assists: 12, matches: 42 },
  { id: 5, name: '阿杰', number: 2, position: 'RB', nickname: '右路快刀', motto: '攻防一体', goals: 2, assists: 8, matches: 36 },
  { id: 6, name: '小胖', number: 6, position: 'CDM', nickname: '中场绞肉机', motto: '球是我的', goals: 4, assists: 7, matches: 44 },
  { id: 7, name: '阿明', number: 8, position: 'CM', nickname: '发动机', motto: '控制中场就控制比赛', goals: 9, assists: 15, matches: 46 },
  { id: 8, name: '小林', number: 10, position: 'CAM', nickname: '魔术师', motto: '传球即艺术', goals: 12, assists: 22, matches: 45 },
  { id: 9, name: '飞哥', number: 7, position: 'LW', nickname: '疾风', motto: '速度就是我的武器', goals: 18, assists: 10, matches: 43 },
  { id: 10, name: '老王', number: 11, position: 'RW', nickname: '精准先生', motto: '一脚定江山', goals: 15, assists: 8, matches: 40 },
  { id: 11, name: '大熊', number: 9, position: 'ST', nickname: '终结者', motto: '进球是我的工作', goals: 35, assists: 5, matches: 48 },
  { id: 12, name: '小黑', number: 14, position: 'CM', nickname: '永动机', motto: '跑不死', goals: 6, assists: 9, matches: 30 },
]

export const matches = [
  { id: 1, date: '2026-05-10', opponent: '天府联队', home: true, score: '4:2', result: 'win', competition: '成都业余联赛' },
  { id: 2, date: '2026-05-03', opponent: '锦城FC', home: false, score: '2:1', result: 'win', competition: '成都业余联赛' },
  { id: 3, date: '2026-04-26', opponent: '熊猫竞技', home: true, score: '1:3', result: 'lose', competition: '友谊赛' },
  { id: 4, date: '2026-04-19', opponent: '蜀都联', home: false, score: '3:3', result: 'draw', competition: '成都业余联赛' },
  { id: 5, date: '2026-04-12', opponent: '麻辣FC', home: true, score: '5:0', result: 'win', competition: '成都业余联赛' },
  { id: 6, date: '2026-04-05', opponent: '蓉城青年', home: false, score: '2:0', result: 'win', competition: '友谊赛' },
  { id: 7, date: '2026-03-29', opponent: '武侯FC', home: true, score: '1:2', result: 'lose', competition: '成都业余联赛' },
  { id: 8, date: '2026-03-22', opponent: '青羊竞技', home: false, score: '3:1', result: 'win', competition: '友谊赛' },
]

export const upcomingMatches = [
  { id: 1, date: '2026-05-17', time: '15:00', opponent: '金牛联队', home: true, venue: '成都足球公园', competition: '成都业余联赛' },
  { id: 2, date: '2026-05-24', time: '16:00', opponent: '高新FC', home: false, venue: '高新区体育中心', competition: '成都业余联赛' },
  { id: 3, date: '2026-05-31', time: '14:00', opponent: '双流竞技', home: true, venue: '成都足球公园', competition: '友谊赛' },
]

export const galleryItems = [
  { id: 1, type: 'photo', title: '2026赛季首战', description: '赛季揭幕战大胜天府联队', date: '2026-05-10' },
  { id: 2, type: 'photo', title: '训练日', description: '每周三固定训练，风雨无阻', date: '2026-05-08' },
  { id: 3, type: 'photo', title: '球队聚餐', description: '赛后火锅是传统', date: '2026-05-03' },
  { id: 4, type: 'photo', title: '客场出征', description: '远征锦城FC', date: '2026-05-03' },
  { id: 5, type: 'photo', title: '大熊帽子戏法', description: '对阵麻辣FC上演帽子戏法', date: '2026-04-12' },
  { id: 6, type: 'photo', title: '年度合照', description: '2025赛季全队合影', date: '2025-12-20' },
]

export const positionMap = {
  GK: '门将',
  CB: '中后卫',
  LB: '左后卫',
  RB: '右后卫',
  CDM: '后腰',
  CM: '中前卫',
  CAM: '前腰',
  LW: '左边锋',
  RW: '右边锋',
  ST: '前锋',
}

export const resultMap = {
  win: { text: '胜', color: 'text-primary' },
  lose: { text: '负', color: 'text-accent-red' },
  draw: { text: '平', color: 'text-accent-gold' },
}
