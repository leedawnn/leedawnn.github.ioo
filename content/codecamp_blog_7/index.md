---
emoji: 🧐
title: 정규 표현식
date: '2022-08-26 16:50:00'
author: leedawn
tags: RegExp
categories: RegExp
---

### 정규표현식이란?

1. 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어이다.

2. 정규 표현식은 문자열을 대상으로 **패턴 매칭 기능**을 제공한다. 패턴 매칭 기능이란 특정 패턴과 일치하는 문자열을 검색하거나 추출 또는 치환할 수 있는 기능을 말한다.

예를 들어, 회원가입 폼에서 사용자로부터 입력받은 핸드폰 번호가 유효한 전화번호인지 체크하는 경우를 생각해 보자. 핸드폰 번호는 “숫자 3개 + ‘-’ + 숫자 4개 + ‘-’ + 숫자 4개"라는 일정한 패턴이 있다. 이 핸드폰 번호 패턴을 다음과 같이 정규 표현식으로 정의하고, 사용자로부터 입력받은 문자열이 이 핸드폰 번호 패턴에 매칭하는지 체크할 수 있다.

```jsx
// 사용자로부터 입력받은 핸드폰 번호
const phone = '010-1234-567팔';

// 정규 표현식 리터럴로 핸드폰 번호 패턴을 정의
const regExp = /^\d{3}-\d{4}-\d{4}$/;
const regExp = /^\d{3}-\d{3,4}-\d{4}$/;

// phone이 핸드폰 번호 패턴에 매칭하는지 테스트
regExp.test(phone); // false
```

### 정규 표현식의 구성

1.  정규 표현식 리터럴은 패턴과 플래그로 구성된다.
    - pattern : 정규 표현식의 패턴
    - flags: 정규 표현식의 플래그(g, i, m, u, y) >> 표 그리기
2.  RegExp 메서드

    - **RegExp.prototype.exec**

    exec 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다. 매칭 결과가 없는 경우 null을 반환한다. exec 메서드는 g 플래그를 지정해도 첫번째 매칭 결과만 반환하므로 주의할 것 !

    ```jsx
    const target = 'Is this all there is?';
    const regExp = /is/;

    regExp.exec(target);
    // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
    ```

    ```jsx
    const target = 'Is this all there is?';
    const regExp = /is/gi;

    target.match(regExp); // ['Is', 'is', 'is']
    ```

    - **RegExp.prototype.test**

          test 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로반환한다.

    - **String.prototype.match**

          match 메서드는 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환한다. exec 메서드와는 달리 match 메서드는 g 플래그가 지정되면 모든 매칭 결과를 배열로 반환한다.

    ```jsx
    const target = 'Is this all there is?';
    const regExp = /is/;

    target.match(regExp);
    // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
    ```

    ```jsx
    const target = 'Is this all there is?';
    const regExp = /is/g;

    target.match(regExp);
    // ['is', 'is']
    ```

### 패턴

- 임의의 문자열 검색
  .은 임의의 문자 한 개를 의미한다. 문자의 내용은 상관없다. 아래 코드를 보면 .을 3개 연속하여 패턴을 생성했으므로 문자의 내용과 상관없이 3자리 문자열과 매치한다.

  ```jsx
  const target = 'Is this all there is?';
  const regExp = /.../g;

  target.match(regExp);
  // ['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?']
  ```

- 반복 검색
  {m,n}은 앞의 패턴이(아래 코드의 경우 A)이 최소 m번, 최대 n번 반복되는 문자열을 의미한다. 콤마 뒤에 공백이 있으면 정상 동작하지 않으므로 주의!

  ```jsx
  const target = 'A AA B BB Aa Bb AAA';

  const regExp = /A{1,2}/g;

  target.match(regExp); // ['A', 'AA', 'A', 'AA', 'A']
  ```
