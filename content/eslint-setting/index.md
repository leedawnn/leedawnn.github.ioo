---
emoji: 🌐
title: 'eslint, stylelint 설정하기(with VSCODE)'
date: '2022-05-10 01:30:00'
author: leedawn
tags: eslint stylelint prettier
categories: environment
---

## introduction

`ESLint`는 코딩 컨벤션에 위배되는 코드나 안티 패턴을 자동 검출하는 도구다. 처음부터 유용하게 사용할 수 있는 스타일 가이드(built-in rule)을 제공하지만 개발자가 자신의 스타일 가이드를 작성할 수도 있다.

`Prettier`는 코드의 최대 길이, 함수에서, 작은따옴표(')를 사용할 것인지 아니면 큰 따옴표(")를 사용할 것인지 등 코드가 예쁘게 보이도록 하는지에 중점을 두었다. 하지만 코드의 에러를 잡아내진 못한다.

## install eslint & Airbnb style guide

`Airbnb style guide`를 기본으로 `eslint`와 필요 플러그인들을 로컬 설치하자. `eslint`를 전역으로 설치할 수도 있으나 권장하지 않는다. 만약 전역으로 설치할 경우에는 공유 설정과 필요 플러그인을 로컬 설치해 주어야 한다. 

참고로 이 글에서의 스타일 가이드는 ``javascript``에 대한 설명도 들어있지만, ``react``와 ``typescript``를 사용한다는 가정하에 작성되었다.

```bash
$ cd <project-folder>
$ npm init -y
# install eslint & plugins(여기서 설명하는 플러그인이 너무 많아서 다 쓰진 않겠다,,)
$ npm install -D eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-html
```

| 플러그인                      | 설명                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| eslint-config-airbnb          | Airbnb의 style guide를 eslint의 설정 파일인 .eslintrc.json에 확장해 주는 플러그인(React 관련 플러그인 미포함) |
| eslint-config-prettier        | 불필요하거나 prettier과 충돌할 수 있는 모든 규칙을 해제                                                       |
| eslint-config-react           | React에 대한 lint 설정                                                                                        |
| eslint-config-react-app       | CRA(create-react-app)에서 사용 가능한 lint 설정                                                               |
| eslint-plugin-flowtype        | flow type에 대한 lint 설정                                                                                    |
| eslint-plugin-import          | ES6+ import/export 지원 플러그인                                                                              |
| eslint-plugin-jsx-a11y        | 애플리케이션에 접근성 표준을 적용하는 런타임 분석 도구                                                        |
| eslint-plugin-prettier        | Prettier를 ESLint 플러그인으로 추가. 즉, Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력        |
| eslint-plugin-react           | 리액트와 관련된 룰을 정의한 플러그인                                                                          |
| eslint-plugin-react-hooks     | 리액트 hooks와 관련된 룰을 정의한 플러그인                                                                    |
| eslint-plugin-testing-library | 특정 테스트 라이브러리 패키지에 대한 good practices를 적용하는 권장 구성                                      |
| eslint-webpack-plugin         | JavaScript 코드의 문제를 찾고 수정                                                                            |

> 웹팩 Eslint 공식 홈페이지에서는 loader로 인한 eslint는 사용하지말고 plugin을 통해서 사용하라고 권한다.
> The loader eslint-loader will be deprecated soon, please use this plugin instead.

``typescript``를 사용한다면 다음과 같은 플러그인을 추가로 고려하자.
| 플러그인 | 설명 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| typescript-eslint/typescript-estree | ESTree(자바스크립트 AST 스펙) 호환 AST를 생성하는 타입스크립트 파서 |
| typescript-eslint/parser | typescript-estree를 활용한 타입스크립트용 ESLint 파서(ESLint 기본 파서인 espree를 대신함) |
| typescript-eslint/eslint-plugin | TypeScript관련 linting 규칙을 처리하는 플러그인 |

## .eslintrc.json

프로젝트 루트에 `.eslintrc.json` 파일을 생성하고 필요에 따라 다음과 같이 설정을 변경한다. 자세한 설정 방법은 [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)을 참조한다.

```json
{
  "extends": ["airbnb", "airbnb/hooks", "react-app", "prettier"],
  "env": {
    "browser": true,
    "jasmine": true,
    "jest": true
  },
  "settings": {
    "import/extensions": [".js", ".jsx"],
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      },
      "typescript": {
        "project": "."
      }
    },
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "rules": {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    // "no-var": "off",
    "arrow-body-style": "off",
    "semi": ["warn", "never"],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "warn",
    "react/require-default-props": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/order": "off",
    "import/no-anonymous-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [".storybook/**", "src/stories/**"]
      }
    ],
    // "max-lines": ["warn", 150],
    "no-param-reassign": ["error", { "props": false }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],

    "no-shadow": "off",
    "no-unused-expressions": ["warn"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "prefer-const": ["warn"],
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "lines-between-class-members": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "labelComponents": ["label"],
        "labelAttributes": ["htmlFor"],
        "controlComponents": ["input"]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never"
      }
    ]
  }
}
```

### extends

ESLint 설정을 확장 (airbnb, prettier의 설정을 적용할 수 있다.)

### env

사전 정의된 전역 변수를 제공한다. 예를 들어, node 환경인 워크스페이스면 ``node: true``를 추가해야 하고, 웹 환경이라면 ``browser: true``, ``es6: true`` 등을 추가해야 한다.

### rules

자체적으로 정의한 규칙을 적용 ([ESLint Rules](https://eslint.org/docs/rules/))

## install ESLint VSCode extention

VSCode 마켓플레이스에서 VS Code ESLint extension을 설치한다.
메뉴의 Code > 기본 설정 > 설정으로 이동하여 `setting.json`에 아래 설정을 추가한다.

```json
{
  "eslint.validate": [
    "html",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

만약, typescript를 사용한다면 javascript 대신에 ``typescript``를 넣어주자.

## ESLint + Prettier

코드 포맷터인 Prettier를 설치하여 ESLint와 함께 사용해보자.

VSCode 마켓플레이스에서 prettier-vscode 익스텐션을 설치한다.

prettier-vscode 익스텐션을 설치해 사용한다면 Prettier를 별도 설치할 필요가 없지만 Prettier CLI를 사용할 경우를 대비해 Prettier를 설치하도록 하자.

```bash
# --save-exact 옵션을 사용하여 package.json에 ^ 없이 등록되도록 설치한다.
$ npm install --save-dev --save-exact prettier
```

프로젝트 루트에 Prettier의 설정 파일인 ``.prettierrc.json`` 파일을 생성하고 다음과 같이 설정하자. 자세한 설정 방법은 [Configuring Prettier](https://prettier.io/docs/en/configuration.html)를 참조한다.

```json
{
  jsxSingleQuote: true
  semi: true
  printWidth: 120
  proseWrap: never
  singleQuote: true
  htmlWhitespaceSensitivity: "css"
  endOfLine: "lf"
}
```

## autofix

파일 저장과 함께 지동으로 Prettier 포맷팅이 실행되도록 하려면 메뉴의 “Code > 기본 설정 > 설정”으로 이동하여 ``settings.json``에 다음 설정을 추가한다.

```json
...
  /////////////////////////////
  // ESLint
  "eslint.validate": [
    "html",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  /////////////////////////////
  // Prettier
  // 수정 후 저장할 때 prettier로 자동 스타일링
  "editor.formatOnSave": true,
  // 수정 후 저장할 때 eslint로 autofix 실행 (ex. let => const)
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
...
```

## Babel-eslint

다음 예제의 private 필드 정의 제안과 같이 아직 ECMAScript 정식 표준이 아닌 제안 단계의 자바스크립트 코드의 경우 eslint가 소스 코드를 파싱할 수 없어 에러가 발생하는 경우가 있다.

```javascript
class MyClass {
  #privateField = ''; // Parsing error: Unexpected character '#'
}
```

이러한 경우 ``babel-eslint``를 사용해 자바스크립트 소스 코드를 파싱해야 한다. 다음과 같이 ``babel-eslint``를 설치한다.

```bash
$ npm install --save-dev babel-eslint
```

하지만, 이 프로젝트에서는 ``typescript`` 관련 패키지가 필요하기 때문에 아래와 같이 설치해준다.

```bash
# typescript-eslint 적용
$ npm i --save-dev typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

그 다음, 아래와 같이 ``.eslintrc.json``에 parser를 설정하면 에러가 발생하지 않는다.
``Babel``과 함께 사용되는 파서로는 ``babel-eslint``가 있고 ``Typescript`` 구문 분석을 위해 사용되는 ``@typescript-eslint/parser``가 있다.

```json
{
  // "parser": "babel-eslint",
  "parser": "@typescript-eslint/parser"
  ...
}
```

``parserOptions``은 ESLint 사용을 위해 지원하려는 Javascript 언어 옵션을 지정할 수 있다.

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "env": {
    "node": true
  },
  "extends": ["plugin:@typescript-eslint/recommended"]
}
```

``"extends": ["plugin:@typescript-eslint/recommended"]`` 설정을 통해 @typescript-eslint/eslint-plugin 적용과 동시에 recommened 규칙을 확장한다.

자세한 내용은 [recommened 규칙 세부목록](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)을 참고하자.



> 인용 :
> https://poiemaweb.com/eslint 
> https://github.com/typescript-eslint/typescript-eslint#packages-included-in-this-project 
> https://github.com/miriyas/foundation

```toc

```
