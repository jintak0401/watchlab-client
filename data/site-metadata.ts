const siteMetadata = {
  images: {
    studyBg: '/static/images/study/background.webp',
    glossaryBg: '/static/images/glossary/background.webp',
    ghostFace: '/static/images/glossary/ghost-face-origin.png',
    profilesBg: '/static/images/profiles/background.jpg',
    loupes: '/static/images/glossary/loupes.webp',
    logo: '/static/images/common/logo.webp',
    light: '/static/images/common/light.webp',
    dark: '/static/images/common/dark.webp',
    clock: {
      plate: '/static/images/common/clock/plate.png',
      hourHand: '/static/images/common/clock/hour.png',
      minuteHand: '/static/images/common/clock/minute.png',
      secondHand: '/static/images/common/clock/second.png',
    },
    study: [
      '/static/images/study/10-1.png',
      '/static/images/study/10-2.png',
      '/static/images/study/10-3.png',
      '/static/images/study/10-4.png',
      '/static/images/study/10-5.png',
      '/static/images/study/10-6.png',
    ],
    manuals: [
      '/static/images/manual/11-1.png',
      '/static/images/manual/11-2.png',
      '/static/images/manual/11-3.png',
      '/static/images/manual/11-4.png',
    ],
  },
  study: {
    links: [
      'components',
      'taxonomy',
      'performance',
      'functions',
      'history',
      'art',
    ],
  },
  manual: {
    links: ['beginner', 'buyer', 'user', 'maintenance'],
  },
  theme: 'light',
  revalidate: 10,
};

export default siteMetadata;
