---
emoji: 🧐
title: Memoization
date: '2022-08-26 17:05:00'
author: leedawn
tags: Memoization
categories: react
---

### Memoization

부모/자식 컴포넌트를 만들어서 간단한 카운터를 만든다. 이 과정에서 어떻게 성능 최적화를 하는 것이 좋은지 알아보자.

`useState`를 이용하여 만들게 되면 아래와 같은 일이 발생한다.

1. state(counter)가 바뀌면 해당 컴포넌트가 리렌더링
2. 리렌더링 전의 변수가 초기화 됨(새로 만들어짐)
3. 함수도 초기화 됨(새로 만들어짐)
4. 자식도 리렌더링 됨

예를 들어, 부모 컴포넌트에 랜덤 값이 들어가는 변수가 있다고 해보자. 그럼 state가 변하면서 리렌더링이 일어날 때마다 랜덤 값도 초기화된다. 이렇게 불필요한 리렌더링이 일어나는 것을 막기 위해서 `**memo**`를 사용해보자.

### memo

```tsx
import { memo } from 'react';

function MemoizationChildPage() {
  console.log('자식이 렌더링 됩니다.');
  return (
    <>
      <div>=======================================</div>
      <h1>저는 자식 컴포넌트 입니다!</h1>
      <div>=======================================</div>
    </>
  );
}

export default memo(MemoizationChildPage);
```

자식 컴포넌트를 memo로 감싸주면 리렌더링을 막을 수 있다.

하지만 부모 컴포넌트에서 props를 넘겨주게 되면 자식 컴포넌트에 memo가 걸려있어도 리렌더링이 일어나게 된다.

### useMemo()

`useMemo`를 사용하면 의존성 배열에 넘겨준 값이 변경되었을 때만 메모이제이션된 값을 다시 계산한다.

**재계산하는 함수가 아주 간단하다면 성능상의 차이는 아주 미미하겠지만, 만약 재계산하는 로직이 복잡하다면 불필요하게 비싼 계산을 하는 것을 막을 수 있다.**(공식문서에서도 useMemo에 넘겨주는 콜백 함수의 이름이 computeExpensiveValue()라고 되어있다.)

즉, 비싼 계산이 아니라면 useMemo 사용을 권장하지 않는다.

### useCallback()

**메모이제이션된 함수를 반환한다라는 문장이 핵심이다.**

```tsx
import React, { useMemo } from 'react';

const [count, setCount] = useState(0);

// useCallback()을 잘못 사용하고 있는 예제(
const onClickCount = useCallback(() => {
  setCount(count + 1);
}, []);
```

위의 코드는 그냥 setCountState(countState + 1) 자체를 기억하고 있는 거라서, 평생 1이다.

따라서, 이렇게 prev를 받아서 증가시켜주는 것이 좋다.

```tsx
const onClickCount = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);
```
