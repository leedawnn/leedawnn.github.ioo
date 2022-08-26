---
emoji: 🧐
title: let, const, var
date: '2022-08-26 16:55:00'
author: leedawn
tags: let const var
categories: javascript
---

### var를 사용했을 때 문제점

1.  **변수 중복 선언 허용**
2.  **함수 레벨 스코프**
    1. var로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다. 따라서 함수 외부에서 선언한 변수는 코드 블록 내에서 선언해도 전역 변수가 된다.
3.  **변수 호이스팅**

- var로 선언하면 변수 호이스팅에 의해 스코프의 선두로 끌어 올려진 것처럼 동작한다. 즉, 변수 선언문 이전에 참조할 수 있다. 단, 할당문 이전에 변수를 참조하면 언제나 undefined를 반환한다.

  ```jsx
  console.log(foo);

  foo = 123;
  console.log(foo);

  var foo;
  ```

### var, let, const의 차이

ES6에서 나온 let과 const 키워드는 위의 세 가지 문제점을 해결했다.

### 변수 중복 선언 불가

(1) let

let 키워드로는 변수 중복 선언이 불가하지만, 재할당은 가능하다.

```javascript
let name = 'kmj';
console.log(name); // output: kmj

let name = 'howdy'; // output: Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'howdy';
console.log(name); // output: howdy
```

(2) const

const가 let과 다른 점이 있다면, 반드시 선언과 초기화를 동시에 진행되어야 한다.

```javascript
const name; // output: Uncaught SyntaxError: Missing initializer in const declaration
const name = 'kmj';
```

const도 let과 마찬가지로 재선언이 불가하며, 더 나아가 재할당도 불가하다. 재할당의 경우, 원시 값은 불가능하지만, 객체는 가능하다. const 키워드는 재할당을 금지할 뿐, ‘불변’을 의미하지 않는다.

```javascript
// 원시값의 재할당
const name = 'kmj';
name = 'howdy'; // output: Uncaught TypeError: Assignment to constant variable.

// 객체의 재할당
const name = {
  eng: 'kmj',
};
name.eng = 'howdy';

console.log(name); // output: { eng: "howdy" }
```
