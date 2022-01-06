---
emoji: ✨
title: Gatsby로 github blog 만들기
date: '2022-01-06 20:00:00'
author: leedawn
tags: theme
categories: featured
---

### 💅 예쁘면 장땡

처음 개발 블로그를 만들 때는 velog를 이용했다. 마크다운을 지원해서 글쓰는 것도 편하고, 무엇보다 사이트가 깔끔하고 예뻤다. 태그를 달아 카테고리 별로 보기 쉽게 정리할 수도 있었다. 그치만.. 잔디밭을 심지 못한다는 단점이 있어서 Jeykll이나 Hexo를 이용하여 github blog를 만들기도 했다. 하지만 테마가 마음에 들지 않아 글을 쓰고 싶은 마음이 들지 않았다. ~~핑계인가..ㅎ~~

그렇게 github 파도타기를 하며 예쁜 테마를 찾던 중, **zoomkoding-gatsby-blog** 템플릿이 눈에 들어왔다.
예.뻤.다. ✨

### ✅ Gatsby의 장점

Jekyll은 **Ruby** 기반으로 만들어져 있고, Gatsby는 **React** 기반으로 만들어졌다.
현재 React를 공부하고 있고, 앞으로도 React를 현업에서 많이 쓸 예정이기 때문에 Gatsby를 사용하는 것이 블로그 세팅이 더 쉬울 것이라는 판단을 했다. 또한 개발자들이 서로 다른 콘텐츠, API 및 서비스를 하나의 웹 환경으로 통합하는 것을 매우 간단하게 만드는 React 기반 프레임워크와 혁신적인 데이터 계층을 사용하여 빠르고 안전하며 강력한 웹 사이트를 구축할 수 있도록 지원한다는 장점이 있다.

### 🚀 이제 만들어보자

GitHub Page나 Netlify 중 배포 환경을 골라보자. 난 깃헙 페이지가 편해서 이걸로 만들었음.
Netlify로 만들고 싶다면[🔧 Netlify로 만들기](https://github.com/leedawnn/leedawnn.github.io/tree/master#-netlify로-만들기)를 참고하세요.

1. Repository 생성하기
   ![](../../assets/import1.png)

   일반적으로 repo를 생성하는 것과는 다르게 **Import a repository**를 클릭하여, 줌코딩님의 테마를 import 해온다.

   ![](../../assets/import2.png)

   들어가면 위와 같은 페이지가 나오게 되는데, URL에는 [https://github.com/zoomKoding/zoomkoding.com](https://github.com/zoomKoding/zoomkoding.com)을 넣어주면 된다.

   참고로 나는 줌코딩님의 블로그 세팅이 너무 예뻐서 그대로 가지고 오는 것이니 다른 템플릿을 원한다면 [Gatsby Starters](https://www.gatsbyjs.com/starters/)를 참고하세요.

   ⚠️ **Repository명은 꼭 [GitHubID].github.io로 설정 할 것 !**

   Begin Import 버튼을 누르면 어느 정도의 시간이 흐르고, 줌코딩님의 테마를 import한 Repository가 생성된다.

2. Repository 가져오기

   이제 레파지토리로 가서 내 컴퓨터에 git clone을 합시다.

   ```bash
   cd [Repository를 저장할 폴더]
   git clone [복사한 주소]
   ```

3. Blog 설치하기

   블로그를 동작시킬 수 있도록 설치되어 있는 패키지들을 다운 받쟈.

   ```bash
   cd [Repository 주소]
   npm install
   ```

4. Blog 배포 준비하기

   이제 줌코딩 테마를 GitHub 페이지에 올리기 위해 gh-pages라는 패키지를 설치해야 한다.

   ```bash
   npm install gh-pages --save-dev
   ```

   그러고 나서, package.json에 다음을 추가합시다.

   ```bash
   {
     "scripts": {
       "deploy": "gatsby build && gh-pages -d public" // 추가
     }
   }
   ```

5. Blog 배포하기

   배포 준비 끝 !! 이제 다음 명령을 실행하면 github page에 배포할 수 있어요 ~

   ```bash
   npm run deploy
   ```

   조금 기다린 후에  `Published`라는 메시지를 받았다면 배포는 잘 끝났다는 소리 !

   > ⚠️ node 버전이 14 이상이어야 합니다. node -v를 통해 node 버전을 확인하신 후 낮은 버전이라면 업그레이드를 진행해주세요!

6. Repository Source Branch 변경하기
   마지막으로 GitHub 페이지가 작동하려면 GitHub의 Repository 설정에서 배포 할 Branch를 선택해야한다. 이를 위해서 Repository에 있는 Settings를 클릭하고 죄측 메뉴에서 Pages를 클릭하여 Github Pages 설정 페이지로 이동하자.

   ![](../../assets/import3.png)

   여기에서 Source에 있는 Branch를 master(main)에서 gh-pages로 변경한 후에 저장하자.

7. 배포된 페이지 확인하기

   이제 실제로 블로그가 잘 배포되었는지 확인해보자. [GitHubID].github.io에 접근하면 된다.

8. 수정하고 배포하기

   블로그 수정 할 때는 변동사항을 commit 후 아래 명령어를 실행하면 빠르게 배포된다. 짱짱 👍🏻

   ```bash
   npm run deploy
   ```

### ✍️ 블로그 정보 입력하기

줌코딩 테마를 통해 기본적인 블로그를 완성시켰다. 이제 블로그 정보를 입력하여 나만의 블로그를 커스텀해보자.

1. 블로그 기본 정보

   ```json
   title: '' // leedawn.com
   description: '' // leedawn's world
   language: 'ko', // 'ko', 'en' (영어 버전도 지원하고 있습니다.)
   siteUrl: '' // https://www.leedawnn.github.io
   ogImage: '/og-image.png', // 공유할 때 보이는 미리보기 이미지로 '/static' 하위에 넣고 싶은 이미지를 추가하시면 됩니다.
   ```

2. 댓글 설정

   블로그 글들에 댓글을 달 수 있길 원하신다면 utterances를 통해서 이를 설정할 수 있다.

   > utterances 사용방법은 [링크](https://utteranc.es/)를 참고해주세요!

   ```json
   comments: {
    utterances: {
        repo: '' // leedawnn/leedawnn.github.io
      },
   }
   ```

3. 글쓴이 정보

   글쓴이(author)에 입력한 정보는 홈페이지와 about 페이지 상단에 있는 글쓴이를 소개하는 섹션인 bio에서 사용된다. description에 자신을 설명하는 문구들을 넣으면 애니메이션으로 보여지게 되고, bio에 들어가는 이미지를 바꾸려면 assets에 원하시는 파일을 추가하고 파일의 이름을 thumbnail에 넣어주면 된다.(gif도 지원함!)

   ```json
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
   ```

### 👸 about page 만들기

about 페이지 또한 gatsby-meta-config.js를 통해 생성된다. about 하위에 있는 timestamps와 projects에 각각 정보를 입력하면 about 페이지가 자동 생성됨.

1. timestamps

   아래와 같이 각 timestamp 정보를 배열로 제공해주면 입력한 순서에 맞춰서 timestamps section에 보여지게 된다.

   ```json
   {
   date: '2021.01 ~',
   activity: '개인 블로그 개발 및 운영',
   links: {
      post: '/make-gatsby-starter-zoomkoding',
      github: 'https://github.com/leedawnn/leedawnn.github.io',
      demo: 'https://leedawnn.github.io/',
      },
   },
   ```

2. projects

   마찬가지로 각 project 정보를 배열로 입력하면 순서대로 projects section에 보여지게 된다.

   ```json
   {
   title: '개발 블로그 테마 개발',
   description:
      '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
   techStack: ['gatsby', 'react'],
   thumbnailUrl: 'blog.png',
   links: {
      post: '/gatsby-starter-zoomkoding-introduction',
      github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      demo: 'https://www.zoomkoding.com',
      }
   },
   ```

이렇게 내용을 문제 없이 입력하셨다면 나만의 블로그가 탄생한 것을 확인하실 수 있습니다.🎉

> 이 게시글은 [zoomkoding-gatsby-blog](https://github.com/zoomkoding/zoomkoding-gatsby-blog)을 보고 작성하였습니다. 더 자세한 정보를 얻고 싶다면 링크를 참조하세요.

```toc

```
