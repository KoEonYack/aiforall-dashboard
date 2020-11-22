# 모인활 대시보드 2.1 ver


![img](img/index.png)


- 공개날짜: 20. 04. 11.
- 개발자: 고언약 HGU 13 [Github](https://github.com/koeonyack)
- 20-2학기 운영자: 이원빈 HGU 19 [Github](https://github.com/Handong-Promi)


## Code

- 구조

```
App.js
    - HeaderPage
    - Container <- 주로 수정

```

- 일정 className

``` html
<td className="future-due">3/05 23:55</td>
<td className="over-due">3/05 23:55</td>
<td className="in-due">3/05 23:55</td>
```

- 이미지 삽입 시

```html
<img src="https://github.com/Handong-Promi/aiforall-dashboard/blob/master/src/img/HGUsky.jpg?raw=true" width="30%"  className="bible-img" />
```

> 위 코드와 같이, img source url 맨 끝에 `?raw=true` 붙여줘야 이미지가 정상적으로 출력됨.

## Local 

``` bash
npm start
```


## Deploy

``` bash
npm run deploy
```

