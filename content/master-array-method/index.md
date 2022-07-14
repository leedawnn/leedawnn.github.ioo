---
emoji: 🌌
title: '자바스크립트 배열 메서드 마스터하기'
date: '2022-07-14 20:45:00'
author: leedawn
tags: JS array
categories: JS
---

데이터를 받아와 화면에 뿌려줄 때 자주 쓰이는 배열 메서드! 쓸 때마다 매번 헷갈려서 구글링을 한다..🥲 게다가 배열 메서드마다 성능이 다 다르기 때문에, 용도에 따라서 어떤 것이 더 편하기도 하다. 확실하게 개념도 파악할 겸 블로그에 정리해놓고 필요할 때마다 보려고한다!

### for

```javascript
for (let i = 0; i < 10; i++) {
  cosnole.log(i);
}
```

- 가장 빠르고 단순하다.
- 모든 자료형에서 사용할 수 있다.
- continue / break 사용 가능

### forEach

```javascript
const arr = [1, 2, 3, 4];

arr.forEach((el) => console.log(el)); // 1 2 3 4
```

forEach는 각 배열 요소에 대해 한 번씩 callback 함수를 실행한다. map과 reduce와는 달리 undefined를 반환하기 때문에 메서드 체인의 중간에 사용할 수 없다.

위에서 본 for문은 실무에서 잘 쓰이지 않는다.(계산이 많이 필요한 서비스라면 얘기가 달라진다) 가독성이 별로 좋지 않기 때문이다.

forEach는 for문보다 가독성이 좋고, 복잡한 객체를 처리하는데 있어서 유리하다. 하지만, forEach문은 구문 밖으로 return 값을 받지 못한다는 단점이 있다.

```javascript
const arr = [1, 2, 3, 4, 5];
const newArr = arr.forEach((e, i) => e); // undefined
```

- for보다는 속도가 느리다.
- Array 객체에서 사용이 가능하다.
- 일반 for문보다 가독성이 좋고, 객체형을 다루기 쉽다.
- 하지만, for문과 다르게 예외를 던지지 않고는 중간에 멈출 수 없다. 중간에 멈춰야한다면 forEach는 적절한 방법이 아닐지도 모른다.
- return 값을 받지 못한다.

### map

```javascript
const array = [1, 4, 9, 16];
const map = array.map((x) => x * 2);

console.log(map); // [2, 8, 18, 32]

// idx를 이용해서 배열을 만들 수도 있다.
Array(9).fill(0).map((el, idx) => {
  return idx + 1; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
})
```

map은 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

- for문을 쓰면 메서드 체이닝을 할 수 없는데, map 같은 메서드를 쓰면 체이닝을 할 수 있어 보다 적은 코드로 구현할 수 있다.
- index값을 가진다.
- 기존 배열은 바뀌지 않으며, 새로운 배열이 생성된다.

### filter

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = word.filter((word) => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]
```

filter의 가장 큰 특징은 boolean 형태의 값을 갖는다. return값이 true일 경우, 그 요소를 반환하고 false일 경우 반환하지 않는다.

### reduce

```javascript
const array = [1, 2, 3, 4];
const sum = array.reduce((acc, cur) => acc + cur);

console.log(sum); // 10
```

reduce는 콜백함수나 initialValue를 전달한다. reduce는 4개의 인자를 가진다. reduce의 반환 값은 누산기에 할당되고, 순회를 하면서 하나의 값이 된다. 즉, reduce는 원하는 초기값에서 모든 배열을 돌면서 값을 누적할 때 사용한다.

1. 누산기(acc)
2. 현재 값(cur)
3. 현재 인덱스(idx)
4. 원본 배열(src)

```toc

```
