export default {
  // Navbar
  nav: {
    home: '首页',
    about: '球队',
    matches: '赛事',
    roster: '阵容',
    gallery: '相册',
    join: '加入',
  },

  // Footer
  footer: {
    navigation: '导航',
    contact: '联系',
    tagline: '钢铁意志铸就',
  },

  // Home page
  home: {
    heroLocation: '成都 · 始于 2023',
    joinTeam: '加入球队',
    learnMore: '了解更多',
    scroll: '滚动',
    stats: {
      players: '球员',
      matches: '比赛',
      winRate: '胜率',
      goals: '进球',
    },
    recentResults: '近期战绩',
    viewAll: '查看全部',
    upcoming: '即将开赛',
    topScorer: '射手王',
    topScorerStats: {
      goals: '进球',
      assists: '助攻',
      appearances: '出场',
    },
    ctaTitle: '加入球队',
    ctaSubtitle: '如果你也有铁人般的意志和对足球的热爱',
    ctaButton: '立即加入',
  },

  // About page
  about: {
    heroTitle: '铁人之魂',
    stats: {
      founded: '成立年份',
      players: '注册球员',
      matches: '历史比赛',
      winRate: '胜率',
    },
    valuesTitle: '球队精神',
    timelineTitle: '成长之路',
    cityTitle: '成都',
    cityDesc: '在这座来了就不想走的城市，足球是另一种生活方式。从锦江边到天府大道，从火锅桌到绿茵场——铁人FC在成都的每一个角落奔跑，把这座城市的热情和坚韧写在每一场比赛里。',
    cityCards: {
      trainingBase: '训练基地',
      homeGround: '主场',
      regularTraining: '常规训练',
      league: '参赛联赛',
    },
  },

  // Values
  values: {
    passion: { title: '热血', desc: '每一场比赛都全力以赴，不留遗憾' },
    iron: { title: '铁骨', desc: '硬朗的球风，钢铁般的防守意志' },
    brotherhood: { title: '兄弟', desc: '场上战友，场下兄弟，永不放弃彼此' },
    love: { title: '热爱', desc: '不为名利，只为对足球最纯粹的热爱' },
  },

  // Timeline
  timeline: [
    { year: '2023', event: '球队成立', desc: '几个热爱足球的成都兄弟，在球场上相识，决定组建自己的球队' },
    { year: '2023', event: '首场正式比赛', desc: '以3:1拿下队史首胜，铁人精神从此扎根' },
    { year: '2024', event: '加入成都业余联赛', desc: '正式踏入联赛体系，开始系统化训练和比赛' },
    { year: '2025', event: '赛季最佳战绩', desc: '35场比赛24胜，胜率69%，狂轰275球' },
    { year: '2026', event: '新征程', desc: '21人阵容齐整，继续征战绿茵场' },
  ],

  // Matches page
  matches: {
    heroTitle: '赛事中心',
    stats: {
      total: '总场次',
      wins: '胜',
      draws: '平',
      losses: '负',
      goals: '进球',
    },
    upcoming: '即将开赛',
    history: '战绩记录',
    tableHeaders: {
      date: '日期',
      opponent: '对手',
      competition: '赛事',
      score: '比分',
      homeAway: '主/客',
      result: '结果',
    },
    home: '主场',
    away: '客场',
  },

  // Roster page
  roster: {
    heroTitle: '球员阵容',
    filters: {
      all: '全部',
      goalkeeper: '门将',
      defender: '后卫',
      midfielder: '中场',
      forward: '前锋',
    },
    stats: {
      goals: '进球',
      assists: '助攻',
      appearances: '出场',
    },
  },

  // Gallery page
  gallery: {
    heroTitle: '球队相册',
    photo: '照片',
    video: '视频',
    featured: '精选照片',
  },

  // Join page
  join: {
    heroTitle: '加入铁人',
    heroDesc: '无论你是老将还是新手，只要热爱足球、愿意付出，铁人FC就有你的位置。',
    reasons: [
      { title: '每周两练', desc: '固定训练时间，专业热身与战术训练' },
      { title: '正式联赛', desc: '参加成都业余联赛，积累实战经验' },
      { title: '团队氛围', desc: '兄弟般的球队文化，场上战友场下朋友' },
      { title: '零门槛', desc: '不设试训门槛，热爱就是通行证' },
    ],
    formTitle: '报名表',
    form: {
      name: '姓名',
      phone: '电话',
      position: '位置',
      experience: '足球经历',
      message: '想说的话',
      selectPosition: '选择位置',
      goalkeeper: '门将',
      defender: '后卫',
      midfielder: '中场',
      forward: '前锋',
      placeholders: {
        name: '你的名字',
        phone: '联系方式',
        experience: '简述你的足球经历...',
        message: '为什么想加入铁人FC...',
      },
      submit: '提交报名',
    },
    success: {
      title: '提交成功！',
      desc: '我们会尽快联系你，欢迎加入铁人FC！',
      retry: '再次填写',
    },
    contactTitle: '联系我们',
    contact: {
      phone: '电话',
      trainingBase: '训练基地',
      email: '邮箱',
    },
  },

  // Position map
  positionMap: {
    GK: '门将',
    DF: '后卫',
    MF: '中场',
    FW: '前锋',
  },

  // Result map
  resultMap: {
    win: '胜',
    lose: '负',
    draw: '平',
  },
}
