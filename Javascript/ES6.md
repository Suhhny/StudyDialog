Javascript ES6
==========================

const, let
-----------------------------

* const와 let은 블록스코프(지역변수 개념) <br/>
    해당 변수를 해당 블록에서만 접근할 수 있다.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const c = [1, 2, 3];
c[0] = 4;
c;                                // [4, 2, 3]
const d = {name: 'Zero'};
d.name = 'One';
d;                               // {name: 'One'} 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object
----------------------------

* 메소드 줄여쓰기. function(){} 사용 X
* 동적 속성 생성.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Function
------------------------------

