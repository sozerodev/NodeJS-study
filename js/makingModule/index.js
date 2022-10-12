const { odd, even } = require('./var');
const checkNumber = require('./func'); // 가져오는 함수명과 받는 변수명이 달라도 상관없다.

function checkStringOddOrEven(str){
    if (str.length % 2){
        return odd;
    } else {
        return even;
    }
}

console.log('-------------')
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
console.log('-------------')
