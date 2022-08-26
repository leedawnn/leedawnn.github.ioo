---
emoji: 🧐
title: useEffect, useRef
date: '2022-08-26 16:40:00'
author: leedawn
tags: useEffect useRef
categories: react
---

```tsx
const aaa =
  {
    qqq: function () {
      console.log(this);
    },
  } > aaa.qqq();
```

이런 부분을 화살표 함수를 사용해주면, bind() 필요없이 this 값은 렉시컬 this가 된다. (예측한대로)

### 컴포넌트 생명주기

1. 그리기(render)
2. 그리고 난 뒤(componentDidMount)
3. 그리고 난 뒤 변경됐을 때(componentDidUpdate)
4. 그리고 난 뒤 사라질 때(componentWillIUnmount)

### useEffect

위의 모든 내용은 `useEffect` 하나로 줄일 수 있다! useEffect는 모든 렌더링이 끝나고 실행된다.

```tsx
// componentDidMount
useEffect(() => {
  console.log('그려지고 나서 실행!');
}, []); // 의존성 배열(dependency array) 안에 있는 값이 바뀌면 실행되는 것을 useEffect라고 함.

// componentDidUpdate : 완전히 동일하지는 않음. 변경되면 실행한다는 점을 동일하나, 얘는 맨 처음에도 실행됨.
useEffect(() => {
  console.log('변경되고 나서 실행!');
}); // 얘는 의존성 배열이 없기 때문에 처음에도 실행됨.

// componentWillIUnmount
useEffect(() => {
  return () => {
    console.log('사라질 때 실행!');
  };
}, []);
```

하나로 합칠 수도 있음!

```tsx
useEffect(() => {
  console.log('그려지고 나서 실행!');

  return () => {
    console.log('사라질 때 실행!');
  };
}, [count]); // 이렇게 쓰면 count 변수가 변할 때마다 실행.
```

### useEffect의 잘못된 사용 예제

1. 추가 렌더링 발생(setState)

```tsx
useEffect(() => {
  setCount((prev) => prev + 1);
}, [count]);
```

1. 무한 루프

useEffect 내에서 setState를 사용하게 되면 불필요한 리렌더나 무한루프를 일으키게 되고 성능 면에서 비효율적이게 된다.

### useEffect 사용 시 주의사항

**useEffect 안에서 setState의 사용**

⇒ _정말 필요한 경우가 아니라면 지양해야한다._

컴포넌트가 마운트된 이후에 setState를 적용하게 되면,

1. **state가 변경되고,**
2. **변경된 state로 컴포넌트가 리렌더된다.**

즉, useEffect 내에서 setState를 사용하게 되면 불필요한 리렌더나 무한루프를 일으키게 되어 성능면에서 비효율적이게 된다.

### Ref

**사용하는 이유**

id는 유일해야한다. 하지만 컴포넌트 재사용을 한다면 중복될 가능성이 있다. ref를 사용하면, 이를 방지할 수 있다. ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문이다.

**언제 사용해야하나?**

DOM을 꼭 직접적으로 건드려야할 때 사용한다.

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

위와 같은 경우에는 어쩔 수 없이 DOM에 직접 접근을 해야한다.
리액트 공식문서를 보면, `선언적으로 해결될 수 있는 문제에서는 ref 사용을 지양해야한다.` 라고 명시 되어있다.

**useRef()**

hook을 사용해야하는 함수형 컴포넌트 방식에서는 useRef()를 사용해야 엘리먼트에 ref를 지정할 수 있다.

**Ref(referrence)의 특징**

1. 컴포넌트 리렌더링이 되더라도 레퍼런스의 값은 유지된다.
2. 레퍼런스 값의 업데이트는 컴포넌트 리렌더링을 트리거하지 않는다.

**Ref와 state의 차이**

1. state의 변화는 컴포넌트 리렌더링을 트리거하지만 ref는 아니다.
2. 상태 업데이트는 비동기적이며 렌더링된 후 업데이트된 값을 사용할 수 있지만, 참조는 동기적이며 업데이트된 값은 바로 사용할 수 있다.
