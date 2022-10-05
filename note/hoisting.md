# 호이스팅
1. 변수 호이스팅
    - 다음과 같이 코드를 짰다고 가정해보자.
    ```Javascript
    function doSomething(){
        var a = 10;
        console.log(a); // 10
        console.log(b); // undefined

        var b = 100;
    }
    doSomething();
    ```

    - 자바스크립트에서 변수를 선언하면 변수선언부가 최상단으로 올라가게 된다.
    ```Javascript
    function doSomething(){
        var a = 10;
        var b;
        console.log(a); // 10
        console.log(b); // undefined

        b = 100;
    }
    doSomething();
    ```

    - 변수의 경우 사실 호이스팅이 큰 문제가 되지 않는다. 그러나...
2. 함수 호이스팅
    - 변수 호이스팅과 유사하나..
    - 자바스크립트에는 함수를 선언하는 방식이 두 가지가 있다. 
    ```Javascript
    // 1. literal function
    function doSomething(){
        console.log('doSomething')
    }

    // 2. 변수에 익명함수를 집어넣기
    var doSomething2 = function() {
        console.log('doSomething')
    }
    ```
    - 두 방법 모두 함수를 선언한 뒤에 호출하는 것은 문제가 안된다.
        ```Javascript
        function doSomething(){
            console.log('doSomething')
        }

        var doSomething2 = function() {
            console.log('doSomething')
        }
        doSomething(); // "doSomething"
        doSomething2(); // "doSomething"

        ```
    - 그러나 함수 선언 전에 윗쪽에서 실행하게 되면 doSomething2가 function이 아니라고 나온다. 
        ```Javascript
        doSomething(); // "doSomething"
        doSomething2(); // undefined
        function doSomething(){
            console.log('doSomething')
        }

        var doSomething2 = function() {
            console.log('doSomething')
        }

        ```
    - 왜냐하면 `function` keyword로 literal 함수를 만들면 자바스크립트가 실행될 때 해당 함수를 가장 위로 끌어올려 `함수 호이스팅`이 이뤄지기 때문이다. 
    - 문제는 변수 키워드를 통해 함수를 만들 경우...다음과 같이 호이스팅된다.
        ```Javascript
        var doSomething2; // undefined
        function doSomething(){
            console.log('doSomething')
        }

        doSomething(); // "doSomething"
        doSomething2(); // undefined

        doSomething2 = function() {
            console.log('doSomething')
        }
        ```
    - 따라서 함수를 변수에 넣어서 선언하는 케이스의 경우 특히 주의를 해야 한다. 
    - 변수에 함수를 넣고싶다면 가능한 윗쪽에 두는 것이 좋다. 가장 좋은 방법은... 그냥 함수 호출 전에 함수를 선언하는 것이 좋다. 
    - 자바스크립트는 기본적으로 변수를 선언하게 되면 최상단으로 이동시키는 반면.. function키워드를 사용해 만든 함수는 함수 자체를 윗쪽으로 끌어들이기 때문에 함수 선언을 나중에 하더라도 그 전에 실행이 가능하다. (호이스팅이라는 자바스크립트의 특성 중 하나))