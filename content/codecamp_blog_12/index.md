---
emoji: 🧐
title: 쿠키 vs 로컬 스토리지 vs 세션 스토리지
date: '2022-08-26 17:45:00'
author: leedawn
tags: cookie localStorage sessionStorage
categories: frontend
---

### Cookie

쿠키는 만료 기한이 있는 Key, Value 형태의 저장소이다.

```javascript
function setCookie(name, value, day) {
  var date = new Date();
  date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

function getCookie(name) {
  var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
}

setCookie(key, value, time);
getCookie(key);
```

- 장점:
  - 대부분의 브라우저가 지원
- 단점 :
  - 매 HTTP 요청마다 포함되어 api호출로 서버에 부담.
  - 쿠키의 용량이 작음 (약 4KB)
  - 암호화 존재 x => 사용자 정보 도난 위험

### localStorage

- storage의 특징 문자열 데이터만 저장할 수 있다.
- 로컬 스토리지는 브라우저 창을 닫더라도 데이터 유지된다.(즉, 로그아웃을 하더라도 데어터 유지된다.)

```javascript
localStorage.setItem('key', JSON.stringfy(value)); // 저장
JSON.parse(localStorage.getItem('key')); // 조회
localStorage.removeItem('key'); // 해당 키가 삭제
localStorage.clear(); // 전체삭제
```

- 장점:
  - 서버에 불필요한 데이터를 저장해달라고 요청하지 않아도 된다.
  - 용량이 크다 (5MB, 브라우저마다 차이 있음)
- 단점 :
  - HTML5를 지원하지 않는 브라우저의 경우 사용 불가

### sessionStorage

- storage의 특징 문자열 데이터만 저장할수 있다.
- 세션 스토리지는 브라우저 창을 닫는 순간 영구적으로 데이터 삭제

```javascript
sessionStorage.setItem('key', JSON.stringfy(value)); // 저장
JSON.parse(sessionStorage.getItem('key')); // 조회
sessionStorage.removeItem('key'); // 해당 키가 삭제
sessionStorage.clear(); // 전체삭제
```

- 장점:
  - 서버에 불필요한 데이터를 저장해달라고 요청하지 않아도 된다.
  - 용량이 크다 (5MB, 브라우저마다 차이 있음)
- 단점 :
  - HTML5를 지원하지 않는 브라우저의 경우 사용 불가

### 정리

1. 쿠키
   - 만료 시간을 가지고 있다.
   - 저장된 데이터가 백엔드 API 요청 시 헤더 안에 넣어져 전송된다. 또한 백엔드에서 데이터를 쿠키에 넣어서 API 응답 시 프론트엔드에 전달할 수도 있다.
   - httpOnly, secure 등의 옵션을 설정할 수 있다.
     - `httpOnly`: 브라우저에서 JS를 이용해 쿠키에 접근할 수 없다. 통신으로만 해당 데이터를 주고받을 수 있다.
     - `secure`: https 통신 시에만 해당 쿠키를 받아올 수 있다.
   - 브라우저를 종료한 후 다시 들어와도 기록이 남아있다.
2. 로컬 스토리지
   - 데이터를 브라우저에 저장한다.
   - 사용자가 직접 삭제하지 않는 한 계속 저장되어있다.
3. 세션 스토리지
   - 데이터를 브라우저에 저장한다.
   - 브라우저를 종료할 때 삭제된다.
