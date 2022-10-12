# 노드 내장 객체 알아보기
- module.exports, require같은 거. 
- global (globalThis로도 가능)

```javascript
// 주로 객체를 콘솔에 찍을 때 사용
console.dir({hello: 'hello'})





// console.time(keword) & console.timeEnd(keyword)
console.time('myTimer');

// 무언가를 한다.... 
// do somthing

console.timeEnd('myTimer'); // myTimer가 시작해서 끝난 시간을 알려줌



// 함수 안에서 사용하면 호출 스택 로깅
console.trace() 


// 객체 리스트를 console.table에 찍으면 표로 보기 좋게 찍어 보여줌
console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1988}])

```

- clearImmediate(콜백함수): 콜백함수를 즉시 실행한다.
    - 사실 아래와 큰 차이가 없다.
    ```javascript
    setTimeout(() = > {
        console.log('hi');
    }, 0)
    ```
    - 거의 똑같다 보면 되는데 실행순서에서 조금 차이가 난다.
    - setTimeout에 0을 넣을거라면 그냥 이걸 쓰자.
    - 근데 0초만에 실행할거면 왜 쓰는데요..?
        - 콜백함수가 백그라운드로 들어가 동시에 실행할 수 있기 때문. (JS의 실행순서는 백그라운드 -> 테스크큐 -> 이벤트 루프 -> 호출스택 을 거치기 때문) 

---
## __filename, __dirname
- `__filename`: 현재 파일 경로
- `__dirname`: 현재 폴더(디렉토리) 경로
- 노드에서는 브라우저와 달리 내 컴퓨터에 접근이 가능함. 파일을 지우고 생성할 수 있기에 노드로 자바스크립트를 실행할 때에는 해커가 심어놓은 파일이 없는지 주의해야 함.(안그러면 내 피땀눈물들 날아간다...)
 