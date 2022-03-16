---
emoji: 🧐
title: innerText vs textContent
date: '2022-03-16 15:00:00'
author: leedawn
tags: innerText textContent frontend
categories: html
---

개인적으로 element에 텍스트를 추가하고 싶을 때는 innerText를 사용하는 편이에요. 두 프로퍼티는 어떤 공통점과 차이점을 가지고 있는지 궁금해져서 정리해보려고 합니다 !

### 공통점 🍯

1. **둘 다 텍스트노드를 추가해요.**

   텍스트를 추가한다는 공통점이 있어요. 결과 역시 동일해요.

2. **해당 element의 텍스트 값을 반환해요.**

   즉, 어떤 텍스트를 가지고 있는지 알 수 있어요.

### 차이점 👻

1. `textContent`는 `<script>`와 `<style>` 요소를 포함한 모든 요소의 콘텐츠를 가져옵니다. 반면 `innerText`는 "사람이 읽을 수 있는" 요소만 처리해요.

   즉, `textContent`는 모든 텍스트를 그대로 가져오지만, `innerText`는 불필요한 공백을 제거하고 텍스트로 반환하는 차이점이 있어요.

2. textConent가 먼저 만들어졌고, 더 빨리 사용되었다고 해요. 이런 이유로 브라우저 호환성도 좀 더 높습니다. 또한 큰 차이는 아니지만 더 가볍다고 알려져 있어요.

   예를 들어, 아래와 같은 태그가 있다고 가정해볼게요.

   ```html
   <p>
     <style>
       #source {
         color: red;
       }
     </style>
     아래에서<br />이 글을<br />어떻게 인식하는지 살펴보세요.
     <span style="display:none">숨겨진 글</span>
   </p>
   ```

   이 때, innerText와 textContent의 결과는 다릅니다.

   **innerText를 사용한 경우**

   ```jsx
   const msg = document.querySelector('p').innerText;
   console.log(msg);

   #source { color: red; }
   아래에서이 글을어떻게 인식하는지 살펴보세요.
   숨겨진 글 // 출력 결과
   ```

   **textContent를 사용한 경우**

   ```jsx
   const msg = document.querySelector('p').textContent;
   console.log(msg);

   아래에서
   이 글을
   어떻게 인식하는지 살펴보세요.// 출력 결과
   ```

- 인용

  > https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/innerText
  > https://developer.mozilla.org/ko/docs/Web/API/Node/textContent
