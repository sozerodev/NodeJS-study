# 모듈 만들기
## 노드는 자바스크립트 코드를 모듈로 만들 수 있다.
- 모듈: 특정한 기능을 하는 함수나 변수들의 집합
- 모듈로 만들면 여러가지 프로그램에서 재사용이 가능하다.


```javascript
// var.js
const odd = '홀수';
const even = '짝수';

module.exports = { odd, even }

// ------
// index.js
const { odd, even } = require('./var');


```
- 노드의 모듈 시스템



```javascript
// var.js
const odd = '홀수';
const even = '짝수';

module.exports = { odd, even }

// -------
// index.js
import { odd, even } from './var';


```
- 자바스크립트의 모듈 시스템


### 노드는 왜 자바스크립트의 모듈 시스템을 안쓰냐..?
- 노드에서도 쓸 수는 있다. 자바스크립트보다 노드에서 먼저 모듈 시스템이 나왔는데, 노드와 자바스크립트의 모듈 시스템이 일치가 되지 않았을 뿐임.
- 노드에서도 사용은 가능함!!!

```javascript
// var.js
const odd = '홀수';
const even = '짝수';

export default { odd, even };

// index.js
import { odd, even } from './var';


```


### 단... (export와 this 강의 참고)
- require와 import가 1대1로 대응되진 않음. 동작이 살짝 다름.
- export default와 module.exports도 동작이 다름.
- 대부분은 바꾸면 그대로 바꿔지나... 안바꿔지는 것도 있으니 주의.
- 노드 16버전되면 거의 그대로 들어올 수도 있으나... 
- 아무튼 완전 같은 것은 아님에 주의

### `module.exports`, `exports.keyword = value`
- 둘 중 하나만 써야지 둘 다 쓸 수는 없다.
```javascript
exports.odd = odd;
exports.even = even;


// 위에 이렇게 선언해버렸다면 밑에 이렇게 사용은 안됨
module.exports = {
    odd,
    even
}

// 두 가지 방식 중 하나만 사용해야 한다.
```
- 보통 하나를 리턴할 때에는 `module.exports` 
- 두개 이상을 리턴할 때에는 `exports.key = value`
