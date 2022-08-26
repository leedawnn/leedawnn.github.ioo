---
emoji: 🧐
title: CI/CD
date: '2022-08-26 20:01:00'
author: leedawn
tags: CI CD
categories: frontend
---

### CI (Continuous Integration)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGXdIT%2FbtqI9GkH3wP%2F5Qx2zLKYRxsYWLSoS6KH3K%2Fimg.png)

CI는 **Continuous Integration**의 줄임말이다.

즉, 지속적인 통합이라는 의미! 지속적인 통합이란, 어플리케이션의 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트 되어 공유 레포지토리에 통합히는 것을 의미한다. (가능하다면 하루에 여러번까지)

### CD (Continuous Delivery & Continuous Deployment)

CD는 Continuous Delivery 혹은 Continuous Depolyment 두 용어 모두의 축약어이다. 해석하자면, 지속적인 서비스 제공 혹은 지속적인 배포라는 의미!

Continuous Delivery는 공유 레포지토리로 자동으로 Release 하는 것,Continuous Deployment는 Production 레벨까지 자동으로 deploy 하는 것을 의미한다. 정리하자면, CI가 새로운 소스코드의 빌드, 테스트, 병합까지를 의미하였는데,CD는 개발자의 변경 사항이 레포지토리를 넘어, 고객의 프로덕션(Production) 환경까지 릴리즈 되는 것을 의미한다.

CI에서 예로 든 MSA와 같은 환경에서 Agile 방법론이 적용될 경우, 서비스의 사용자는 최대한 빠른 시간 내에 최신 버전의 Production을 제공받을 필요가 있다.이 때, 소프트웨어가 언제든지 신뢰 가능한 수준의 버전을 유지할 수 있도록 support 하는 것이 CD라고 할 수 있쥬.

이는 서비스의 개발팀과 비즈니스팀(영업, CS팀 등) 간의 커뮤니케이션 부족 문제를 해결해 줌으로써, 배포에 이르기까지의 노력을 최소한으로 단축시켜 준다는 Benefit을 제공한다.
