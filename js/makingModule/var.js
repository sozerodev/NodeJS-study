const odd = '홀수';
const even = '짝수';

// 다른파일에서 쓰고싶은 변수를 집어 넣는다.
// 객체를 module.exports에 넣어준 것
module.exports = {
    odd, // odd: odd라 할 수 있으나 key, value가 동일하니 생략 가능
    even,
};

// module.exports에 변수 하나만 넣을 수도 있고, 
// [odd, even] 이런 식으로 넣을 수도 있다.

// JS식
// export default { odd, even };

