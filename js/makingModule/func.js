// require는 노드 제공 함수
const value = require('./var') // .js 생략 가능
// 구조분해 할당도 가능
const {odd, even} = require('./var')

// 최신 문법식
// import { odd, even } from './var';

console.log(value); // { odd: '홀수', even: '짝수' }


console.log(odd) // 홀수
console.log(even) // 짝수


function checkOddOrEven(number){
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}

// 다른 데서 가져온 변수(odd, even)를 사용한 
// checkOddOrEven함수를 다시 export하는 것도 가능
module.exports = checkOddOrEven;

// 여러 개를 내보내고 싶다면 이렇게도 가능
// 다른 데서 넘겨받은 변수를 또 넘기는 것도 가능하다.
// 다만, module.exports는 한번만 선언 가능
/**
 module.exports = {
     checkOddOrEven,
     odd,
     even
 }
 */

 // 최신문법은 이렇게
 // export default checkOddOrEven;