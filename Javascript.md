Javascript
==========================

***const, let***

* const와 let은 블록스코프(지역변수 개념) <br/>
    해당 변수를 해당 블록에서만 접근할 수 있다.

```javascript

const c = [1, 2, 3];
c[0] = 4;
c;                                // [4, 2, 3]
const d = {name: 'Zero'};
d.name = 'One';
d;                               // {name: 'One'}

```

***Object***

* 메소드 줄여쓰기. function(){} 사용 X
* 동적 속성 생성.

```javascript

const a = 1;
const b = 'Wow';
const sayYeah = () => {
  alert('Yeah');
};
const object2 = {
  sayHello() {
    alert('hello');
  },
  sayYeah,
  [a + 3]: 'four', // 4: 'four'
  ['say' + b]() {
    alert('Wow');
  }  // sayWow() { alert('Wow') }
};

```

***Status***

```javascript

res.status(500).json({ success: false, error: 1 })
// error번호 1번, 500상태 발생 => error catching

res.status(200).json({ success: true, list })
// error 없음, list json 전송

```

***Built-In***

```
array.includes(a);
```

```
str1.indexOf(str2);
```

```
const formData = new FormData();
formData.append('key', 'value');
```

```
URL.createObjectURL(photo);
```

```
catch( () => Promise.reject({ error: 0 }) );   // error code 0
```

```
Array.filter((obj) => return obj._id !== action.payload.id)  // 배열에 return값에 해당하는 element만 남겨둠.
```






























