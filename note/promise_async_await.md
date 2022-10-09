# Promise
- 콜백 헬 이라 불리는 지저분한 JS 코드의 해결책
- 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
- then을 붙이면 결과를 반환함
- 실행이 완료되지 않았으면 완료된 후에 then 내부 함수가 실행됨 

- Resolve(성공리턴값) => then으로 연결
- Reject(실패리턴값) => catch로 연결
- Finally 부분은 무조건 실행

```javascript
const condition = true; // true면 resolve, false면 reject

const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있다.

promise
    .then((msg) => {
    console.log(msg); // 성공(resolve)한 경우 실행
    })
    .catch((err) => {
        console.log(err); //실패(reject)한 경우 실행
    })
```


- 프로미스는 코드를 분리할 수 있냐 없냐에 큰 차이가 있다.


### promise를 사용하지 않는다면?

```javascript
function callback(){}
setTimeout(callback, 3000); // 이게 최선... 콜백은 무조건 비동기 안에 있어야 함\
```

### promise를 사용한다면?

```javascript
const promise = setTimeoutPromise(3000);

console.log('딴짓~');
console.log('좀 하다가~');
console.log('내가 프로미스 끝낫으면 할 때~');
console.log('그때 실행시키고싶어~');
console.log('바로 지금 아래에서~');

promise.then(() => {
    console.log("바로 지금~! promise를 실행할래!!!");
});

```

- 이렇게 코드 분리가 가능하다!

```javascript
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result); // ['성공1', '성공2'];
    })
    .catch((err) => {
        console.error(err);
    });


// Promise.all(배열): 여러 개의 프로미스를 동시에 실행이 가능함
// allSettled로 실패하면 catch로 간다.

```


# async/await
- 어싱크가 아니고 에이싱크로 발음하래요...
- 어웨잇은 어웨잇 ㅎ
- ajax도 아작스가 아니고 에이잭스 하핫

## async funciton의 도입
- 변수 = await 프로미스; 인 경우 프로미스가 resolve된 값이 변수에 저장
- 변수 await; 인 경우 그 값이 변수에 저장

```javascript
async function findAndSaveUser(Users) {
    let user = await Users.findOne({}); // 실행 순서가 오른쪽에서 왼쪽
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender: 'm'});

    // 생략...
}
```

- 대신 `await`을 쓸 때에는 함수 앞에 `async`가 붙어 있어야 함


```javascript
const promise = new Promise(...)
promise.then((result) => ...)
// 옛날은 안됐지만 지금은 된다. 
const result = await promise;


// 왜 옛날에 안됐냐면 await을 쓰려면 async function 안에만 있어야 했기 때문 (밑에처럼)
async function main() {
    const result = await promise;
}
main();

```

- 그리고 또 하나..!

```javascript
async function main() {
    const result = await promise;
    return 'zerocho'; // return result를 해도 된다.
}

// 주의!!! async함수에서 return한 값들은 무조건 then으로 받아야 한다!!!! async도 promise임. promise를 간단하게 만든 것일 뿐이기 때문! 
main().then((name) => ...) // name에는 main의 return값이 들어감
```

- 대신 promise는 resolve를 처리할 순 있으나 reject를 처리할 수 없으니 안에서 따로 다음과 같이 try-catch를 사용한다.

```javascript
async function main() {
    try{
        const result = await promise;
        return 'zerocho'; // return result를 해도 된다.
    } catch(err) {
        console.log(err);
    }
}

main().then((name) => ...) 
```

### for await of (노드 10 이상)
- for await (변수 of 프로미스배열)
- resolve된 프로미스가 변수에 담겨 나옴
- await을 사용하기 때문에 async 함수 안에서 해야 함

```javascript
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})
```




### 추가! axios
- `axios`는 프로미스 기반의 코드라 async/await 사용이 가능

```javascript
axios.get(url)
    .then((result) => {
        console.log(result.data);
    })
    .catch((error) => {
        console.error(error);
    });


(async() => {
    try {
        const result = await axios.get(url);
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
})

```

### 추가! 주소창에 한글을 입력하면 서버가 처리하지 못하는 경우가 있다!
- encodeURIComponent로 한글을 감싸줘서 처리가 가능하다
```javascript
(async() => {
    try {
        const result = await axios.get(url/${encodeURIComponent('한글url')});

        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
})();
```

- 서버에서는 decodeURIComponent를 통해 해석하면 된다.