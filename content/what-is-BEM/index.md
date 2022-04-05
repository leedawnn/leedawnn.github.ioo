---
emoji: 🧐
title: BEM 방법론
date: '2022-03-24 21:00:00'
author: leedawn
tags: BEM css frontend
categories: css
---

오늘은 BEM 방법론에 대해 얘기해보려해요 😃  
BEM 공식문서를 보면, BEM(Block, Element, Modifier)이란 웹 개발에 대한 컴포넌트 기반 접근법이라고 나와있어요.
말이 어렵지만 유지보수를 위한 css 클래스네임에 대한 고민? 이라고 생각하면 될 것 같아요.

## 1. Introduction

소규모 사이트에서 스타일에 대해 코드를 짤 때 어떻게 구성할 지에 대해서 신경쓰지 않는 것은 보통 큰 문제가 되지 않아요.
하지만, 규모가 크고 복잡한 프로젝트의 경우 다음과 같은 3가지 이유로 아주 중요해집니다.

1. 코드 작성 시간에 영향을 끼친다.
2. 써야하는 코드의 양에 영향을 끼친다.
3. 브라우저가 로딩해야하는 양에 영향을 끼친다.

   또한 팀과 협업해야 할 때, 그리고 좋은 퍼포먼스가 필수적일 때 특히 중요해요. 레거시 코드와 함께 긴 기간 진행되는 프로젝트들에도 역시 중요합니다.

## 2. Methodologies

CSS 설치 공간을 줄이고, 개발자 간의 협력을 구성하며 대규모 CSS 코드베이스를 유지하는 것을 목표로 하는 다양한 방법론들이 있어요.

- OOCSS
  : Separating container and content with CSS “objects”

- SMACSS
  : Style-guide to write your CSS with five categories for CSS rules

- SUITCSS
  : Structured class names and meaningful hyphens

- Atomic
  : Breaking down styles into atomic, or indivisible, pieces

## 3. BEM을 왜 사용해야되나요?

BEM은 다수의 개발자가 CSS와 HTML 모듈을 병렬로 구축하고 있을 때 가장 효과적이에요. 대규모 팀에서 발생하는 실수나 버그를 방지하는 데 도움이 되죠. 네이밍 컨벤션이 기술적이고 예측 가능하기 때문에 확장성이 우수해요. BEM은 큰 팀뿐만 아니라 큰 팀에서도 잘 작동합니다.

> 내가 다른 방법론들을 쓰지 않고 BEM을 고른 이유는 다음과 같다. BEM은 다른 방법론에 비해 혼란을 덜 야기한다. (i.e. SMACSS) 하지만 여전히 알아차리기 쉬운 용어를 사용하여 우리가 원하는 좋은 아키텍처를 제공한다. (i.e. OOCSS)

Mark McDonnell, Maintainable CSS with BEM

## 4. BEM의 기본 구조

BEM은 Blcok, Element, Modifier를 뜻해요. 이 3가지로 구성된 이름을 짓는 거죠! 그리고 각각 \_\_와 --로 구분합니다.

```css
.header__navigation--navi-text {
  color: red;
}
```

위 코드에서 `header`는 Block, `naviagtion`은 Element, `navi-text`는 Modifier가 됩니다.

BEM은 기본적으로 ID를 사용하지 않으며, **class**만을 사용해요.  
또, '어떻게 보이는가'가 아니라 '**어떤 목적인가**'에 따라 이름을 짓습니다.  
예를 들어, 에러 메시지를 띄우는 p 태그에게는 .red가 아닌, .error라는 이름을 줘야하죠.
이름을 연결할 때는 block-name과 같이 하이픈 하나만 써서 연결합니다.

## 5. Block, Element, Modifier

Block은 재사용할 수 있는 기능적으로 독립된 페이지 컴포넌트예요.

Block은 다음과 같은 특징을 가져요.

1. 중첩 기능
2. 임의 배치

![](./../../assets/bem_block.png)

> 👩‍🔧 인용  
> http://getbem.com/introduction/  
> https://en.bem.info/methodology/quick-start/
