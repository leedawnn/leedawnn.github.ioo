---
emoji: ✨
title: Gatsby로 github blog 만들기
date: '2022-01-06 20:00:00'
author: leedawn
tags: FEATURED
categories: FEATURED
---

### 💅 예쁘면 장땡

처음 개발 블로그를 만들 때는 velog를 이용했다. 마크다운을 지원해서 글쓰는 것도 편하고, 무엇보다 사이트가 깔끔하고 예뻤다. 태그를 달아 카테고리 별로 보기 쉽게 정리할 수도 있었다. 그치만.. 잔디밭을 심지 못한다는 단점이 있어서 Jeykll이나 Hexo를 이용하여 github blog를 만들기도 했다. 하지만 테마가 마음에 들지 않아 글을 쓰고 싶은 마음이 들지 않았다. ~~핑계인가..ㅎ~~ 

그렇게 github 파도타기를 하며 예쁜 테마를 찾던 중, **zoomkoding-gatsby-blog** 템플릿이 눈에 들어왔다. 
예.뻤.다. ✨ 

### ✅ **Gatsby의 장점**

Jekyll은 **Ruby** 기반으로 만들어져 있고, Gatsby는 **React** 기반으로 만들어졌다. React를 공부하고 있고, 앞으로도 React를 현업에서 많이 쓸 예정이기 때문에 Gatsby를 사용하는 것이 블로그 세팅이 더 쉬울 것이라는 판단을 했다. 또한 개발자들이 서로 다른 콘텐츠, API 및 서비스를 하나의 웹 환경으로 통합하는 것을 매우 간단하게 만드는 React 기반 프레임워크와 혁신적인 데이터 계층을 사용하여 빠르고 안전하며 강력한 웹 사이트를 구축할 수 있도록 지원한다는 장점이 있다.

### 🚀 이제 만들어보자

GitHub Page나 Netlify 중 배포 환경을 골라보자. 난 깃헙 페이지가 편해서 이걸로 만들었음.
Netlify로 만들고 싶다면 ![🔧 **Netlify로 만들기**]([https://github.com/leedawnn/leedawnn.github.io/tree/master#-netlify로-만들기](https://github.com/leedawnn/leedawnn.github.io/tree/master#-netlify%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0))를 참고하세요.

1. **Repository 생성하기**
    ![](./import1.png)
    일반적으로 repo를 생성하는 것과는 다르게 **Import a repository**를 클릭하여, 줌코딩님의 테마를 import 해온다. 
    
    ![](./import2.png)  
    들어가면 위와 같은 페이지가 나오게 되는데, URL에는 **[https://github.com/zoomKoding/zoomkoding.com](https://github.com/zoomKoding/zoomkoding.com)**을 넣어주면 된다. 
    
    참고로 나는 줌코딩님의 블로그 세팅이 너무 예뻐서 그대로 가지고 오는 것이니 다른 템플릿을 원한다면 ![**Gatsby Starters**]([https://www.gatsbyjs.com/starters/](https://www.gatsbyjs.com/starters/))를 참고하면 된다. 
    
    ⚠️ **Repository명은 꼭 [GitHubID].github.io로 설정 할 것 !** 
    
    Begin Import 버튼을 누르면 어느 정도의 시간이 흐르고, 줌코딩님의 테마를 ****import한 Repository가 생성된다.
    
2. **Repository 가져오기**
    
    이제 레파지토리로 가서 내 컴퓨터에 git clone을 합시다. 
    
    ```bash
    cd [Repository를 저장할 폴더]
    git clone [복사한 주소]
    ```
    
3. **Blog 설치하기**
    
    블로그를 동작시킬 수 있도록 설치되어 있는 패키지들을 다운 받쟈.
    
    ```bash
    cd [Repository 주소]
    npm install
    ```
    
4. **Blog 배포 준비하기**
    
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
    
5. **Blog 배포하기**
    
    배포 준비 끝 !! 이제 다음 명령을 실행하면 github page에 배포할 수 있어요 ~
    
    ```bash
    npm run deploy
    ```
    
    조금 기다린 후에  `Published`라는 메시지를 받았다면 배포는 잘 끝났다는 소리 !
