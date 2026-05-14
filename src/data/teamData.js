export const teamInfo = {
  name: 'TinmanFC',
  nameCn: '铁人足球俱乐部',
  city: '成都',
  cityEn: 'Chengdu',
  founded: '2023',
  slogan: '钢铁意志，绿茵永燃',
  sloganEn: 'Iron Will, Eternal Flame',
  description: '我们是一群来自成都的足球狂热者，以铁人般的意志在绿茵场上奔跑。不论胜负，只论热爱。',
  descriptionEn: 'We are a group of football enthusiasts from Chengdu, running on the pitch with iron will. Win or lose, it\'s all about passion.',
  playerCount: 22,
  matchCount: 48,
  winRate: '62%',
  goalsTotal: 127,
}

export const players = [
  { id: 1, name: '老铁', number: 1, position: 'GK', nickname: '叹息之墙', nicknameEn: 'The Wall', motto: '球门是我的领地', mottoEn: 'My goal, my territory', goals: 0, assists: 0, matches: 35 },
  { id: 2, name: '阿强', number: 4, position: 'CB', nickname: '铁闸', nicknameEn: 'Iron Gate', motto: '过我可以，先过我这关', mottoEn: 'Get past me first', goals: 2, assists: 3, matches: 40 },
  { id: 3, name: '小刘', number: 5, position: 'CB', nickname: '定海神针', nicknameEn: 'Anchor', motto: '稳住就是赢', mottoEn: 'Stay steady, stay winning', goals: 1, assists: 1, matches: 38 },
  { id: 4, name: '大伟', number: 3, position: 'LB', nickname: '边路飞翼', nicknameEn: 'Flying Wing', motto: '跑到对手怀疑人生', mottoEn: 'Run till they doubt life', goals: 3, assists: 12, matches: 42 },
  { id: 5, name: '阿杰', number: 2, position: 'RB', nickname: '右路快刀', nicknameEn: 'Right Blade', motto: '攻防一体', mottoEn: 'Attack and defense as one', goals: 2, assists: 8, matches: 36 },
  { id: 6, name: '小胖', number: 6, position: 'CDM', nickname: '中场绞肉机', nicknameEn: 'Midfield Bulldozer', motto: '球是我的', mottoEn: 'The ball is mine', goals: 4, assists: 7, matches: 44 },
  { id: 7, name: '阿明', number: 8, position: 'CM', nickname: '发动机', nicknameEn: 'The Engine', motto: '控制中场就控制比赛', mottoEn: 'Control the midfield, control the game', goals: 9, assists: 15, matches: 46 },
  { id: 8, name: '小林', number: 10, position: 'CAM', nickname: '魔术师', nicknameEn: 'The Magician', motto: '传球即艺术', mottoEn: 'Passing is art', goals: 12, assists: 22, matches: 45 },
  { id: 9, name: '飞哥', number: 7, position: 'LW', nickname: '疾风', nicknameEn: 'The Gale', motto: '速度就是我的武器', mottoEn: 'Speed is my weapon', goals: 18, assists: 10, matches: 43 },
  { id: 10, name: '老王', number: 11, position: 'RW', nickname: '精准先生', nicknameEn: 'Mr. Precision', motto: '一脚定江山', mottoEn: 'One strike decides it all', goals: 15, assists: 8, matches: 40 },
  { id: 11, name: '大熊', number: 9, position: 'ST', nickname: '终结者', nicknameEn: 'The Terminator', motto: '进球是我的工作', mottoEn: 'Scoring is my job', goals: 35, assists: 5, matches: 48 },
  { id: 12, name: '小黑', number: 14, position: 'CM', nickname: '永动机', nicknameEn: 'Perpetual Motion', motto: '跑不死', mottoEn: 'Never stop running', goals: 6, assists: 9, matches: 30 },
]

export const matches = [
  { id: 1, date: '2026-05-10', opponent: '天府联队', opponentEn: 'Tianfu United', home: true, score: '4:2', result: 'win', competition: '成都业余联赛', competitionEn: 'Chengdu Amateur League' },
  { id: 2, date: '2026-05-03', opponent: '锦城FC', opponentEn: 'Jincheng FC', home: false, score: '2:1', result: 'win', competition: '成都业余联赛', competitionEn: 'Chengdu Amateur League' },
  { id: 3, date: '2026-04-26', opponent: '熊猫竞技', opponentEn: 'Panda Athletic', home: true, score: '1:3', result: 'lose', competition: '友谊赛', competitionEn: 'Friendly' },
  { id: 4, date: '2026-04-19', opponent: '蜀都联', opponentEn: 'Shudu United', home: false, score: '3:3', result: 'draw', competition: '成都业余联赛', competitionEn: 'Chengdu Amateur League' },
  { id: 5, date: '2026-04-12', opponent: '麻辣FC', opponentEn: 'Mala FC', home: true, score: '5:0', result: 'win', competition: '成都业余联赛', competitionEn: 'Chengdu Amateur League' },
  { id: 6, date: '2026-04-05', opponent: '蓉城青年', opponentEn: 'Rongcheng Youth', home: false, score: '2:0', result: 'win', competition: '友谊赛', competitionEn: 'Friendly' },
  { id: 7, date: '2026-03-29', opponent: '武侯FC', opponentEn: 'Wuhou FC', home: true, score: '1:2', result: 'lose', competition: '成都业余联赛', competitionEn: 'Chengdu Amateur League' },
  { id: 8, date: '2026-03-22', opponent: '青羊竞技', opponentEn: 'Qingyang Athletic', home: false, score: '3:1', result: 'win', competition: '友谊赛', competitionEn: 'Friendly' },
]

export const upcomingMatches = [
  { id: 1, date: '2026-05-17', time: '15:00', opponent: '金牛联队', opponentEn: 'Jinniu United', home: true, venue: '成都足球公园', venueEn: 'Chengdu Football Park', competition: '成都业余联赛', competitionEn: 'Chengdu Amateur League' },
  { id: 2, date: '2026-05-24', time: '16:00', opponent: '高新FC', opponentEn: 'Gaoxin FC', home: false, venue: '高新区体育中心', venueEn: 'Gaoxin Sports Center', competition: '成都业余联赛', competitionEn: 'Chengdu Amateur League' },
  { id: 3, date: '2026-05-31', time: '14:00', opponent: '双流竞技', opponentEn: 'Shuangliu Athletic', home: true, venue: '成都足球公园', venueEn: 'Chengdu Football Park', competition: '友谊赛', competitionEn: 'Friendly' },
]

export const galleryItems = [
  { id: 1, type: 'photo', title: '2026赛季首战', titleEn: '2026 Season Opener', description: '赛季揭幕战大胜天府联队', descriptionEn: 'A dominant win in the season opener', date: '2026-05-10' },
  { id: 2, type: 'photo', title: '训练日', titleEn: 'Training Day', description: '每周三固定训练，风雨无阻', descriptionEn: 'Every Wednesday, rain or shine', date: '2026-05-08' },
  { id: 3, type: 'photo', title: '球队聚餐', titleEn: 'Team Dinner', description: '赛后火锅是传统', descriptionEn: 'Post-match hotpot is tradition', date: '2026-05-03' },
  { id: 4, type: 'photo', title: '客场出征', titleEn: 'Away Day', description: '远征锦城FC', descriptionEn: 'Away trip to Jincheng FC', date: '2026-05-03' },
  { id: 5, type: 'photo', title: '大熊帽子戏法', titleEn: "Xiong's Hat-trick", description: '对阵麻辣FC上演帽子戏法', descriptionEn: 'Hat-trick against Mala FC', date: '2026-04-12' },
  { id: 6, type: 'photo', title: '年度合照', titleEn: 'Team Photo 2025', description: '2025赛季全队合影', descriptionEn: 'Full squad photo, 2025 season', date: '2025-12-20' },
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
