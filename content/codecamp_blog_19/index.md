---
emoji: 🧐
title: react 상태 끌어올리기
date: '2022-08-26 19:25:00'
author: leedawn
tags: react state
categories: react
---

![](https://velog.velcdn.com/images/string_main/post/68b005e9-7aa2-47f4-a7c9-1cb20c1af85a/image.png)

- 형제 컴포넌트는 직접적으로 연결되어 있지 않아 직접 데이터 전달 불가

- 오직 부모 ↔ 자식 간에만 데이터 교환이 가능!

![](https://velog.velcdn.com/images/string_main/post/433b169e-2d08-4106-a6da-ea63aeb107c6/image.png)

- 데이터를 생성하는 컴포넌트 → 부모 컴포넌트 → 데이터를 필요로 하는 컴포넌트 순으로 전달됨

- 자식 → 부모로 상향식 데이터 전달
