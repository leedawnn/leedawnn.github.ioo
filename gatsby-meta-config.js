module.exports = {
  title: `leedawn.com`,
  description: `leedawn's world`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://leedawnn.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `leedawnn/leedawnn.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `이지혜`,
    bio: {
      role: `개발자`,
      description: ['매일 더 성장하는', '끝까지 해내는', '이로운 것을 나누고픈'],
      thumbnail: 'memoji.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/leedawnn`,
      linkedIn: `https://www.linkedin.com/in/ji-hey-lee-0175b9224/`,
      email: `dev.leedawn@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.02 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '공간 예약 사이트 개발',
        description:
          '공간을 찾고 있나요? 다양한 공간을 원하는 날짜, 시간에 미리 예약하세요 :) 공간 예약 사이트 OUR SPACE 입니다.',
        techStack: ['Javascript', 'Vue3', 'Vuex', 'Scss'],
        thumbnailUrl: 'assets/ourSpace.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/leedawnn/Our-Space',
          demo: 'https://ourzone.netlify.app/',
        },
      },
    ],
  },
};
