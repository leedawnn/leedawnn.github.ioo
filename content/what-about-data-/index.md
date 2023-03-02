---
emoji: 💽
title: 'data 속성이란 무엇일까?'
date: '2023-03-02 16:35:00'
author: leedawn
tags: frontend HTML
categories: frontend
---

# 데이터 속성이란?

`data-*`속성은 특정한 데이터를 DOM 요소에 저장해두기 위한 목적으로 쓰인다. 브라우저는 이러한 데이터 속성에는 어떠한 행동도 관여하지 않기 때문에 개발자는 요소에 특정한 데이터를 저장하고 싶은 경우 자유롭게 사용할 수 있다.

## HTML 문법

어느 element에서나 `data-`로 시작하는 속성은 무엇이든 사용할 수 있다. 화면에 보이지 않게 글이나 추가 정보를 element에 담아 놓을 수 있다. 아래와 같이 사용하면 된다!

```html
<article id="electriccars" data-columns="3" data-index-number="12314" data-parent="cars">
  ...
</article>
```

## Javascript에서 접근하기

이 속성 값들을 읽기 위해 `getAttribute()`를 사용하면 된다. 더 쉬운 방법으로 `dataset` 객체를 통해 읽어낼 수도 있다. (단, `data-` 뒷 부분을 CamelCase로 변환하여 사용하자)

```jsx
var article = document.getElementById('electriccars');

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

각 속성은 문자열이며 읽거나 쓸 수 있다. 위의 경우에서 `article.dataset.columns = 5`와 같이 설정하면 해당 속성은 `"5"`로 변경된다.

## CSS에서 접근하기

데이터 속성은 HTML 속성이기 때문에 CSS에서도 접근할 수 있다. 예를 들어, 부모 데이터를 article에서 보여주려면 `attr` 함수를 사용하여 데이터 속성값을 넣고, `content` 속성과 함께 사용하면 된다.

```css
article::before {
  content: attr(data-parent);
}
```

> `attr()` CSS 함수는 선택한 요소의 속성 값을 검색하여 스타일시트에 사용합니다. 또한 유사 요소에서 사용할 수 있으며, 이 경우 유사 요소의 원래 요소에 대한 속성 값이 반환됩니다.
>
> [https://developer.mozilla.org/en-US/docs/Web/CSS/attr](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)

>

CSS의 속성 선택자도 데이터에 따라 스타일을 바꾸는데 사용할 수 있다. 데이터 값은 문자열이기 때문에, 스타일을 적용하려면 숫자 값은 선택자에 따옴표 안에 써주어야 한다.

```css
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

## 문제점

**눈에 보여야만 하고, 접근할 수 있어야하는 내용은 데이터 속성에 저장하지 않아야한다.** 스크린 리더와 같은 보조 기술이 접근할 수 없기 때문이다. 또한 검색 크롤러가 데이터 속성의 값을 찾지 못할 수도 있다.

## 참고

- [Using data attributes - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

```toc

```
