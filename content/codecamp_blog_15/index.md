---
emoji: 🧐
title: State and Lifecycle
date: '2022-08-26 17:55:00'
author: leedawn
tags: State and Lifecycle
categories: frontend
---

### React의 생명주기 (Life Cycle)이란

React 컴포넌트는 생명주기 즉 life cycle이란게 있는데, 이건 컴포넌트나 실행되거나 업데이트 혹은 제거될때 특정한 이벤트들이 발생한다.

### Mount

컴포넌트가 처음 실행될 때 그것을 Mount라고 표현한다. 컴포넌트가 시작되면 우선 context, defaultProps와 state를 저장한다. 그 후에 componentWillMount 메소드를 호출한다. 그리고 render로 컴포넌트를 DOM에 부착한 후 Mount가 완료된 후 componentDidMount가 호출된다.

주의할 점은, componentWillMount에서는 props나 state를 바꾸면 안된다. Mount 중이기 때문임. 그리고 아직 DOM에 render하지 않았기 때문에 DOM에도 접근할 수 없다.

componentDidMount에서는 DOM에 접근할 수 있다. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동을 한다.

### Props Update

props가 업데이트될 때의 과정이다. 업데이트되기 전에 업데이트가 발생하였음을 감지하고, componentWillReceiveProps 메소드가 호출된다. 그 후 shouldComponentUpdate, componentWillUpdate가 차례대로 호출된 후, 업데이트가 완료(render)되면 componentDidUpdate가 된다. 이 메소드들은 첫 번째 인자로 바뀔 props에 대한 정보를 가지고 있다. componentDidUpdate만 이미 업데이트되었기 때문에 바뀌기 이전의 props에 대한 정보를 가지고 있다.

shouldcomponentUpdate에서는 아직 render하기 전이기 때문에 return false를 하면 render을 취소할 수 있다. 주로 여기서 성능 최적화를 한다. 쓸데없는 update가 일어나면 여기서 걸러내는 거죠.

주의사항이 있는데, componentWillUpdate에서는 state를 바꿔서는 안된다. 아직 props도 업데이트하지 않았으므로 state를 바꾸면 또 shouldComponentUpdate가 발생한다. componentDidUpdate에서는 render이 완료되었기 때문에 DOM에 접근할 수 있다.

### State Update

setState 호출을 통해 state가 업데이트될 때의 과정이다. props update와 과정이 같지만, componentWillReceiveProps 메소드는 호출되지 않는다. 그리고 메소드의 두 번째 인자로는 바뀔 state에 대한 정보를 가지고 있다. componentDidUpdate는 두 번째 인자로 바뀌기 이전의 state에 대한 정보를 가지고 있다.

### Unmount

컴포넌트가 제거되는 것은 Unmount라고 표현한다. 더는 컴포넌트를 사용하지 않을 때 발생하는 이벤트가 있다. componentWillUnmount가 그것임. componentDidUnmount는 없다. 이미 제거된 컴포넌트에서 이벤트를 발생시킬 수는 없겠죠? componentWillMount에서 주로 연결했던 이벤트 리스너를 제거하는 등의 여러 가지 정리 활동을 한다.
