---
emoji: 🧐
title: JSDoc 찍먹 🍯
date: '2023-01-22 21:30:00'
author: leedawn
tags: documents API
categories: JS
---

프리온보딩 프론트엔드 챌린지을 지원하면서 Todo 앱을 JSDoc으로 문서화하는 사전 미션이 주어졌다. 요구 사항을 구현하지 않고 설계만 하라고,,? JSDoc은 몰까?

공식문서를 따라서 JSDoc 찍먹 해보쟈!

> [**JSDoc 공식 매뉴얼 문서 - @Use JSDoc**](<[https://jsdoc.app/about-getting-started.html](https://jsdoc.app/about-getting-started.html)>)

# JSDoc란?

JSDoc는 자바스크립트 API 문서화 도구(Documentation Generator)이다. 문서화 도구란, 소스 파일에 작성된 주석을 파싱하여 클래스, 메스드 등 API 정보를 HTML 문서 웹사이트로 생성해주는 도구를 지칭한다. 개발 중인 코드에 주석이 잘 작성되어 있다면, 문서화 도구가 제공하는 명령어 한 줄만으로 불필요한 핸드메이드 작업을 피할 수 있다.

## 목적

JSDoc의 목적은 자바스크립트 애플리케이션 또는 라이브러리의 API를 문서화하기 위함이다. 또한 자바스크립트 소스코드에 타입 힌트를 제공하여 에러의 가능성을 낮추고, 타입 체크를 할 수 있다.

## 환경 세팅

### 1. JSDoc 설치

```bash
npm i -D jsdoc
```

### 2. 루트 디렉토리에 jsdoc.json 파일 생성

markdown 파일을 읽어 들일 수 있는 plugin을 지정하고, js파일들을 source 파일로 읽어 들인다.

```json
// jsdoc.json
{
  "source": {
    "include": ["src"],
    "includePattern": ".js$",
    "excludePattern": "(node_modules/|docs)"
  },
  "plugins": ["node_modules/jsdoc/plugins/markdown"],
  "templates": {
    "cleverLinks": true,
    "monospaceLinks": true
  },
  "opts": {
    "recurse": true,
    "destination": "./docs/"
  }
}
```

### 3. 기존 package.json 파일 수정

손쉽게 jsdoc.json 파일을 읽어들이도록 script 부분을 변경하였다.

```json
// package.json
{
  "name": "MD_JSDoc_Sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "doc": "jsdoc -c jsdoc.json"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jsdoc": "^3.6.6"
  }
}
```

### 4. 루트 디렉터리에 src/index.js 파일 생성 & doc 명령어 수행

index.html을 포함하는 docs라는 디렉토리가 생성된다. 기본적인 환경 세팅 완!

```bash
npm run doc
```

### 5. index.js에 JSDoc 문법에 맞게 주석 및 코드를 작성한다!

index.js에는 코드들을 API 문서에 파싱하여 나타내기 위해 주석 부분에 annotation들이 작성되어야 한다.

## 사용법

JSDoc 주석은 일반적으로 문서화되는 코드 직전에 위치해야한다. 그리고 `/** ~~ */` 주석 안에 우리가 타입을 정하고 싶은 인자의 타입을 정해주면 된다.

```javascript
/**
 * 내용
 */
function foo() {}
```

이제 어떤 맥락을 만들기 위해 JSDoc에서 명시한 tag를 이용할 수 있다. tag는 `@`로 시작하며 한 줄에 하나씩 작성된다. tag는 종류가 다양하고, 저마다의 문법 규칙이 있다.

```javascript
/**
 * 설명
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}
```

### 콜백 함수 또는 객체 정의하기

아래 내용은 새로운 타입을 JSDoc 으로 정의하므로 실제 코드와 붙을 필요가 없는 것들이다. 복잡한 객체는 아래와 같이 정의내린 다음에 사용할 수 있다. 일반 객체 타입은 `@typedef` 를 사용하고, 함수 타입은 `@callback` 을 사용한다.

```javascript
// PostSearch 라는 객체 타입을 정의합니다.

/**
 * 게시물 검색 정보를 담는 객체
 * @typedef {object} PostSearch
 * @property {number} page 0이 1페이지임.
 * @property {number} perpage
 * @property {Date} date_gte
 * @property {Date} date_lte
 * @property {string} search
 * @property {string[]} board_permalinks
 * @property {string} board_belongs_to
 */

// Resolver 라는 함수 타입을 정의합니다.

/**
 * resolver의 기본 형태
 * @callback Resolver
 * @param {object} obj
 * @param {object} args
 * @param {PassportContext} context
 * @param {object} info
 * @returns {Promise<any>}
 */
```
