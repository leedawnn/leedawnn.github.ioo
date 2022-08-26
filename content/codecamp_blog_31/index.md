---
emoji: 🧐
title: 권한분기, HOC, HOF
date: '2022-08-26 22:07:00'
author: leedawn
tags: HOC HOF
categories: frontend
---

### 권한분기

웹사이트를 방문하면 로그인을 한사람과 안한사람이 볼 수 있는 페이지가 따로 존재하는 경우가 있다. 이는 권한분기가 이뤄진 것이다.
로그인에 등급을 매기면, 운영자로 로그인 한 사람, 판매자로 로그인 한 사람, 거래처 사장님으로 로그인 한 사람 등 다양하게 권한을 분리할 수도 있다.

어떻게 권한분기를 할수 있을까?

### HOC(Higher Order Component)

HOC는 상위에 있는 컴포넌트로 다른 컴포넌트보다 먼저 실행되는 컴포넌트이다.

```javascript
export const withAuth = (Component) => (props) => {
  const router = useRouter();

  //loginCheckSuccess 파일에 있는 useEffect를 가지고 오시면 됩니다.
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      alert('로그인을 먼저 해주세요');
      router.push('/로그인 페이지');
    }
  }, []);

  return <Component {...props} />;
};
```

```javascript
const LoginSuccessPage = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
};

export default withAuth(LoginSuccessPage);
```

이렇게 권한을 체크하는 Hoc를 만들어주고 필요한 컴포넌트에 withAuth를 감싸서 export하면 해당 컴포넌트가 실행되기 이전에 권한체크 컴포넌트가 먼저 실행된다!

### HOF (Higher-Order Functioin)

고차함수(HOF)는 함수를 인수로 전달받거나 함수를 반환하는 함수이다.
매개변수를 통해 함수의 외부에서 콜백함수를 전달받은 함수로 반복되는 로직을 쉽게 재사용 할 수 있다.
