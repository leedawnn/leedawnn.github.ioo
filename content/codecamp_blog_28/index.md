---
emoji: 🧐
title: 구조분해할당과 친해지기시도
date: '2022-08-26 21:07:00'
author: leedawn
tags: Destructuring
categories: frontend
---

### 구조 분해 할당

구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식이다.

```javascript
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
```

객체 및 배열 리터럴 표현식을 사용하면 즉석에서 쉽게 데이터 뭉치를 만들 수 있다.

```javascript
var x = [1, 2, 3, 4, 5];
```

구조 분해 할당의 구문은 위와 비슷하지만, 대신 할당문의 좌변에서 사용하여, 원래 변수에서 어떤 값을 분해해 할당할지 정의한다.

```javascript
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

구조 분해 할당은 Perl이나 Python 등 다른 언어가 가지고 있는 기능이다.
