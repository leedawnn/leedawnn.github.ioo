---
emoji: 🧐
title: CSR, SSR이 뭐예요?
date: '2022-01-09 00:40:00'
author: leedawn
tags: CSR SSR frontend
categories: web
---

#### 들어가기에 앞서..

파이널 프로젝트를 하면서, 싱크업 미팅 때 홈페이지 인덱스 쪽을 SSR로 개발해달라는 기업 측 요구사항이 있어서 공부할 겸 정리를 해보려고 합니다 😃

---

### CSR란 무엇인가?

![](../../assets/csr.png)

CSR란 **Client Side Rendering**의 약자로, 클라이언트가 렌더링을 하는 방식을 말합니다.

우리가 웹사이트에 접속하게 되면, 빈 HTML 파일을 먼저 다운받게 됩니다. 그래서 이 HTML 파일 안에 있는 DOM 요소나 스타일들이 보이게 되죠.
이 다음 단계부터는 리액트를 예시로 들겠습니다. 리액트는 자바스크립트로 이루어진 커다란 웹 애플리케이션입니다. 그렇기 때문에 자바스크립트 전체가 다운이 완료되어야지 리액트가 실행됩니다. 이후 한마디로 전체 자바스크립트 파일이 다운되어서 실행되기 전까지 우리는 리액트 앱 화면을 볼 수 없다는 말이죠. 🥲

리액트가 실행되면 리액트 컴포넌트들이 화면에 그려지게 되고 그제서야 화면을 볼 수 있게 되고, 유저가 인터랙션을 할 수 있게 됩니다. 이후 필요한 내용들을 요청하면 서버에서는 필요한 데이터를 JSON으로 보내주고, 클라이언트가 알아서 재구성합니다.

### SSR란 무엇인가?

![](../../assets/ssr.png)

SSR이란 **Server Side Rendering**의 약자로, 서버에서 사용자에게 보여줄 페이지를 모두 구성하여 사용자에게 페이지를 보여주는 방식입니다.

클라이언트가 요청을 하면 서버에서는 필요한 것들을 이용해 HTML 파일을 만들고, HTML 파일과 동적으로 제어할 수 있는 스크립트를 클라이언트에 보냅니다.

### ✍️ 요약

#### CSR

- 장점 😃

1. 필요한 부분만 요청해서 받아오기 때문에 SSR보다 상대적으로 빠릅니다.
2. 요청시에 필요한 부분만 데이터를 받아오기 때문에 서버에 부담이 적습니다.

- 단점 🥲

1. 처음에 모든 파일을 받아와야하기 때문에 SSR보다 초기 속도가 느립니다.
2. SEO에 취약합니다.

#### SSR

- 장점 😃

1. CSR을 사용했을 때보다 페이지 로딩이 빠르기 때문에 사용자가 빠르게 화면을 볼 수 있습니다.
2. SEO에 효율적입니다.
3. 정적인 사이트에 사용하기 좋습니다.

- 단점 🥲

1. 페이지를 요청할때마다 필요한 부분만 바꿔서 보여주는 것이 아닌 새로운 페이지를 보여주기 때문에 화면이 깜빡이는 현상이 있습니다.
2. 서버에 계속 요청해야하기 때문에 서버 부하가 커집니다.
3. 동적으로 데이터를 처리하는 파일을 받아오는 것이 느리면, 사용자가 아무리 클릭을 해도 반응을 하지 않는 경우가 생기기도 합니다.

> 사진 출처 : https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8 인용 : https://d2.naver.com/helloworld/7804182

```toc

```
