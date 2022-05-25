module.exports = {
  title: `leedawn.com`,
  description: `leedawn's tech blog`,
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
        date: '2022.01.06',
        activity: 'Gatsby로 github blog 만들기',
        links: {
          post: '/make-gatsby-starter-zoomkoding',
        },
      },
      {
        date: '2022.01.09',
        activity: 'CSR, SSR이 뭐예요?',
        links: {
          post: '/whta-is-CRS-SSR',
        },
      },
      {
        date: '2022.03.16',
        activity: 'innerText vs textContent',
        links: {
          post: '/about-innerText-textContent',
        },
      },
      {
        date: '2022.03.24',
        activity: 'BEM 방법론',
        links: {
          post: '/what-is-BEM',
        },
      },
      {
        date: '2022.04.05',
        activity: 'AJAX란 ?!',
        links: {
          post: '/about-ajax',
        },
      },
      {
        date: '2022.04.06',
        activity: '[우테코X원티드] 오늘의 개발자 : 프론트엔드1',
        links: {
          post: '/lecture-growth',
        },
      },
      {
        date: '2022.04.15',
        activity: '웹개발에서 함수형 프로그래밍이 대세다?',
        links: {
          post: '/functional-programming',
        },
      },
      {
        date: '2022.04.29',
        activity: 'Create-React-App에서 eject를 하면 안되는 이유',
        links: {
          post: '/you-shouldnt-do-eject',
        },
      },
      {
        date: '2022.05.01',
        activity: '모던 자바스크립트 Deep Dive 스터디 회고',
        links: {
          post: '/js-deep-dive-study',
        },
      },
      {
        date: '2022.05.10',
        activity: 'eslint, stylelint 설정하기(with VSCODE)',
        links: {
          post: '/eslint-setting',
        },
      },
      {
        date: '2022.05.11',
        activity: '이미지 최적화',
        links: {
          post: '/image-optimization',
        },
      },
      {
        date: '2022.05.15',
        activity: 'React의 특징',
        links: {
          post: '/react-characteristic',
        },
      },
      {
        date: '2022.05.16',
        activity: 'REST API보다 graphQL을 쓰고 싶은 이유',
        links: {
          post: '/what-about-graphql/',
        },
      },
      {
        date: '2022.05.25',
        activity: '빠르게 성장하고 싶은 주니어 개발자를 위한 로드맵',
        links: {
          post: '/lecture-junior-loadmap',
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
        description: `공간을 찾고 있나요? 다양한 공간을 원하는 날짜, 시간에 미리 예약하세요 :)
          공간 예약 사이트 OUR SPACE 입니다.`,
        techStack: ['javascript', 'vue3', 'vuex', 'scss', 'webpack'],
        thumbnailUrl: 'assets/ourSpace.png',
        links: {
          github: 'https://github.com/leedawnn/Our-Space',
          demo: 'https://ourzone.netlify.app/',
        },
      },
    ],
  },
};
