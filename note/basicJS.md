# 인강 필기

## 호출 스택 알아보기
- 호출 스택
- 백그라운드
- 태스크 큐

호출스택이 가장 우선. 비동기는 백그라운드에 있다가 호출스택이 끝났을 때 실행이 됨.
백그라운드에서 먼저 끝난 비동기가 태스크 큐로 들어감.
근데 `Promise`의 경우 새치기가 가능함!

```javascript
function oneMore(){
    console.log('one more');
}

function run() {
    console.log('run run');
    setTimeout(() => {
        console.log('wow');
    }, 0)

    new Promise((resolve) => {
        resolve('hi');
    }).then(console.log);

    oneMore();

}
setTimeout(run, 5000);

```
- 위의 실행순서는 다음과 같다.
```
// 5초 뒤 실행
run run
one more
hi  
wow 
```

- Promise가 setTimeout보다 먼저 실행된다. 
-  Promise의 then이 setTimeout보다 우선순위가 높기 때문

- 백그라운드는 자바스크립트가 아닌 c++/운영체제 쪽임. 이 부분은 JS엔진이 알아서 해주는 부분임. 백그라운드와 태스크큐는 다른 언어로 실행된다고 함. 멀티스레드로 돌아가게 해준다고 함. 자바스크립트 자체는 싱글스레드임. 
- 그래서 동시성이 있는 것. 
---

## var, const, let
- 레거시 파악을 위해 var의 특성은 알아둘 필요가 있음. 
- var는 블록 스코프를 무시함. (다만, function으로 감싸면 바깥으로 못빠져나감)
- let, const는 var를 완벽하게 대체함. 그러니 더이상 var를 쓰지말기

```javascript
if (true){
    // var는 블록 스코프를 무시함
    var x = 3;
}
console.log(x); // 3

function a(){
    // 하지만 함수 스코프는 존중함
    var y = 3;
}
console.log(y); // 에러발생

if (true){
    // 블록 스코프를 존중함
    const y = 3;
}
console.log(y); // Uncaught ReferenceError: y is not defined



```

- 다른 언어와는 달리 if나 for, while은 영향을 미치지 못한다.
- const, let은 함수 및 블록({})에도 별도의 스코프를 가진다.




### const
```javascript
const a = 3;
a = '5'; // 에러 발생

const b = {
    name: 'dev'
};
b.name = 'coder'; // 가능!

const c;
c = 'any'; // 불가능!
```
- 기본적으로 const를 선언하고 값을 바꿀 일이 있을 때 let을 쓰는게 좋다. 왜냐하면 실수로 값을 바꾸는 일을 막을 수 있기 때문. (취향차이)


---
## 템플릿 문자열, 객체 리터럴

```javascript
var won = 1000;
var result = '이 과자는 ' + won + '원입니다.';
// 이 과자는 1000원입니다.

const result = `이 과자는 ${won}원입니다.`;
```
- 백틱을 이용한 문법이 최신문법에 추가됨
```javascript
function a(){}
a();
a``; // 이것도 함수 실행이 가능하다 함
```

- 훨씬 간결한 문법으로 객체 리터럴 표현이 가능함!
- `{sayNode: sayNode}`와 같은 것을 `{sayNode}`로 축약 가능
- [변수 + 값] 등으로 동적 속성명을 객체 속성 명으로 사용 가능

```javascript
// 기존




```



```javascript
const sayNode = function() {
    console.log('Node');
}

const es = 'ES';

// 기존
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};

// 새 버전
const newObject = {
    sayJS() { // function이 아예 빠짐
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};

newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic
```

---

## 화살표 함수
- let, const와는 달리 화살표 함수는 function을 완벽하게 대체할 순 없다.
- function을 써야할 때도 있음!
- 화살표는 간결함이 장점

```javascript
function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}

// 리턴의 값에 괄호를 생략할 수도 있고 있어도 됨
const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}

// 매개변수가 하나면 괄호 생략이 가능
const not2 = x => !x;
```

- 기존
    ```javascript
    const obj = (x, y) => {
        return {
            x: x,
            y: y
        }
    }
    ```
- es6
    ```javascript
    const obj = (x, y) => ({x, y});
    ```
    - 이와같이 바로 객체를 return하는 경우에는 소괄호()가 필수임

</br>
- 기존함수가 사라지지 않은 이유는 `this` 때문임
- function에서는 this를 따로 갖는데, 화살표함수는 부모로부터 this를 받음 


```javascript
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this; //relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};

relationship1.logFriends();


const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();
```
- forEach의 function의 this와 logFriends의 this는 다름
- that이라는 중간변수를 이용하여 logFriends의 this를 전달

### 결론
- 따라서 this를 쓸거면 function을 쓰고, this를 안쓰면 화살표 함수를 사용

