---
emoji: 🧐
title: React 상태관리
date: '2022-08-26 17:55:00'
author: leedawn
tags: contextAPI redux mobx swr
categories: frontend
---

React에서는 전역상태를 관리하는 라이브러리들이 상당히 존재한다. 상태관리 라이브러리 중 바이블(?)이라고 불리는 Redux가 존재한다.(현재는 Redux toolkit을 사용하길 권장함)

이 Redux를 포함하여 많은 상태관리 라이브러리가 존재하는데, 하나씩 알아보도록 하자.

### 전역상태에 대한 정의

상태관리 라이러리를 소개하기 전, 먼저 `전역상태가 무엇인가`에 대해 얘기해보자.

- 우리가 다루어야할 상태가 무엇이 있는지를 정의하고 이를 구분할 수 있어야 함.
- 어떤 상태가 들어가야하는지 기획을 생각하고 파악해볼 필요가 있음.
- 상태를 나눌 필요가 없다면? 굳이 상태관련 라이브러리를 사용해야 하는가?

### 글로벌 상태 관리란?

전역 상태관리를 사용하면 여러 구성 요소간에 데이터를 쉽게 전달/조작할 수 있습니다. (영구 전달 체인 끊기)

### 옵션비교

#### Context API

Contex API는 React 16.3버전에서 출시된 옵션이다. 컨텍스트 API는 구성 요소 트리에서 쉽게 전달할 수 있는 전역 데이터를 생성한다. 이것은 데이터를 전달하기 위해 props가 있는 구성 요소 트리를 통과해야 하는 
"props Drilling"의 대안으로 사용되고 있다.

- 장점

  - 사용의 간편함
  - 타사 라이브러리가 필요하지 않다.
  - 번들 크기를 늘려주지 않는다.
  - 기본적으로 React 기반으로 구워진다.

- 단점

  - 속도가 느리다. 컨텍스트의 값이 변경되면 실제로 사용하는지 여부에 관계없이 이 컨텍스트를 사용하는 모든 구성 요소가 다시 랜더링된다. 따라서 빈도가 높은 업데이트 또는 컨텍스트를 통해 전체 응용 프로그램 상태를 공유하는 것은 과도한 렌더링 수명 주기를 유발하며 매유 비효율적으로 로케일, 테마 변경, 사용자 인증 등과 같은 빈도가 낮은 업데이트에만 적합하다
  - 렌더 성능상의 이슈가 있다
  - Context를 사용하면 컴포넌트를 재사용하기가 어려워진다.

#### Redux

Redux는 React 앱의 상태를 중앙 집중식으로 저장하고 관리하는 데 사용되는 상태 관리 라이브러리이다. Redux는 앱의 모든 상태를 하나의 전역화된 상태 객체로 추상화한다.

- Redux의 세가지 원칙

  - 전체 상태 값이 하나의 자바스크립트 객체로 표현된다.
  - 상태 값은 읽기 전용의 불변 객체로 관리한다.
  - 오직 순수함수에 의해서만 상태값을 변경할 수 있다.

- 장점

  - 상태 개체의 일부가 업데이트되면 해당 상태를 사용하는 구성 요소만 다시 렌더링 된다.
  - Redux는 자주 업데이트되는 앱이 있을때 사용하면 더욱 효율적이다.
  - 저장소가 업데이트되면 변경되지 않고 업데이트된다. 이전 저장소는 새 상태 값으로 복사된다.이를 통해서 이전 업데이트 및 업데이트 기록을 따라 이동하는 시간과 같은 항목을 추적해 디버깅에 도움을 줄 수 있다. 이렇게 한다면 Redux를 더욱 쉽게 테스트 + 유지 보수 관리 및 확장을 할 수 있다.
  - Redux기반으로한 디버깅 도구: Redux DevTools
  - 상태 관리 라이브러리에서 Redux는 가장 큰 커뮤니티 지원을 제공한다.

- 단점

  - 많은 상용구와 복잡한 구조를 가진다.
  - 설치해야할 타사 라이브러리 존재하고 그만큼 번들 크기가 증가한다
  - 불변 저장소의 단점으로 저장소가 거대한 json 파일로 빠르게 변할 수 있다는 점
    작성해야할 코드가 상대적으로 많아진다.

#### MobX

MobX는 상태 관리를 간단하게 만들기 위한 기능적 반응 프로그래밍(예: @observable)을
적용하는 상태관리 라이브러리이다.

- 장점

  - Mobx는 @observable을 사용하여 구독을 통해 변경 사항을 자동으로 추적한다.
  - 이것은 Redux 개발자가 리듀서에서 데이터를 복제하고 변경 불가능하게 업데이트하는 오버헤드를 제거한다.
  - Redux에 비해서 상용구가 적다. 그만큼 배우기 쉬움
  - MobX는 여러 저장소를 지원하지만 Redux는 단일 저장소를 허용한다. 이를 통해서 UI상태와 도메인 상태(서버 API 데이터)에 대한 별도의 저장소를 가질 수 있다. UI 상태가 별도로 유지되기 떄문에 도메인 상태를 서버 데이터와 일치하게 유지하고 서버에 연결하는 것을 간단하게 만들 수 있다.

- 단점
  - 업데이트 중에 MobX 상태를 덮어쓴다. 구현하기에는 쉽지만 저장소가 훨씬 덜 예측가능하기 때문에 테스트 및 유지 관리가 어려울 수 있다.

### SWR

SWR은 Next.js에서 개발한 zeit 그룹에서 사용하는 라이브러리입니다. 
SWR은 맨처음 cache(캐시)로 부터 받아온 데이터 즉, 오래된 정보를 먼저 리턴 해주고 그 다음 fetch를 한 다음 마지막으로 업데이트된 데이터를 다시 리턴해줍니다. 이러한 로직을 통해서 UX의 향상을 만들어 낼 수 있습니다.

```javascript
export default function Home() {
  const { data, error } = useSWR('/api/home', fetcher);

  if (error) {
    return `<div>ERROR...</div>`;
  }

  if (!data) {
    return `<div>isLoading....</div>`;
  }

  return `<div>{data.name}</div>`;
}
```

- 장점

- 데이터가 캐싱된다.
- SWR은 자동으로 재검증을 해준다.
- Revalidate on Focuspage에 re-focus하던가 tab을 변경했을 때, SWR은 자동으로 데이터를 재검증한다. 이로써 최신 상태로 데이터를 즉시 동기화하는 데 유용오래된 모바일 탭 또는 절전 모드가 된 노트북과 같은 환경에서 데이터를 새로 고치는 데 유용
  Revalidate on IntervalSWR은 설정한 Interval 이후 데이터를 자동으로 다시 가져 오는 옵션을 제공
- Revalidate on Reconnect데이터가 항상 최신 상태인지 확인하기 위해 SWR은 - 네트워크가 복구 될때 자동으로 재검증 사용자가 다시 온라인 상태가 될때 유효성을 다시 확인할 수 있도록 한다.

SWR을 이용하면 의존데이터를 쉽게 가져올 수 있다.

```
function MyProjects() {
const { data: user } = useSWR(`api/user`)
const { data: projects } = useSWR(() => 'api/projects?uid=' + user.id)

if (!projects) return "loading..."
return 'You have ' + projects.length + 'projects'
}
```