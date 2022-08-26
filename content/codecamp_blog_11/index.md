---
emoji: 🧐
title: Lazyload, Preload
date: '2022-08-26 17:25:00'
author: leedawn
tags: Lazyload Preload
categories: frontend
---

### LazyLoad

이미지가 많은 사이트에서 한번에 모든 이미지를 다운받는다면 매우 느려짐.
따라서, 맨 위의 화면에 보이는 이미지만 로드 한 후 스크롤을 내리면서 이미지가 보여져야할 때마다 이미지를 로드하면 데이터의 낭비를 막을 수 있다.

그래서 어떻게 구현할 수 있을까? 웹 페이지 내 이미지는 2가지 방법으로 로드할 수 있다.

**\<img> 태그를 이용한 일반적인 방법**

첫번째로 이미지 로딩을 사전에 막는 방법이다. 일반적으로 \<img> 태그를 이용해서 이미지를 로드하기 위해 브라우저는 `src` 속성을 이용한다. 따라서 브라우저는 `src` 속성을 가지면 무조건 이미지를 로드한다!

그러므로 이미지들의 로딩을 지연시키려면 `src` 속성 대신 다른 속성에다가 이미지 URL을 넣으면 된다. 아래와 같이 `data-src`라는 속성에 이미지 URL을 지정하면, **브라우저는 src 속성이 비워져있다고 인식하고 해당 이미지를 로드하지 않는다.**

```html
<img data-src="https://ik.imgkit.io/demo/default-image.jpg" />
```

### PreLoad

이미지를 사전에 미리 로드해놓고, 필요할 때 이미 다운로드된 이미지를 보여줌으로써 렌더링 시간을 단축시켰다.

```typescript
import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      // "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  const onClickLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 프리로드</button>
      =======================================================
      {/* {isLoaded && (
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg" /> */}
      )}
      <button onClick={onClickLoad}>이미지 일반로드</button>
    </>
  );
}
```
