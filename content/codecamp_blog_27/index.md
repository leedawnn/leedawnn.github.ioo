---
emoji: 🧐
title: 콜백함수란?
date: '2022-08-26 20:47:00'
author: leedawn
tags: callback
categories: frontend
---

### Callback 콜백이란?

함수가 끝나고 난 뒤에 실행되는 함수.

자바스크립트에서 함수는 객체이다. 따라서 함수는 함수를 인자로 받고 다른 함수를 통해 반환될 수 있다. 인자로 대입되는 함수를 콜백함수라고 부른다.

#### 왜?

자바스크립트는 이벤트 중심의 언어이다. 즉, 자바스크립트는 이벤트의 값이 반환될 때까지 기다리지 않고 다음의 이벤트를 계속 실행한다.

따라서 비동기적인 함수를 실행할 경우, 대표적으로 API 요청 등에서 특별한 처리를 해주지 않으면 함수를 원하는대로 실행하기 어렵다.

```javascript
function first() {
  // Simulate a code delay
  setTimeout(function () {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}
first();
second();
//2
//1
```

콜백이란 이러한 상황처럼 다른 코드가 특정코드가 마무리되기 전에 실행되지 않도록, 즉 비동기처리를 위한 방법이다.
