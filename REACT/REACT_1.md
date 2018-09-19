REACT_1
===================

App.js
--------------

### 컴포넌트 만들기

<p>

* 함수를 통해서 만들기.
* 클래스를 통해서 만들기.

~~~~~~~~~~~~~~~~~~
class App extends Component {

}
~~~~~~~~~~~~~~~~~~

</p>

### 클래스 형태의 컴포넌트

<p>

* 클래스 형태의 컴포넌트에서는 내부에서 JSX(HTML양식)를 return하는 render() 함수가 필수이다.

</p>

### 컴포넌트 내보내기

<p>

* 작성한 컴포넌트를 다른 곳에서 사용할 수 있도록 내보내기.

~~~~~~~~~~~~~~~~~~
export default App;
~~~~~~~~~~~~~~~~~~

</p>

index.js
-----------------

### 다른 파일에서 컴포넌트 불러오기

<p>

~~~~~~~~~~~~~~~~~~
import App from './App';
~~~~~~~~~~~~~~~~~~

</p>

### ReactDom.render

<p>

* 첫번째 파라미터: 렌더링 할 결과물 (App)
* 두번째 파라미터: 컴포넌트를 어떤 DOM에 그릴지. (root)

~~~~~~~~~~~~~~~~~~
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
~~~~~~~~~~~~~~~~~~

</p>

JSX
------------------

* 태그는 꼭 닫혀있다. (br, input 주의)
* CamelCase
* 주석: {/* */}
* 두 개 이상의 elements는 하나의 element로 묶여있다. (Fragment 사용권장)

~~~~~~~~~~~~~~~~~~
<Fragment>
  <div>
    Hello
  </div>
  <div>
    Bye
  </div>
</Fragment>
~~~~~~~~~~~~~~~~~~

* JSX 내부에서 자바스크립트 값 사용할 땐 {}

~~~~~~~~~~~~~~~~~~
<div>
  hello {name}!
</div>
~~~~~~~~~~~~~~~~~~

* 변수 선언 const: 변하지 않는 값
* 변수 선언 let: 변하는 값
* 조건부 렌더링: if문 사용 불가. IIFE사용하기. AND연산자와 삼항연산자, switch문 사용하기. 복잡한 조건문은 JSX 외부에서 로직 작성을 권장한다.

~~~~~~~~~~~~~~~~~~
//삼항연산자
<div>
  {
    1 + 1 === 2 
    ? (<div>맞아요!</div>)
    : (<div>틀려요!</div>)
  }
</div>
~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~
//AND문
<div>
  {
    1 + 1 === 2 && (<div>맞아요!</div>)
  }
</div>
~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~
//IIFE문
<div>
  {
    (function() {
      if (value === 1) return (<div>하나</div>);
      if (value === 2) return (<div>둘</div>);
      if (value === 3) return (<div>셋</div>);
    })()
  }
</div>
~~~~~~~~~~~~~~~~~~

* 화살표 함수: this, arguments, super개념이 없는 익명 함수

~~~~~~~~~~~~~~~~~~
//화살표 함수, IIFE문
<div>
  {
    (() => {
      if (value === 1) return (<div>하나</div>);
      if (value === 2) return (<div>둘</div>);
      if (value === 3) return (<div>셋</div>);
    })()
  }
</div>
~~~~~~~~~~~~~~~~~~

JSX STYLE
---------------------

* 객체 형식으로 작성
* class 대신 className을 사용한다.

~~~~~~~~~~~~~~~~~~
class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        hi there
      </div>
    );
  }
}
~~~~~~~~~~~~~~~~~~

* className을 이용한 style 편집

~~~~~~~~~~~~~~~~~~
import './App.css'

<div className = "App">
  blah blah
</div>   
~~~~~~~~~~~~~~~~~~

Props & State
-----------------------

### props

* 부모 컴포넌트가 자식 컴포넌트에게 주는 값
* 받아온 props는 수정할 수 없다.
* 조회할 땐 -> this.props.name
* 컴포넌트 불러오고 렌더링하기

~~~~~~~~~~~~~~~~~~~~~~~~
render() {
  return (
    <MyName name="리액트" />
  );
}
~~~~~~~~~~~~~~~~~~~~~~~~


> defaultProps : props의 기본값 설정
>> static defaultProps = {
>>    name: '기본이름'
>> }

### state

* 동적인 데이터 다루기
* 컴포넌트 안에서 state 정의

~~~~~~~~~~~~~~~~~~~~~~
state = {
  number: 0
}
~~~~~~~~~~~~~~~~~~~~~~

* 메소드 작성 & this.setState

~~~~~~~~~~~~~~~~~~~~~~
handleIncrease = () => {
  this.setState({
    number: this.state.number + 1
  });
}
~~~~~~~~~~~~~~~~~~~~~~

* this.setState 함수가 호출되면 컴포넌트가 리렌더링한다.
* 전개 연산자: ...

~~~~~~~~~~~~~~~~~~~~~~
state = {
  number: 0,
  foo: {
    bar: 0,
    foobar: 1
  }
}

//일때, 

this.setState({
  number: 0,
  foo: {
    ...this.state.foo,
    foobar: 2
  }
});
~~~~~~~~~~~~~~~~~~~~~~

Event 
--------------------

* CamelCase
* 이벤트에 전달해주는 값은 함수이다.

~~~~~~~~~~~~~~~~~~~~~~
<button onClick={this.handleIncrease}>+</button>
~~~~~~~~~~~~~~~~~~~~~~
        