require('./var'); // 변수는 안가져오고 다른 파일을 실행만 하고 싶을 때 사용

console.log(require);

// 자바스크립트를 node로 실행하면 그 파일들은 대부분 모듈이 된다.
// module.exports = {} // 빈 객체를 다른 파일에서 쓸 수 있게 해주는 모듈이 되는 것 


// require.main으로 어떤 파일을 실행할 것인지 알아낼 수 있다. 

// require.cache
// 한번 require한 모듈에 대한 캐싱 정보가 들어 있음. 



