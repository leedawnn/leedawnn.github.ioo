---
emoji: 🧐
title: closure
date: '2022-08-26 18:15:00'
author: leedawn
tags: closure
categories: js
---

클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. 클로저를 이해하려면 자바스크립트가 어떻게 변수의 유효범위를 지정하는지(Lexical scoping)를 먼저 이해해야 한다.

### 렉시컬 스코프(Lexical Scope)

렉시컬 스코프란 중첩된 함수 그룹에서 내부 함수가 상위 범위의 변수 및 기타 리소스에 액세스 할 수 있음을 의미한다.

즉, 함수를 어디서 선언하였는지에 따라 상위 스코프를 결정한다는 뜻이며, 가장 중요한 점은 함수를 어디서 호출하는 지가 아니라 어디에 선언하였는지에 따라 결정된다.

다른 말로, 정적 스코프(Static Scope)라고 부르기도 한다.

### 클로저(Closure)

이제 다음 예제를 보자

```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
//myFunc변수에 displayName을 리턴함
//유효범위의 어휘적 환경을 유지
myFunc();
//리턴된 displayName 함수를 실행(name 변수에 접근)
```

이 코드는 바로 전의 예제와 완전히 동일한 결과가 실행된다. 하지만 흥미로운 차이는 displayName()함수가 실행되기 전에 외부함수인 makeFunc()로부터 리턴되어 myFunc 변수에 저장된다는 것이다.

한 눈에 봐서는 이 코드가 여전히 작동하는 것이 직관적으로 보이지 않을 수 있다. 몇몇 프로그래밍 언어에서, 함수 안의 지역 변수들은 그 함수가 처리되는 동안에만 존재한다. makeFunc() 실행이 끝나면(displayName함수가 리턴되고 나면) name 변수에 더 이상 접근할 수 없게 될 것으로 예상하는 것이 일반적이다.

하지만 위의 예시와 자바스크립트의 경우는 다르다. 그 이유는 자바스크립트는 함수를 리턴하고, 리턴하는 함수가 클로저를 형성하기 때문이다. 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다. 첫 번째 예시의 경우, myFunc은 makeFunc이 실행 될 때 생성된 displayName 함수의 인스턴스에 대한 참조다. displayName의 인스턴스는 변수 name이 있는 어휘적 환경에 대한 참조를 유지한다. 이런 이유로 myFunc가 호출될 때 변수 name은 사용할 수 있는 상태로 남게 되고 "Mozilla" 가 alert에 전달된다.
