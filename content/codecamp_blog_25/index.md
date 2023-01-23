---
emoji: 🧐
title: 재귀함수 찍먹하기
date: '2022-08-26 20:17:00'
author: leedawn
tags: recursive
categories: frontend
---

재귀함수란 함수의 호출결과로 함수를 리턴하는 함수를 말한다.

알고리즘뿐만 아니라 여러가지로 많이 쓰이는 기법이다.

간단한 예를 들어보자.

```javascript
let sum = 0;

for(let i = 1; i < 11; i++){
sum += i
}
console.log(sum) // 55
위의 코드는 1부터 10까지의 합을 구하는 매우 간단한 for문 이다.

이를 재귀함수로 표현하면

function f(n) {
if (n <= 1) {
return 1 // 종료 조건
}
return n + f(n-1) // 재귀함수
}
```

보통 코드는 위에서 아래로 읽히지만(본인도 무조건 위에서 아래로 읽힌다고 생각하고 있었어서 재귀함수가 돌아가는 순서가 매우 헷갈렸었다.)

함수 안에서 함수를 선언해주기 때문에 선언은 단순히 선언으로만 끝나고, 마지막 리턴문(겸 재귀함수의 호출문) 에서 함수가 호출되 다시 처음으로 돌아가는 구조를 갖고있다.

재귀함수를 사용하는 대표적인 예로 피보나치수열이 있는데, 피보나치수열이란 1 번째항은 1, 2번째항은1, 3번째 항부터는 전전항과 전항을 더한 숫자로 구성되는 수열이다. 코드로는 아래와 같다.

```javascript
function solution(n) {
  // 피보나치 수열을 저장하는 배열
  const answer = [0, 1];

  for (let i = 2; i <= 100000; i++) {
    answer[i] = answer[i - 1] + answer[i - 2];
  }

  return answer[n];
}
```

하지만 재귀함수는 메모리를 많이 차지하고 성능이 반복문에 비해 느리다는 단점이 있다.(계속해서 함수를 호출하므로 스택의 메모리가 커진다.)

그러므로 사용해야 할 시점을 명확히 알고 사용하도록 하자.