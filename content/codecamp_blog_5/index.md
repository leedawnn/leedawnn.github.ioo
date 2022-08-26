---
emoji: 🧐
title: javascript vs typescript
date: '2022-08-26 16:20:00'
author: leedawn
tags: javascript typescript
categories: js ts
---

### JavaScript와 TypeScript

- TypeScript는 JavaScript 기반의 언어
- JavaScript는 클라이언트 측 스크립팅 언어 TypeScript는 객체 지향 컴파일 언어
- 객체 지향 프로그래밍 패러다임은 데이터 추상화에 중심
  - 객체와 클래스라는 두 주요 개념을 기반으로 함

### JavaScript

- 웹 개발에 주로 사용됨
- 웹 페이지를 대화식으로 만드는 프로그래밍 언어
- 폼 유효성 검사, 애니메이션 적용 및 이벤트 생성을 수행
- 클라이언트 측 스크립팅 언어
  - 사용자가 웹 브라우저를 열고 웹 페이지를 요청하면 해당 요청이 웹 서버로 이동함
- 멀티 스레딩, 멀티 프로세싱 기능이 없음

### TypeScript

- JavaScript의 상위 집합으로 JavaScript의 모든 기능이 있음
- TypeScript 컴파일러를 사용하여 ts(TypeScript)파일을 js(JavaScript) 파일로 변환, 쉽게 통합
- 정적 유형 검사 제공
- 클래스 기반 객체를 만들 수 있음
- 클래스 기반이므로 객체 지향 프로그래밍 언어로 상속, 캡슐화 및 생성자를 지원할 수 있음

### Typescript 기본 문법

```typescript
export default function TypescriptPage() {
  let aaa = '안녕하세요';
  aaa = 3;

  // 문자(선언과 할당 분리)
  let ccc: string;

  ccc = '반가워용';

  // 숫자
  let ddd: number = 10;
  ddd = '철수';

  // 불린
  let eee: boolean = true;
  eee = false;
  eee = 'false';

  // 배열
  let fff: number[] = [1, 2, 3, 4, 5, '안녕'];
  let ggg: string[] = ['철수', '영희', '훈이', 10];
  let hhh: (string | number)[] = ['철수', '영희', '훈이', 10];

  // 객체
  const profile = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
  };

  profile.name = 333;

  // interface
  interface Iprofile {
    name: string;
    age: number | string;
    school: string;
  }

  const profile2: Iprofile = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
  };

  profile2.age = '8살'; // 이렇게 쓰고 싶을 때는? interface를 만들어준다.

  // 함수
  const add = (num1: number, num2: number) => {
    return num1 + num2;
  };
  const result = add(1, 2);
  add('1000원', '2000원');

  return <div>타입스크립트 연습하기</div>;
}
```
