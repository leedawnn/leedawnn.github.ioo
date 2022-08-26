---
emoji: 🧐
title: hosting
date: '2022-08-26 15:35:00'
author: leedawn
tags: hosting
categories: JS
---

### 호이스팅이란?

- 변수, 함수가 선언되기 전에 변수명, 함수명을 알고있는 것
- var, let, const 모두 호이스팅이 되지만, let과 const는 선언 전까지 변수에 접근이 불가합니다.

### 호이스팅이 되더라도 접근을 막는 방법

- let과 const는 변수가 되기 전까지 TDZ에 들어있다.
- var은 선언과 동시에 undefined 할당받아서, 에러 처리를 하기 어렵다.

### 함수 선언식을 사용하면 안되는 이유

```jsx
function aaaa() {
  console.log('중복 선언');
}
function aaaa() {
  console.log('중복 선언');
}
function aaaa() {
  console.log('중복 선언');
}
function aaaa() {
  console.log('중복 선언');
}
function aaaa() {
  console.log('중복 선언');
}

aaaa(); // 중복 선언
```

같은 함수를 중복 선언을 해도 에러가 뜨지 않고 잘 실행된다. 이것은 협업에 있어 정말 나쁘다.. 이런 일이 발생하지 않도록 함수 표현식을 사용하거나 화살표 함수를 사용하자!
