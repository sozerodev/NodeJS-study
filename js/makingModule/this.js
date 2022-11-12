console.log(this); // JS에서 this는 window(전역 객체)
// 전역 스코프의 this는 빈 객체 {} 가 된다. 
console.log(this === module.exports) // true

// Node에서 전역객체는 global. 

function a() {
    console.log(this === global);
}
a(); // true


