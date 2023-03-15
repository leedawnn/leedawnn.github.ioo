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
      {
        date: '2022.07.06',
        activity: 'Git 마스터 하기',
        links: {
          post: '/about-git',
        },
      },
      {
        date: '2022.07.11',
        activity: 'Atomic Pattern이란?',
        links: {
          post: '/about-atomic-pattern',
        },
      },
      {
        date: '2022.07.14',
        activity: '자바스크립트 배열 메서드 마스터하기',
        links: {
          post: '/master-array-method',
        },
      },
      {
        date: '2022.10.04',
        activity: '코드캠프 수료 회고',
        links: {
          post: '/codecamp_grad',
        },
      },
      {
        date: '2023.01.22',
        activity: 'JSDoc 찍먹 🍯',
        links: {
          post: '/about-jsDoc',
        },
      },
      {
        date: '2023.01.23',
        activity: '프론트엔드 면접 대비 Part1. CS',
        links: {
          post: '/prepare-interview-01',
        },
      },
      {
        date: '2023.01.28',
        activity: '프론트엔드 면접 대비 Part1. CS',
        links: {
          post: '/prepare-interview-02',
        },
      },
      {
        date: '2023.03.02',
        activity: 'data 속성이란 무엇일까?',
        links: {
          post: '/what-about-data-',
        },
      },
      {
        date: '2023.03.09',
        activity: '자바스크립트는 싱글 스레드인데 어떻게 비동기가 가능할까요?',
        links: {
          post: '/so-why-is-js-asynchronous',
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
        title: '공간 예약 사이트',
        description: `공간을 찾고 있나요? 다양한 공간을 원하는 날짜, 시간에 미리 예약하세요 :)
          공간 예약 사이트 OUR SPACE 입니다.`,
        techStack: ['javascript', 'vue3', 'vuex', 'scss', 'webpack'],
        thumbnailUrl: 'assets/ourSpace.png',
        links: {
          github: 'https://github.com/leedawnn/Our-Space',
          demo: 'https://ourzone.netlify.app/',
        },
      },
      {
        title: '댕더(Dangder)',
        description: `Tinder와 같은 매칭 서비스 ‘댕더(Dangder)’를 개발한 프로젝트입니다. ‘댕더(Dangder)’는 반려견의 Play-Mate를 찾아 줌으로써 반려견의 ‘멍라벨'을 높이기 위한 서비스입니다. 플랫폼을 통해 서로 마음이 맞는 친구를 매칭시켜 채팅과 함께 만나 볼 수 있는 기능을 제공하는 애견인과 댕댕이를 위한 프로젝트입니다.`,
        techStack: ['Next.js', 'Typescript', 'Recoil', 'GraphQL', 'Apollo-Client', 'Emotion'],
        thumbnailUrl: 'assets/hoxydang.png',
        links: {
          github: 'https://github.com/leedawnn/dangder-client',
          demo: 'https://dangder.shop/',
        },
      },
      {
        title: '댕근마켓',
        description: `오직 반려동물만을 위한 커뮤니티 및 중고 거래 서비스 프로젝트입니다. 반려동물을 키우는 집사라면 누구나 편리하게 이용할 수 있는 웹 기반 서비스이며, 육아에 있어 필요한 상품을 거래하거나 정보 공유를 한 곳에서 할 수 있도록 편리함을 주기를 위해 만들었습니다.`,
        techStack: ['Next.js', 'Typescript', 'Recoil', 'GraphQL', 'Apollo-Client', 'Emotion'],
        thumbnailUrl: 'assets/danggn_logo.png',
        links: {
          github: 'https://github.com/leedawnn/danggn-market',
          demo: 'https://danggn.shop/',
        },
      },
    ],
  },
};
