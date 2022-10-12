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


// 좀더 예쁘게 생략도 가능
/**
    exports.odd = odd;
    exports.even = even;
 */



// 근데 이건 안됨
/**
 * 
    
    // X
    exports.odd = odd;
    exports.even = even;
    // 위에 선언해놓고 밑에서 또 이렇게 넣으면 안된다.
    module.exports = {새로운 객체}


    exports.keyword = value; 를 사용하기 시작했으면 계속 이걸로 사용해야 한다.
    이거 사용하다가 밑에서 
    module.exports = 어쩌구; 쓰지 말라. 같이 쓸 수 없다! ****



 */