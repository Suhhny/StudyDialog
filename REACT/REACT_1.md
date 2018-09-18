REACT_1
===================

App.js
--------------

### 컴포넌트 만들기

<p>

* 함수를 통해서 만들기.
* 클래스를 통해서 만들기.

<pre><code>class App extends Component {

}
</code></pre>

</p>

### 클래스 형태의 컴포넌트

<p>

* 클래스 형태의 컴포넌트에서는 내부에서 JSX(HTML양식)를 return하는 render() 함수가 필수이다.

</p>

### 컴포넌트 내보내기

<p>

* 작성한 컴포넌트를 다른 곳에서 사용할 수 있도록 내보내기.

<pre><code>export default App;
</code></pre>

</p>

index.js
-----------------

### 다른 파일에서 컴포넌트 불러오기

<p>

<pre><code>import App from './App';
</code></pre>

</p>

### ReactDom.render

<p>

* 첫번째 파라미터: 렌더링 할 결과물 (App)
* 두번째 파라미터: 컴포넌트를 어떤 DOM에 그릴지. (root)

<pre><code>ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
</code></pre>

</p>

JSX
------------------

* 태그는 꼭 닫혀있다. (br, input 주의)
* 주석: {/* */}
* 두 개 이상의 elements는 하나의 element로 묶여있다. (Fragment 사용권장)
<pre><code><Fragment>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </Fragment>
</code></pre>

* JSX 내부에서 자바스크립트 값 사용할 땐 {}

<pre><code><div>
        hello {name}!
      </div>
</code></pre>

* 변수 선언 const: 변하지 않는 값
* 변수 선언 let: 변하는 값
* 조건부 렌더링: if문 사용 불가. IIFE사용하기. AND연산자와 삼항연산자, switch문 사용하기. 복잡한 조건문은 JSX 외부에서 로직 작성을 권장한다.

<pre><code>//삼항연산자
        <div>
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
</code></pre>

<pre><code>//AND문
        <div>
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }
      </div>
</code></pre>

<pre><code>//IIFE문
        <div>
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
</code></pre>

* 화살표 함수: this, arguments, super개념이 없는 익명 함수

<pre><code>//화살표 함수, IIFE문
      <div>
        {
          (() => {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
</code></pre>

JSX STYLE
---------------------

* 객체 형식으로 작성
* class 대신 className을 사용한다.

<pre><code>class App extends Component {
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
</code></pre>

* className을 이용한 style 편집

~~~~~~
import './App.css'

<div className = "App">
    blah blah
</div>   
~~~~









