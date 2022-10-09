# 비구조화 할당
 
```javascript
const example = {
    a: 123, 
    b: {
        c: 135, 
        d: 146
    }
}
// 이런 방식을 예전엔 썼으나.. 
const a = example.a;
const d = example.b.d;

// 지금은 이렇게도 가능!
const {a, b: { d }} = example;
console.log(a); // 123
console.log(d); // 146


// -----
arr = [1, 2, 3, 4, 5]
const x = arr[0]
const y = arr[1]
const z = arr[4]

const [x, y, ... z] = arr;
```


## 주의
- this는 함수를 호출할 때 어떻게 호출되었느냐에 따라 결정되기 때문에, this를 사용할 때 구조분해하면 문제가 생긴다.