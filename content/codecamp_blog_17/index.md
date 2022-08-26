---
emoji: 🧐
title: Object.keys, values, entries
date: '2022-08-26 17:55:00'
author: leedawn
tags: Object
categories: js
---

### 순회(iteration)

순회에 필요한 메서드는 map.keys(), map.values(), map.entries() 등이 있다.

이 메서드들은 포괄적인 용도로 만들어졌기 때문에 메서드를 적용할 자료구조는 일련의 합의를 준수해야 한다. 커스텀 자료구조를 대상으로 순회를 해야 한다면 이 메서드들을 쓰지 못하고 직접 메서드를 구현해야 한다.

keys(), values(), entries()를 사용할 수 있는 자료구조는 다음과 같다.

- Map
- Set
- Array

일반 객체에도 순회 관련 메서드가 있긴 한데, keys(), values(), entries()와는 문법에 차이가 있습니다.

Object.keys, values, entries 일반 객체엔 다음과 같은 메서드를 사용할 수 있다.

- Object.keys(obj) – 객체의 키만 담은 배열을 반환.
- Object.values(obj) – 객체의 값만 담은 배열을 반환.
- Object.entries(obj) – [키, 값] 쌍을 담은 배열을 반환.
