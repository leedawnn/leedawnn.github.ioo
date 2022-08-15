---
emoji: 🏕
title: '코드캠프 2달차 회고'
date: '2022-08-15 18:30:00'
author: leedawn
tags: bootcamp
categories: 회고
---

### 어느덧 코드캠프 2달 차,,,

요새는 하루가 정말 짧다... 알고리즘은 하루에 한 문제씩 꼭 풀려고 하는 편이다. 하지만 최근 2주동안은 개인 포트폴리오를 만드느라 정신이 없었다 😵‍💫

수업도 2달차가 되니까 중요한 내용들이 너무 많이 나와서 머릿 속에 넣기 바빴다.. 평소에 관심이 많던 Recoil도 배우고, accessToken과 cookie에 refreshToken을 넣어 로그인을 구현하는 법도 익혔다. 또 React와 가장 다른 점인 Next.js의 hydration이나 Callback, Promise, await/async 등 자바스크립트의 핵심 개념에 대해서도 배웠다.

개인적으로 가장 어려웠던 건.. 권한 분기부분이었는데 비회원 장바구니 구현을 하는 것이 생각처럼 작동하지 않아서 정말 새벽까지 붙잡고 있었다 🤯 왜냐면 굳이 recoil을 쓰고 싶다고 낑낑거렸다,, 일반 회원이 쓰는 장바구니는 recoil을 쓰는 것도 괜찮은 방법이나, 비회원 장바구니 같은 경우는 민감한 정보도 아니고 로컬 스토리지쓰면 됐는데 🫥... 하고 싶어서 안되면 적당히 넘어가는 법은 아직 배우지 못한 것 같다..ㅠ 매번 오기로 붙잡고 있다가 체력 관리에 실패한다..

### TIL

수업마다 TIL을 작성하는데, 요번 달 내용들은 정말 너무 어려워서 정리조차 쉽지 않았다. 알고 있는 내용이라면 누군가에게 설명해줄 수 있어야 제대로 아는 것이라 할 수 있는데,, 복습과 과제만 겨우하는 수준이라 수박 겉핥기를 하는 느낌이 들어 답답하다 😢

#### TIL 미리보기


##### 지도 연동

33.514421, 126.971302

##### **지도 가져오기**

[Kakao 지도 API](https://apis.map.kakao.com/web/guide/)

위의 가이드라인은 Vanilla JS와 HTML 기준으로 만들어진 코드다. React, 특히 Next.js에서는 HTML에 접근할 수 있는 방법이 한정적이기 때문에 가이드라인만으로는 구현할 수 없다.

가이드라인에서 사용하고 있는 `document` 객체는 서버사이드 렌더링을 지원하는 next.js에서는 화면을 렌더하기 전까지 `undefined`를 가진다. 따라서 별도의 세팅이 필요하다 🥸

1. **Head 설정**

   ```tsx
   import Head from 'next/head';

   export default function KaKaoMapPage() {
     return (
       <>
         <Head>
           <script
             type="text/javascript"
             src="//dapi.kakao.com/v2/maps/sdk.js?appkey='JavaScript 앱 키 입력'"
           ></script>
         </Head>
       </>
     );
   }
   ```


Head 컴포넌트는 Nest.js에서 기본적으로 제공하는 기능이다. **HTML에서 Head 태그 안으로 다른 기능들을 호출해서 사용**할 수 있는 것처럼 Head 컴포넌트를 이용해 동일한 기능을 사용할 수 있다.

2. **카카오맵 그리기**

   가이드라인이 시키는대로 `지도를 담을 영역`을 만들고, `지도를 띄우는 코드`를 작성한다.

   ```tsx
   import Head from 'next/head';

   export default function KaKaoMapPage() {
     const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
     const options = {
       //지도를 생성할 때 필요한 기본 옵션
       center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
       level: 3, //지도의 레벨(확대, 축소 정도)
     };

     map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
     return (
       <>
         <Head>
           <script
             type="text/javascript"
             src="//dapi.kakao.com/v2/maps/sdk.js?appkey='JavaScript 앱 키 입력'"
           ></script>
         </Head>
         <div id="map" style="width:500px;height:400px;"></div> // 지도를 담을 영역
       </>
     );
   }
   ```

   하지만, 이렇게 코드를 작성하면 *document가 정의되지 않았다*는 에러가 발생한다.

   이런 에러가 뜨는 이유는 **서버사이드 렌더링**의 특징 때문인데, 프리렌더링을 할 때는 서버에 `document` 객체가 없기 때문이다. 그렇다면 `useEffect`를 사용하여 document가 생성된 시점 이후로 렌더링되게 해보자.

   ```tsx
   import Head from 'next/head';

   export default function KaKaoMapPage() {
     useEffect(() => {
       const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
       const options = {
         // 지도를 생성할 때 필요한 기본 옵션
         center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
         level: 3, // 지도의 레벨(확대, 축소 정도)
       };

       map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
       return (
         <>
           <Head>
             <script
               type="text/javascript"
               src="//dapi.kakao.com/v2/maps/sdk.js?appkey='JavaScript 앱 키 입력'"
             ></script>
           </Head>
           <div id="map" style="width:500px;height:400px;"></div> // 지도를 담을 영역
         </>
       );
     }, []);
   }
   ```

   또한, 타입스크립트를 사용하면 kakao 객체를 인식하지 못하기 때문에 타입을 지정해줘야한다.

   ```tsx
   declare const window: typeof globalThis & {
     kakao: any;
   };
   ```

##### **지도로 이동하는 버튼 만들기**

**useRouter**

```tsx
import { useRouter } from 'next/router';

export default function KaKaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    router.push('/29-03-kakao-map-routed');
  };

  return (
    <>
      <button onClick={onClickMoveToMap}>맵으로 이동하기</button>
    </>
  );
}
```

next 기능인 useRouter로 페이지를 이동시키면 아래와 같은 에러가 발생한다.

**anchor tag**

```tsx
export default function KaKaoMapPage() {
  return (
    <>
      <button>
        <a href="/29-03-kakao-map-routed">맵으로 이동하기</a>
      </button>
    </>
  );
}
```

하지만, a태그로 이동시키면 에러 발생 X

**_두 개의 방식이 다른 결과를 내는 이유를 알기 위해선 SPA와 MPA에 대해서 알아야한다._**

**SPA(Single Page Application)**

- **`router를 이용해서 페이지를 이동하는 것과 같은 방식을 채택하는 웹 서비스를 SPA`**라고 한다.
- SPA에서는 서비스에 처음 접속할 때 모든 페이지의 데이터를 다 받아온다.
- 그려져있는 해당 페이지를 브라우저에 렌더링한다(re-rendering). ex) React
  - 백엔드에서 받아오는 게 아니라 그려져 있는 페이지를 이동시키면서 화면에 띄워줌.
- SPA의 경우 최초 로딩에는 시간이 다소 걸릴 수 있으나 페이지를 이동할 때 걸리는 시간이 MPA에 비하여 압도적으로 짧다.

**MPA(Mutiple Page Application)**

- `**a 태그를 이용해서 페이지를 이동하는 것과 같은 방식을 채택하는 웹 서비스**`를 MPA라고 한다.
- MPA에서는 서로 다른 url을 가진 페이지들은 각각 독립적으로 존재한다.
- 따라서, 프론트엔드 서버에서 프리렌더링 후 브라우저로 html, css, js를 보내주는 작업을 매 페이지 이동마다 거치게 된다.
- MPA의 경우 페이지 이동 시마다 서버에 요청해서 데이터를 받아와야 하기 때문에 성능은 좋지 않다.

**따라서, useRouter를 쓰면 지도가 그려지기도 전에 페이지 이동이 일어나서 kakao 객체를 찾을 수 없다는 것!!!**

a 태그를 이용하면 오류는 해결되지만 페이지를 이동했을 때 페이지 자체가 새로 로딩되기 때문에 SPA 프레임워크인 Next.js를 사용하는 의미가 없어진다….! 뿐만 아니라 SEO에 대한 차이도 있는데 밑에서 알아보자.

##### SEO(검색 엔진 최적화)

- h1에 요리 키워드를 넣는 것과 div에 요리 키워드를 넣는 것과는 검색 결과에 영향을 주는 것의 차이가 매우 크다! (영향: h1 > div) **따라서, 시맨틱 태그를 쓰는 것이 중요함 !**
- router.push를 쓰면 SEO에 좋지 못하다…. 그렇다고 anchor는 더욱 아님.
  - **이벤트 핸들러 함수와 함께 페이지 이동을 할 때는 router.push를 써야한다(이 경우엔 Link 못씀)**
- **이 두가지를 합친 Link 태그를 사용하면 된다. (단순 페이지 이동)**
  - 클라이언트 사이드에서 페이지 교체만 이루어지기 때문에 속도가 매우 빠름.
  ```tsx
  <Link href={'/29-03-kakao-map-routed'}>
    <a>맵으로 이동하기</a>
  </Link>
  ```

### script 태그의 비동기 작동 이슈

Head 태그 안에 넣어놓은 script 태그로 카카오 맵을 불러올 경우, script 다운로드와 지도를 로드하는 작업이 동시에 진행되기 때문에 사용자 PC의 다운로드 속도가 느릴 경우 지도가 정상적으로 보이지 않는 문제가 발생할 수 있다. 이러한 경우 비동기적으로 작동하게 만들어줘야한다.

1. \_app.tsx에 카카오 맵을 미리 다운받는다.
   1. 이 방법을 사용하면 카카오 맵이 필요없는 페이지에서도 다운받게 되어 비효율적임 ❌❌❌
2. **스크립트 로드 기다려서 처리하기**

   1. 스크립트가 다운로드가 끝나면 카카오맵을 가져오도록하기 ~
   2. kakao.maps.load

   [Kakao 지도 API](https://apis.map.kakao.com/web/documentation/#load_load)

##### Callback

**함수의 인자에 들어가는 함수**를 콜백 함수라고 한다.

```tsx
aaa(function () {});
aaa(() => {});
```

**async/await(아래 코드와 동일)**

```tsx
const result = await aaa();
console.log(`요청으로 받아온 데이터는 %{result}입니다.`);
```

**async/await가 없던 시절에는 어떻게 했을까?**

```tsx
const onClickCallback = () => {
  const aa = new XMLHttpRequest();
  aa.open('get', `http://numbersapi.com/random?min=1&max=200`);
  aa.send();
  aa.addEventListener('load', (res: any) => {
    const num = res.target.response.split(' ')[0];

    const bb = new XMLHttpRequest();
    bb.open('get', `http://koreanjson.com/posts/${num}`);
    bb.send();
    bb.addEventListener('load', (res: any) => {
      const userId = JSON.parse(res.target.response).UserId;

      const cc = new XMLHttpRequest();
      cc.open('get', `http://koreanjson.com/posts?userId=${userId}`);
      cc.send();
      cc.addEventListener('load', (res) => {
        console.log(res);
      });
    });
  });
};
```

**callback의 문제점**

```tsx
// 콜백 지옥
```

**promise**

- 오래 걸리는 작업을 promise로 만듦.
- 순서 예측이 힘들다.

하지만 콜백 지옥과 비슷하게 되는 것을 아래와 같이 promise chaining으로 해결!

```tsx
const onClickPromise = () => {
  // 콜백 지옥과 다름(Promise chain)
  axios // 실제 axios
    .get('첫번째 주소')
    .then((res) => {
      return axios.get('두번째 주소');
    })
    .then((res) => {
      return axios.get('세번째 주소');
    })
    .then((res) => {});
};
```

**async/await**

- promise 앞에 사용할 수 있다!
- 따라서 axios는 promise로 만들어짐.

```tsx
const onClickAsyncAwait = async () => {
  // await는 Promise 앞에서만 사용할 수 있음!
  const result = await axios.get('첫번째 주소');
};
```

##### Task Queue

```tsx
const onClickPromise = () => {
  console.log('1번 실행됩니다!');
  axios
    .get('https://koreanjson.com/posts/1')
    .then((res) => {
      console.log('2번 실행됩니다!');
      return axios.get('https://koreanjson.com/posts/2');
    })
    .then((res) => {
      console.log('3번 실행됩니다!');
      return axios.get('https://koreanjson.com/posts/3');
    })
    .then((res) => {
      console.log('4번 실행됩니다!');
    });
  console.log('5번 실행됩니다!');
};
```

**실행 결과**

```tsx
1번 실행됩니다!
5번 실행됩니다!
2번 실행됩니다!
3번 실행됩니다!
4번 실행됩니다!
```

promise가 차례대로 실행되지 않는 이유는 Task Queue에 쌓여 있다가 오래 처리되는 건 Background로 빠지기 때문! 따라서 실행순서를 예측하기 어렵기 때문에 조금 더 **직관적**인 async/await가 나오게 됨!

##### Task Queue의 종류

- 매크로 큐
- 마이크로 큐


[이번달 TIL은 여기서 확인하실 수 있습니다 🙋](https://leedawn.notion.site/5-f53b2a262c0947a589761dddca73a4ee)

### 느낀 점

여러 가지 실무에서 많이 사용하는 라이브러리들(카카오맵 지도 연동, 아임포트 연동 등)을 배울 때는 비교적 쉬워서 한숨 돌릴 수 있었다. react-hook-form 같은 경우는 사용해본 적이 있는데, 더 쉽게 사용하는 법을 배워서 너무 좋았다. 에러메시지를 뱉게 할 때, formState를 불러오면 간단하게 구현할 수 있는 부분이라던가, 폼 검증을 할 때 Yup을 쓴다던가 하는,,,!

코드를 치면서 어떻게 하면 깔끔하게 짤 수 있을까에 대해서 생각을 많이 한다. 그래서 세팅에 되게 많이 신경쓰고, 개인 포트폴리오에 있어서도 commit message를 잘 정리하고 싶은 마음에 시간을 많이 들인다. 문서화도 중요하다는 생각에 겪은 에러를 해결한 내용을 따로 정리해놓았다.

하지만.. 시간이 너무 한정이어서 자칫하면 비효율적이기 쉬워지는 요즘이다ㅠ.. 밸런스를 잘 맞춰야하는데 어렵다.. 🥲 우선순위를 다시 재정비해서 개인 포트폴리오에 시간을 많이 쏟아야할 것 같다. 구현하고 싶은 것들이 너무 많다ㅠ 반응형은 협업 들어가기 전에 반드시 해볼 예정이고, 챗봇이라던가 상단으로 바로 갈 수 있는 버튼 등을 만들고 싶다.. 아 storybook도 써보고 싶은데 ㅎ.. 열심히 살아야지... 😛

```toc

```
