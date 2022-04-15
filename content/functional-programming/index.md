---
emoji: 👩‍💻
title: '웹개발에서 함수형 프로그래밍이 대세다?'
date: '2022-04-15 16:00:00'
author: leedawn
tags: functional programming JS
categories: JS
---

## 객체지향 프로그래밍? 함수형 프로그래밍?

모던 자바스크립트 deep dive 스터디를 하면서, 자바스크립트 세계는 모든 것이 객체로 이루어져있다는 것을 보고 객체지향 프로그래밍을 배워야하는 것인가, 하지만 요새는 함수형 프로그래밍이 대세라던데..? 라는 주제로 팀원들과 얘기를 나눈 적이 있다. 잘은 모르겠지만 함수형 프로그래밍을 배워야한다로 결론이 났던 것 같은데, 이 글에서 이유를 자세히 알아보자 🤓

## 왜 함수형 프로그래밍을 배워야하나?

|                          |                                        |
| ------------------------ | -------------------------------------- |
| 재미 / 실시간성          | 라이브 방송, 실시간 댓글, 협업, 메신저 |
| 독창성 / 완성도          | 애니메이션, 무한 스크롤, 벽돌          |
| 더 많아져야하는 동시성   | 비동기 I/O, CSP, Actor, SMT ...        |
| 대용량 / 정확성 / 병렬성 | MapReduce, Clojure Reducers...         |
| 복잡도 / MSA / ...       | 많아지고 세밀해지는 도구들             |

예전에는 하나의 프레임워크가 전체의 구현을 대신하고, 해당 서비스의 구체화되는 부분만 알려주면 그 프레임워크가 모든 것을 동작 시켰다면, 요즘엔 세밀한 작은 도구들을 모아서 하나의 소프트웨어를 만들어야될 만큼 성능, 사용성, 독창성, 완성도 같은 것들이 요구된다. 그렇기 때문에 개발자들은 이 많은 도구들을 다룰 줄 알아야하는 시점이다. 요즘은 어떤 서비스를 만들어도 이 모든 것들이 담겨야하는 시대이며, 동시에 생산성은 타협할 수 없는 중요한 요소이다.
특히, 동시성과 병렬성 관련 기술에서 함수형 프로그래밍이 성공적인 적용 사례들과 많은 영향력을 끼치면서 함수형 프로그래밍의 대해서 화두가 되고 있다.

## 함수형 프로그래밍이란?

"함수형 프로그래밍은 애플리케이션, 함수의 구성요소, 더 나아가서 언어 자체를 함수처럼 여기도록 만들고 이러한 함수 개념을 가장 우선순위에 놓는다."

"함수형 사고방식은 문제의 해결 방법을 동사(함수)들로 구성(조합)하는 것"

\- 마이클 포커스, 함수형 자바스크립트 저자

## 함수형 프로그래밍의 특징

1. **순수함수**

   함수에서 외부의 상태값을 참조하거나 또는 외부의 상태를 변경하는 것은 순수함수라고 부를 수 없다. 동일한 인자값을 넣었을 때 항상 동일한 결과값을 리턴하고 언제 선언이 되었는지 외부에 전혀 영향을 받지 않도록 작성을 해야한다.

   ```javascript
   // ❌
   let num = 1;

   function add(a) {
     return a + num;
   }
   ```

   ```javascript
   // ✅ Pure Functions
   function add(a, b) {
     return a + b;
   }

   const result = add(2, 3);
   ```

2. **Stateless, Immutability**

   비상태, 불변성을 유지해야한다. 아래 코드와 같이 함수에 인자로 전달된 데이터를 변경하는 것은 절대 함수형이 아니다.

   ```javascript
   // ❌
   let person = { name: 'Lee', age: '22' };

   function increaseAge(person) {
     person.age = person.age + 1;
     return person;
   }
   ```

   함수형 프로그래밍에서는 전달된 데이터를 변경하는 것이 아니라, 새로운 버전의 새로운 오브젝트를 만들어서 결과값으로 전달해야한다. 즉, 외부의 상태나 함수에 인자로 전달된 데이터의 상태를 변경하지 않음으로써 side effect를 만들지 않으므로 불변성을 유지하기 때문에 여러가지 동시다발적인 멀티쓰레딩 환경에서도 안정적으로 동작할 수 있다.

   ```javascript
   // ✅ Stateless, Immutability
   let person = { name: 'Lee', age: '22' };

   function increaseAge(person) {
     return { ...person, age: person.age + 1 };
   }
   ```

   자바스크립트에서는 불변성 데이터 타입이 없기 때문에, Object.freeze()를 이용하여 오브젝트를 불변성으로 만들어줄 수가 있다.

   ```javascript
   // ✅ Stateless, Immutability
   let person = { name: 'Lee', age: '22' };

   function increaseAge(person) {
     return Object.freeze({ ...person, age: person.age + 1 });
   }
   ```

3. **Expression Only!**

   if나 for, switch문과 같은 expression을 쓰는 것은 함수형 프로그래밍이 아니다!

   ```javascript
   // ❌
   let numbers = [1, 2, 3];

   function multiply(numbers, multiplier) {
     for (let i = 0; i < numbers.length; i++) {
       numbers[i] = numbers[i] * multiplier;
     }
   }
   ```

   ```javascript
   // ✅ expressions
   function multiply(numbers, multiplier) {
     return numbers.map((num) => num * multiplier);
   }
   ```

4. **First-class and higher-order functions**

   마지막으로, 다른 데이터와 마찬가지로 함수를 변수에 할당하거나 함수의 인자로 전달하거나 리턴하는 등의 일들을 할 수 있는 **First Class(일급함수)** 특징과 함수 자체를 인자로 전달하거나 함수에서 또 다른 함수를 리턴하는 **고차함수** 이 두가지 속성을 가지고 있어야 한다.

   ```javascript
   // first-class
   const addTwo = (a) => a + 2;
   const multiplyTwo = (a) => a * 2;
   const transform = (numbers) => numbers.map(addTwo).map(multiplyTwo);
   console.log(transform([1, 2, 3, 4]));
   ```

   ```javascript
   // higher-order functions
   const addToppings = (topping) => (food) => food + topping;
   const egg = addToppings('🍳');
   const bacon = addToppings('🥓');

   console.log(egg('🍳'));
   console.log(bacon('🥓'));
   ```
