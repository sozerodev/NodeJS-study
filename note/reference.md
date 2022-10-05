# Reference 타입

1. Date
```Javascript
var date = new Date();
console.log(date) 
```
- 자바스크립트의 사용시간대와 우리나라 사용시간대는 다름에 주의
- 날짜를 다루는 객체이기에 날짜 관련 내부 기능이 많이 있음
- 문제는 자바스크립트에서 이 date를 사용하는 방법이 비효율적이다.
- 따라서 자바스크립트에서 날짜 관련 기능을 만들 때에는 Date를 바로 쓰기 보다 [moment](https://momentjs.com/) 나 [Luxon](https://moment.github.io/luxon/#/) 을 사용하는 것이 좋다. 
 
- 자바스크립트 기본 Date는 문제가 많은 듯 하다. [여기서도 지적](https://youtu.be/CSWc0HYjxEs)을 한다.



2. Regexp(Regular Expression)
```javascript
var reg1 = /abc/; // 리터럴 표기법
var reg2 = new RegExp("/abc/", "g"); // 객체방식
```
- 리터럴 표기법의 장점은 다음과같이 if문에서 즉시 정규식을 통해서 필터링이 가능하다는 장점이 있다. 
    ```javascript
    if(/abc/.test('abc')) {
        console.log('passed');
    }
    ```

3. Array
- 자바스크립트는 배열을 만드는 법이 두 가지 있다.
    ```javascript
    // 1. 생성자로 만들기
    var arr1 = new Array();

    // 2. 리터럴 배열
    var arr2 = [];

    arr2.push('a', 'b', 'c');
    console.log(arr2, arr2.length); // ['a', 'b', 'c'] 3
    ```
- 자바스크립트는 배열의 크기가 유동적이기 때문에 데이터를 넣는만큼 늘어난다는 장점이 있다. 
- JS는 다이나믹언어이기 때문에 배열에 들어가는 요소의 타입도 상관 없다.
- 또 배열 안에 리터럴 오브젝트를 넣을 수도 있다.
    ```javascript
    var arr2 = [];
    arr2.push({
        a: 'a'
    })
    ```



4. Function
- 자바스크립트에서 function은 자료형으로 취급하기 때문에 단순 선언 이외에도 함수의 return값이나 매개변수를 넣어줄 수 있다.

```javascript
// 1. literal function
function add(a, b) {
    return a + b
}

// 2.
var minus = function (a, b){
    return a - b;
}
```
- 이 두 방식은 별 차이 없어보이나...
- [호이스팅](./hoisting.md) 부분에 있어서 큰 차이가 있음
- 또, 자료형으로 취급하기 때문에 변수에 바로 넣어줄 수가 있다. 이때 함수는 minus라는 변수에 익명함수(또는 람다함수)로 들어가는 것임
- 함수를 return하는 것도 가능함
    ```javascript
    function createAdd(){
        return function(a, b) {
            return a + b;
        }
    }

    var add2 = createAdd();
    console.log(add2(1, 3)); // 4
    ```
    - 이러면 add2의 변수에 마지막 익명함수가 들어간다.
- 함수를 함수의 parameter로 넣을 수도 있다.
    ```javascript
    function createFunction(fn){
        return fn;
    }

    var add3 = createFunction(function(a, b) {
        return a + b
    })

    console.log(add3(10, 20)); // 30
    ```


5. Object
- 자바스크립트는 객체지향인 OOP 언어이다. 
- 그러나.. 일반적으로 공부한 class기반 언어와는 다르다. 
    ```javascript
    //Object
    var person1 = {
        name: 'modernator', 
        age: 26
    }

    // 생성자로 만들기 
    function Person(name, age){
        this.name = name;
        this.age = age;
    }

    var person2 = new Person('Entvy', 26);
    ```

- 그런데.. Object도 데이터 타입으로 취급하기 때문에 함수의 인자나 return값으로 반환이 가능하다.
- 이러한 객체 사용방식도 있다.
    ```javascript
    function createPerson(name, age){
        return {
            name: name,
            age: age
        }
    }
    ``` 
    - 생성자로 만든 방식이 아녀도 같은 결과를 가져올 수 있다.
    - 생성자의 경우 `new` 키워드를 잊으면 원하는 결과가 나오지 않을 수도 있으나.. 이러한 방식은 new를 쓰든 안쓰든 똑같은 결과가 나온다. 



## 중요
- 이러한 객체들의 경우 Primitive타입과 달리 Reference타입으로 불린다.
- 왜냐하면 
    ```javascript
    var obj1 = {
        a: 1
    }

    var obj2 = obj1;
    obj2.a = 3

    console.log(obj1.a); // 3
    ```
- 다음과 같이 obj2가 obj1을 참조함을 알 수 있다. 
- 따라서 `깊은 복사`가 필요함


- primitive 타입의 경우..
    ```javascript
    var num1 = 10;
    var num2 = num1;
    num2 = 30;
    console.log(num1); // 10
    ```
    - num1의 값이 바뀌지 않는다. 
    - primitive타입에서 대입을 하면 그 데이터의 값을 복제하게 된다. 따라서 num2의 값을 바꿔도 num1의 값에 영향을 미치지 않는다. 




### 참고
https://www.youtube.com/playlist?list=PLHAZLmfOjvbINoq1J_4JjYlL24ubOLbR5