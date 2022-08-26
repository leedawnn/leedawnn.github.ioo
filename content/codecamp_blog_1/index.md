---
emoji: 🧐
title: async, await
date: '2022-08-26 15:30:00'
author: leedawn
tags: async await
categories: JS
---

async와 await라는 특별한 문법을 사용하면 promise를 좀 더 편하게 사용할 수 있다. async, await는 매우 편리하고, 사용법도 어렵지 않다.

### async

`async`는 function 앞에 위치한다.

```javascript
async function f() {
  return 1;
}
```

function 앞에 `async`를 붙이면 해당 함수는 항상 promise를 반환한다. promise가 아닌 값을 반환하더라도 이행 상태의 promise(resolved promise)로 감싸 이행된 promise가 반환되도록 한다.

아래 예시의 함수를 호출하면 `result`가 1인 이행 Promise가 반환된다.

```javascript
async function f() {
  return 1;
}

f().then(alert); // 1
```

`async`가 붙은 함수는 반드시 promise를 반환하고, promise가 아닌 것은 promise로 감싸 반환한다. 또한 `await`는 `async`함수 안에서만 동작한다.

`await`란 무엇인지 알아보자.

### await

`await` 문법은 아래와 같다.

```javascript
// await는 async 함수 안에서만 동작합니다.
let value = await promise;
```

자바스크립트는 `await`키워드를 만나면 promise가 처리될 때까지 기다린다(정말 뜻 그대로 기다림). 결과는 그 이후 반환된다.

1초 후 실행되는 promise를 예시로 사용하여 `await`가 어떻게 동작하는지 살펴보자.

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('완료!'), 1000);
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

f();
```

함수를 호출하고, 함수 본문이 실행되는 도중에 (\*)로 표시한 줄에서 실행이 잠시 '중단’되었다가 promise가 처리되면 실행이 재개된다. 이때 promise 객체의 result 값이 변수 result에 할당된다. 따라서 위 예시를 실행하면 1초 뒤에 '완료!'가 출력된다.

`await`는 말 그대로 promise가 처리될 때까지 함수 실행을 기다리게 만들며, promise가 처리되면 그 결과와 함께 실행이 재개되죠. promise가 처리되길 기다리는 동안엔 엔진이 다른 일(다른 스크립트를 실행, 이벤트 처리 등)을 할 수 있기 때문에, CPU 리소스가 낭비되지 않는다.

`await`는 `promise.then`보다 좀 더 세련되게 promise의 result 값을 얻을 수 있도록 해주는 문법이다. `promise.then`보다 가독성 좋고 쓰기도 쉽다.

### 유의할 점

일반함수엔 `await`를 사용할 수 없다! `async`함수가 아닌데 `await`를 사용하면 문법 에러가 발생한다.
