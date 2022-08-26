---
emoji: 🧐
title: Optimistic UI
date: '2022-08-26 16:55:00'
author: leedawn
tags: Optimistic UI
categories: frontend
---

### Optimistic-UI

낙관적 UI라고도 한다. 보통 mutation을 날리고 응답을 받을 때까지 기다려야한다. 하지만 그렇게 하지 않고 바로 사용자에게 UI가 보여지는 것처럼 속이는 것을 Optimistic UI라고 한다.

1. 성공 확률이 99%인 요청에 적용 2. 혹시 실패하더라도, 큰 영향이 없는 요청에 적용한다.
   예를 들어, 결제에 달아놓으면 큰일남 ㅎ

게시판 좋아요 기능에 **`Optimistic-UI`**를 적용한다고 해보자.

1. 브라우저에서 백엔드로 API를 요청한다.
2. 브라우저에서 useQuery를 날리면 바로 백엔드로 가는 게 아니라 apolloCache를 먼저 확인한다. (cache-first가 default여서)
3. 캐시값을 받아오는 걸 기다리지 않고 바로 화면에서 +1,, (**Optimisic-UI**)
4. cache 확인하고 백엔드로 api 넘어가서 DB에서 데이터를 찾아, 좋아요 +1 올려줌
5. apolloCashe를 백엔드에서 받아온 데이터 값으로 덮어씌운다.

### Scraping, Crawling

- Scraping : html 코드 긁어오기 (한번만)
  [cheerio](https://www.npmjs.com/package/cheerio)
- Crawling : html 코드 긁어오기 (정기적으로)
  [puppeteer](https://www.npmjs.com/package/puppeteer)

**API 요청하는 방법(REST API endpoint)**

1. 브라우저(받은 reponse가 html이면 해석해서 렌더링하는 능력이 있음) - 얘도 GET 요청
2. postman
3. terminal curl ~

스크랩핑을 할 때 **브라우저**에서는 `CORS 정책`때문에 막힐 수 있음.

**CORS**

- 모바일
- 백엔드에서 우회해서 요청하는 방법(**proxy server**)

### SSR이 필요한 상황

중고마켓에서는 각 상품에 대한 og를 하드코딩할 수가 없다.(동적 페이지)

⇒ `**useQuery**`로 받아와야함. 하지만, 이렇게 만들면 초기 렌더링을 했을 때는 백엔드 요청을 하지 않기 때문에 메타태그가 비어있다.

따라서, html을 브라우저에 보내주기 전에 먼저 프론트엔드 서버에서 로직을 실행할 수 있게 한다.(axios, useQuery, useMutation 등) ⇒ `**getServerSideProps()**`

![스크린샷 2022-08-18 오후 1.14.50.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df65986a-e73f-4984-8b01-29acb0f95d70/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-08-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.14.50.png)

서버 사이드 렌더링이 필요한 이유 중 **검색 엔진 최적화(SEO)**가 가장 많이 언급된다.

```jsx
import { useMutation,gql,useQuery } from "@apollo/client"

//좋아요 갯수 가지고 오는 api _ 게시글 조회 api에서 좋아요 갯수만 뽑아 옵니다.
const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!){
		fetchBoard(boardId: $boardId){
			_id
			likeCount
		}
	}
`

//좋아요 카운트 올리는 api
const LIKE_BOARD = gql`
	mutation likeBoard($boardId:ID!){
		likeBoard(boardId:$boardId)
	}
`

export default function(){
	const [likeBoard] = useMutation(LIKE_BOARD)
	const { data } = useQuery(FETCH_BOARD,
														{variables :{boardId : "게시글 아이디 넣어주세요!"} })

	const onClickOptimisticUI = ()=>{
		//likeBoard 뮤테이션 함수를 실행하겠습니다.
		likeBoard({
			variables :{
				boardId : "게시글 아이디 넣어주세요!"
			},

		// 응답을 받고난 후 받아온 응답을 다시 fetch 해줍니다. -> 느리고 효율적이지 못합니다.(백엔드에 요청을 한번더 해야하고 받아올때 까지 기다려야 합니다.)
		//refetchQueries: [
		//	{
		//		query: FETCH_BOARD,
		//		variables : {	boardId : "//게시글 아이디 넣어주세요!" }
		//	}
		// ]

		**//옵티미스틱 UI -> 캐시를 바꾸고 캐시값을 받아오는걸 기다리지 않고 바로 바꿔줍니다.**
		**optimisticResponse: {
			likeBoard : (data?.fetchBoard.likeCount || 0)+1
		},**
		**// apollo 캐시를 직접 수정을 할 수 있었습니다.(백엔드 캐시가 아닙니다.) -> 느리지만 효율적입니다. (백엔드에 요청은 안하지만, 받아올때까지 기다려줘야 합니다.)
			update(cache,{data}){
				// 이전 시간에는 modify를 사용했지만, 오늘은 writeQuery를 사용해보겠습니다.
				cache.writeQuery({
					query : FETCH_BOARD,
					variables : {boardId:'게시글 아이디 넣어주세요!'}
					//어떻게 수정할 것인지는 아래에 적어줍니다.
					data: {
						fetchBoard: {
							_id : '게시글 아이디 넣어주세요!',
							__typename : "Board"
							likeCount: data?.likeBoard
						}
					}
				})
			}**
		})
	}

	return(
		<div>
				<h1>옵티미스틱 UI</h1>
				<div>현재카운트(좋아요):{data.fetchBoard.likeCount}</div>
				<button onClick={onClickOptimisticUI}>좋아요 올리기!!</button>
		</div>
	)
}
```
