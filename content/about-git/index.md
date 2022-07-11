---
emoji: 🐈‍⬛
title: 'Git 마스터 하기'
date: '2022-07-06 22:00:00'
author: leedawn
tags: git
categories: git
---

## Git과 Github 차이점

본론에 들어가기 앞서, 은근 헷갈리기 쉬운 주제를 정리해보자.
간단해보일지라도 면접에서 물어본다면 머리가 하얘질 수 있다,,,

- **Git** : 오픈 소스 버전 관리 시스템
- **Github** : 클라우드 서버를 이용해서 로컬에서 버전 관리한 소스코드를 업로드함. 소스 코드 공유가 가능한 원격 저장소

## Git 명령어

| 명령어      | 기능 설명                       |
| ----------- | ------------------------------- |
| git init    | 저장소 초기화                   |
| git status  | 현재 상태 확인                  |
| git add     | 현재 상태 추적                  |
| git commit  | 현재 상태 저장                  |
| git push    | 원격 저장소에 공유              |
| git clone   | 원격 저장소 복제                |
| git pull    | 원격 저장소에서 로컬로 업데이트 |
| git log     | 이력 확인                       |
| git reset   | 이전 상태로(이력 제거)          |
| git revert  | 이전 상태로(이력 유지)          |
| git switch  | 브랜치 변경                     |
| git merge   | 브랜치 합치기                   |
| git restore | 워킹 트리의 파일을 복원         |

## Git의 기초

![](../../assets/lifecycle.png)

워킹 디렉토리의 모든 파일은 크게 **Tracked(관리대상임)** 와 **Untracked(관리대상이 아님)** 로 나눈다.  
Tracked 파일은 또 **Unmodified(수정하지 않음)** 와 **Modified(수정함)**, 그리고 **Staged** 상태 중 하나이다.

### git add

파일의 변경사항을 인덱스(작업 트리와 저장소의 사이 공간)에 파일 상태를 기록한다. 이 과정을 stage - 스테이징한다고 표현하기도 한다.

예를 들어, 10개의 파일을 수정했지만 그 중에 7개만 repo에 올리고 싶을 때를 생각해볼 수 있다. 변경한 10개의 파일 중 7개를 선택하는 것을 '**스테이징(state)**'라고 한다.

### git commit

수정한 것을 커밋하기 위해서는 `Staging Area`에 올라가야한다는 것을 기억해야한다. Git은 생성하거나 수정하고 나서 `git add` 명령으로 추가하지 않은 파일은 커밋하지 않는다. 그 파일은 여전히 **Modified 상태**로 남아 있다. 

### git push

`git push`는 원격 저장소(remote repository)에 변경된 파일을 업로드하기 위해서 사용한다.




## 작업 분기

Git은 브랜치라는 고유의 작업 공간을 가지고 있기 때문에 서로 영향을 받지 않고 빠르게 브랜치를 전환할 수 있다. 동시에 여러 작업을 진행할 수 있다. 또한 여러 작업들을 최종적으로 합칠 수도 있다. 이 과정에서 동일한 파일을 수정하면 충돌이 발생하고 그 충돌을 해결하는 과정이 처음엔 꽤나 험난하다.. 😬

### git switch

```shell
# git checkout -b add-color # 예전 Git 버전 명령어
git switch (-c|-C) <new-branch>
```

정리하면서 가장 놀란 부분... 여태까지 `git checkout`을 사용하고 있었는데.. 예전 버전이라니 😟 하지만, 예전 버전의 명령어도 돌아가는데.. 굳이 `switch`로 써야하는건지 의문이 들어 찾아봤다.

[Git 2.23](https://github.blog/2019-08-16-highlights-from-git-2-23/)에서 checkout을 대신할 switch, restore가 도입되었다고 한다. checkout이 대체된 이유는 하나의 명령어가 가진 기능이 너무 많기 때문이다. 문서에서는 아래과 같이 정의를 명확히 해놓았다.

- **checkout**: Switch branches or restore working tree files
- **switch**: Switch branches
- **restore**: Restore working tree files

사용법

```shell
$ git switch develop
```

결과

```shell
'develop' 브랜치로 전환합니다
브랜치가 'upstream/develop'에 맞게 업데이트된 상태입니다
```

아래와 같이 `-c` 옵션을 이용해서 브랜치를 새로 만들면서 브랜치 변경까지 할 수 있다.

```shell
$ git switch -c <new branch>
```

결과

```shell
새로 만든 'new-branch' 브랜치로 전환합니다
```

### git merge

`git merge`는 브랜치를 합칠 때 사용한다.

```shell
$ git switch main
$ git merge <branch name>
$ git log
```

1. 반영할 브랜치로 이동
2. 합칠 브랜치 이름과 함께 `merge` 입력
3. 전체 커밋 메시지 확인

### conflict

협업을 진행할 때 대부분 서로 다른 작업을 진행하기 때문에 문제없이 머지가 된다. 하지만, 같은 파일을 수정하는 경우가 종종 있는데.. 이 때 충돌은 피할 수 없다...😇

충돌을 해결하는 방법은 2가지가 있는데, **1. 머지 작업을 취소**하거나 **2. 충돌을 해결하고 커밋**을 한다.

```shell
<<<<<<< HEAD
뻘건색
=======
붉은색
>>>>>>> update-red
```

충돌이 발생하면 양쪽 브랜치에서 동시에 변경된 사항을 표시해준다. <<<<<<<, =======, >>>>>>> 이 내용이 충돌이 발생한 지점을 의미한다. 두 개의 브랜치에서 작성한 내용 중 어떤 내용이 맞는지 개발자가 판단하여 선택해야 한다.

여기선, 붉은색만 남기고 다른 줄을 삭제하겠다. <<<<<<<, 뻘건색, =======, >>>>>>>를 모두 제거!

충돌을 해결했다면 기존과 동일하게 커밋을 진행한다. 이 때 `-m`으로 커밋 메시지를 작성하지 않아도 된다. 충돌을 수정한 내용을 자동으로 메시지를 만들기 때문이다.

결과

```shell
[main bb77c83] Merge branch 'update-red'
```

## 되돌리기

일을 하다보면 모든 단계에서 어떤 것은 되돌리고(Undo) 싶을 때가 있다. 이번에는 우리가 한 일을 되돌리는 방법을 살펴보자.

### git restore

`restore`은 워킹 트리의 파일을 복원해주는 역할을 한다. `README.md` 파일을 수정했는데 복원하고 싶다고 해보자.

```shell
$ git restore README.md
```

뿐만 아니라 `git add`를 통해서 수정 내용을 stage에 이미 넣었을 때 다시 뺄 때도 `restore`을 이용하면 된다!

### git amend

종종 완료한 커밋을 수정해야할 때가 있다. 너무 일찍 커밋했거나 어떤 파일을 빼먹었을 때, 또는 커밋 메시지를 잘못 적었을 때 정도겠다. 다시 커밋을 하고 싶다면 파일을 수정하고, Staging Area에 추가한 다음 `--amend` 옵션을 사용하여 커밋을 재작성할 수 있다. 

```shell
$ git commit --amend
```

### git reset

특정 커밋까지의 이력을 초기화한다. 바로 전 or n번 전까지 작업했던 내용을 취소할 수 있다. (⚠️ 하지만, 이력이 지워지기 때문에 주의해야한다!)

```shell
$ git log
$ git reset <커밋 아이디> --hard # 커밋 아이디 예) 27a00b7 (앞에 7자 정도 복사)
```

결과

```shell
HEAD is now at 27a00b7 v2 commit
```

### git revert

특정 커밋을 취소하는 새로운 커밋을 만든다. 예를 들어, a, b, c를 차례로 커밋하고 마지막 커밋인 c를 취소했다고 생각해보자. 3번째 커밋을 취소하는 새로운 커밋을 생성하여 마치 2번째 커밋으로 돌아간 것 같지만 기존 이력을 유지한다.

일반적으로 특정 버전을 배포했는데 문제가 생기면 문제가 생긴 커밋을 `revert` 한다. (빠른조치/롤백) 다시 원복한 상태로 작업을 이어서 하고 문제를 수정하면 다시 커밋하는 방식을 사용한다.

```shell
$ git log
$ git revert <v3 커밋 아이디> # 커밋 아이디 예) 306b947 (앞에 7자 정도 복사)
$ git log
```

> vi 창이 열리고 메시지를 입력하는 창이 나오면 침착하게 esc키를 누르고 :x를 입력하고 엔터를 누른다.

결과

```shell
Removing green
[main 5a9a926] Revert "v3 commit"
 3 files changed, 1 insertion(+), 1 deletion(-)
 delete mode 100644 green
 create mode 100644 red
```


> 인용 :  
> https://subicura.com/git/  
> https://blog.outsider.ne.kr/1505  
> https://git-scm.com/book/ko/v2
