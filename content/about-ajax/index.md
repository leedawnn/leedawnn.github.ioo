---
emoji: 🧐
title: AJAX란 ?!
date: '2022-04-05 17:30:00'
author: leedawn
tags: web
categories: web
---

자바스크립트로 api키 숨기기 시도 🏋️‍♀️ 그러나 실패,,,!  
.env나 웹팩이 아닌 순수 자바스크립트로 api키를 숨기기 위해 apikey.js에 api 객체를 만들고, .gitignore에 apikey.js를 추가하여 숨기는 방법을 사용했는데..... 찾아보니 ajax 방식으로 보내는 거라서 개발자 도구에서 정보가 줄줄 샌다고 한다.. 브라우저단에서는 방법이 없는듯하다 🥲

그렇다면, ajax 방식이란 무엇일까?

### ajax

**ajax**란 **Asynchronous JavaScript and XML**의 약어로, **서버와 비동기적으로 데이터를 주고받는 자바스크립트 기술**을 의미한다. 웹 페이지 전체를 다시 로딩하지 않고도 서버에 GET 요청을 날릴 수 있는 js 코드라고 이해하면 된다.

- 장점 : 새로고침이 없으니까 웹페이지 전환이 부드러워짐
- 한계 : Ajax를 이용하면 여러 장점을 가지지만, Ajax로도 다음과 같은 일들은 처리할 수 없다.
  1. Ajax는 클라이언트가 서버에 데이터를 요청하는 클라이언트 풀링 방식을 사용하므로, 서버 푸시 방식의 실시간 서비스는 만들 수 없다.
  2. Ajax로는 바이너리 데이터를 보내거나 받을 수 없음.
  3. Ajax 스크립트가 포함된 서버가 아닌 다른 서버로 Ajax 요청을 보낼 수는 없다.
  4. 클라이언트의 PC로 Ajax 요청을 보낼 수는 없다.

### 자바스크립트로 ajax 요청을 날리는 방법

- fetch

```jsx
fetch('https://leedawnn.github.io/price.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('400 아니면 500 에러남');
    }
    return response.json();
  })
  .then((결과) => {
    console.log(결과);
  })
  .catch(() => {
    console.log('에러남');
  });
```

- async/await

```jsx
async function 데이터가져오는함수() {
  const response = await fetch('https://leedawnn.github.io/price.json');
  if (!response.ok) {
    throw new Error('400 아니면 500 에러남');
  }
  const result = await response.json();
  console.log(result);
}
데이터가져오는함수().catch(() => {
  console.log('에러남');
});
```

- axios

```jsx
axios
  .get('https://leedawnn.github.io/price.json')
  .then((result) => {
    console.log(result.data); // 서버에서 받아온 데이터
  })
  .catch(() => {
    console.log('에러남');
  });
```
