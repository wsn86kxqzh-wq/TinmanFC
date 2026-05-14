export default {
  // Navbar
  nav: {
    home: 'Home',
    about: 'About',
    matches: 'Matches',
    roster: 'Roster',
    gallery: 'Gallery',
    join: 'Join',
  },

  // Footer
  footer: {
    navigation: 'Navigation',
    contact: 'Contact',
    tagline: 'Built with iron will',
  },

  // Home page
  home: {
    heroLocation: 'Chengdu · Since 2023',
    joinTeam: 'Join the Team',
    learnMore: 'Learn More',
    scroll: 'Scroll',
    stats: {
      players: 'Players',
      matches: 'Matches',
      winRate: 'Win Rate',
      goals: 'Goals',
    },
    recentResults: 'Recent Results',
    viewAll: 'View All',
    upcoming: 'Upcoming',
    topScorer: 'Top Scorer',
    topScorerStats: {
      goals: 'Goals',
      assists: 'Assists',
      appearances: 'Apps',
    },
    ctaTitle: 'JOIN THE SQUAD',
    ctaSubtitle: 'If you share our iron will and passion for football',
    ctaButton: 'Join Now',
  },

  // About page
  about: {
    heroTitle: 'The Iron Soul',
    stats: {
      founded: 'Founded',
      players: 'Players',
      matches: 'Matches',
      winRate: 'Win Rate',
    },
    valuesTitle: 'Our Spirit',
    timelineTitle: 'Our Journey',
    cityTitle: 'Chengdu',
    cityDesc: "In this city you'll never want to leave, football is a way of life. From the Jin River to Tianfu Avenue, from hotpot tables to the pitch — TinmanFC runs across every corner of Chengdu, writing the city's passion and resilience into every match.",
    cityCards: {
      trainingBase: 'Training Base',
      homeGround: 'Home Ground',
      regularTraining: 'Training',
      league: 'League',
    },
  },

  // Values
  values: {
    passion: { title: 'Passion', desc: 'Give everything in every match, leave no regrets' },
    iron: { title: 'Iron Will', desc: 'Tough playing style, steel-like defensive resolve' },
    brotherhood: { title: 'Brotherhood', desc: 'Comrades on the pitch, brothers off it, never giving up on each other' },
    love: { title: 'Love', desc: 'Not for fame or fortune, only for the purest love of football' },
  },

  // Timeline
  timeline: [
    { year: '2023', event: 'Club Founded', desc: 'A group of football-loving friends from Chengdu met on the pitch and decided to form their own team' },
    { year: '2023', event: 'First Official Match', desc: 'Won the first-ever match 3-1, and the Iron Spirit took root' },
    { year: '2024', event: 'Joined Chengdu Amateur League', desc: 'Entered the league system, began systematic training and matches' },
    { year: '2025', event: 'Best Season', desc: '35 matches played, 24 wins, 69% win rate, 275 goals scored' },
    { year: '2026', event: 'New Chapter', desc: '21-player squad ready, continuing the journey' },
  ],

  // Matches page
  matches: {
    heroTitle: 'Match Center',
    stats: {
      total: 'Total',
      wins: 'Wins',
      draws: 'Draws',
      losses: 'Losses',
      goals: 'Goals',
    },
    upcoming: 'Upcoming Fixtures',
    history: 'Match History',
    tableHeaders: {
      date: 'Date',
      time: 'Time',
      opponent: 'Opponent',
      venue: 'Venue',
      score: 'Score',
      result: 'Result',
    },
    home: 'Home',
    away: 'Away',
  },

  // Roster page
  roster: {
    heroTitle: 'The Squad',
    filters: {
      all: 'All',
      goalkeeper: 'GK',
      defender: 'DEF',
      midfielder: 'MID',
      forward: 'FWD',
    },
    stats: {
      goals: 'Goals',
      assists: 'Assists',
      appearances: 'Apps',
    },
  },

  // Gallery page
  gallery: {
    heroTitle: 'Gallery',
    photo: 'Photo',
    video: 'Video',
    featured: 'Featured',
  },

  // Join page
  join: {
    heroTitle: 'Join TinmanFC',
    heroDesc: 'Whether you\'re a veteran or a beginner, if you love football and are willing to put in the work, there\'s a place for you at TinmanFC.',
    reasons: [
      { title: 'Twice a Week', desc: 'Regular training sessions with professional warm-ups and tactical drills' },
      { title: 'Official League', desc: 'Compete in the Chengdu Amateur League, gain real match experience' },
      { title: 'Team Spirit', desc: 'Brotherhood culture — comrades on the pitch, friends off it' },
      { title: 'No Barrier', desc: 'No tryout requirements — passion is your pass' },
    ],
    formTitle: 'Sign Up',
    form: {
      name: 'Name',
      phone: 'Phone',
      position: 'Position',
      experience: 'Football Experience',
      message: 'Your Message',
      selectPosition: 'Select position',
      goalkeeper: 'Goalkeeper',
      defender: 'Defender',
      midfielder: 'Midfielder',
      forward: 'Forward',
      placeholders: {
        name: 'Your name',
        phone: 'Your phone number',
        experience: 'Tell us about your football experience...',
        message: 'Why do you want to join TinmanFC...',
      },
      submit: 'Submit Application',
    },
    success: {
      title: 'Submitted!',
      desc: "We'll get back to you soon. Welcome to TinmanFC!",
      retry: 'Submit Again',
    },
    contactTitle: 'Contact Us',
    contact: {
      phone: 'Phone',
      trainingBase: 'Training Base',
      email: 'Email',
    },
  },

  // Position map
  positionMap: {
    GK: 'Goalkeeper',
    DF: 'Defender',
    MF: 'Midfielder',
    FW: 'Forward',
  },

  // Result map
  resultMap: {
    win: 'W',
    lose: 'L',
    draw: 'D',
  },
}
