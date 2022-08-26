---
emoji: 🧐
title: webpack이란
date: '2022-08-26 16:00:00'
author: leedawn
tags: webpack
categories: frontend
---

### webpack이란?

Webpack은 모듈 번들링이다. html 파일에 들어가는 자바스크립트 파일들을 하나의 자바스크립트 파일로 만들어주는 방식을 **모듈 번들링**이라고 한다.

쉽게 말하자면, 많은 자바스크립트 파일을 하나의 자바스크립트 파일로 만들어 주는 것을 Webpack이라고 한다.

### webpack은 왜 사용해야할까?

옛날에는 페이지마다 새로운 html을 요청해서 뿌려주는 방식이였다면, 요새는 SPA 하나의 html 페이지에 여러 개의 자바스크립트 파일들이 포함한다. 연관되어 있는 자바스크립트 파일들을 하나의 파일로 묶어줘서 관리하기 편하다.

또한 파일을 컴파일 할 때, 여러 모듈들의 파일을 읽어오는데 시간이 오래 걸리는데, 이러한 문제를 해결하기 위해 여러 파일을 하나의 파일로 번들링 해주고, 하나의 자바스크립트 파일로 만들어서 웹페이지 성능 최적화를 해준다.

### webpack-dev-server

webpack-dev-server는 라이브 리로드 기능을 제공하는 개발용 서버다. 빌드를 실행하면 번들링된 파일을 생성하기 때문에 규모가 큰 프로젝트라면 빌드에 시간이 걸린다. webpack-dev-server는 실제 번들링된 파일을 생성하지 않고 번들링된 결과를 메모리에 저장하기 때문에 빌드 속도가 빠르다. 따라서 개발 시에는 매번 빌드를 실행하지 않고 webpack-dev-server를 사용하는 편이 좋다.

webpack-dev-server는 webpack.config.js에 설정을 추가하는 것으로 간단한 사용할 수 있다. 먼저 다음과 같이 webpack-dev-server를 설치하자.

```bash
$ npm install --save-dev webpack-dev-server
```

webpack.config.js에 다음과 같이 설정을 추가한다.

```javascript
const path = require('path');

...
  // https://webpack.js.org/configuration/dev-server
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverstatic
    static: {
      // https://webpack.js.org/configuration/dev-server/#directory
      directory: path.join(__dirname, 'public'), //
    },
    // https://webpack.js.org/configuration/dev-server/#devserveropen
    open: true,
    // https://webpack.js.org/configuration/dev-server/#devserverport
    port: 'auto'
  },
...
```

package.json의 scripts에 webpack serve를 추가한다.

```json
...
  "scripts": {
    "start": "webpack serve",
    "build": "webpack -w"
  },
...
```

webpack-dev-server의 실행을 위해 다음과 같이 package.json scripts의 start를 실행한다.

```bash
$ npm start
```

이때 index.html의 script 태그에 번들링된 자바스크립트 파일을 설정해 주어야 한다. 만약 번들링된 자바스크립트 파일 이름이 main.bundle.js라면 다음과 같이 index.html에 자바스크립트 파일을 추가한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <script defer src="main.bundle.js"></script>
  </head>
  ...
</html>
```
