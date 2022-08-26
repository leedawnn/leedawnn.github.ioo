---
emoji: 🧐
title: state prev
date: '2022-08-26 19:05:00'
author: leedawn
tags: state
categories: react
---

### state

이전에 포스팅 한 state에 관한 내용
state란 리액트 컴포넌트에서 데이터를 담기 위한 상자와도 같다.

setState 함수는 state의 객체에 대한 업데이트를 실행하는 함수이다.

state라는 상자에 담긴 내용들은 state의 내용을 바꾸는 setState 함수가 끝나면
변동사항이 화면에 반영된다.

아래에서 언급할 내용은
위 링크의 포스팅에서 다룬 내용이지만 prev를 사용하는 이유와 직결되는 내용이기 때문에 한번더 언급하겠다.

setState는 불필요한 렌더링을 방지하면서 성능을 향상시키기 위해
즉시 함수를 수행하지 않도록 설계되었다.

이러한 작동방식은 비동기적으로 작동한다라고도 이야기 할 수 있다.

아래는 버튼을 클릭할 때마다 count의 갯수를 하나씩 증가시킨 후 화면에 출력하는 문이다.

```typescript
import { useState } from 'react';

export default function New() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>state를 사용하여 count증가</button>
    </div>
  );
}
```

여기서 버튼을 클릭할 때마다 count를 5개씩 증가시켜주기 위해
아래와 같은 문으로 수정하여 실행하면 어떻게 될까?

```typescript
import { useState } from 'react';

export default function New() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>state를 사용하여 count증가</button>
    </div>
  );
}
```

의도와는 달리 count는 여전히 1씩 증가한다.

그렇다면 의도한 대로 count가 5개씩 증가되도록 하려면 어떻게 해야할까?

### prev

이럴 때는 prev라는 임시저장공간을 사용해야 한다.

```typescript
import { useState } from 'react';

export default function New() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>state를 사용하여 count증가</button>
    </div>
  );
}
```

위의 문에서 button을 클릭하면 count는 5씩 증가하게 된다.
그렇다면 prev를 사용하면 어떤식으로 setState를 수행하는 것일까?

```typescript
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};
```

위 문의 실행 순서를 차근차근 살펴보자.

handleClick()함수의 첫 번째 코드 setCount( (prev) => prev + 1 )부터 분석해보자.

1. const [ count, setCount ] = useState(0)에서 선언 된 count의 값 0을 prev라는 임시저장 공간에 담는다.
2. 임시저장공간에 담긴 prev에 + 1을 한 후 다시 임시저장공간 prev에 담는다.
3. prev에 + 1한 후 다시 prev에 담는다.
4. 같은 방식으로 진행하다 최종적으로 setCount( (prev) => prev + 1 )에서 4가 담긴 prev에 + 1을 하여 setCount(5)를 실행한다.
