REACT
===================

App.js
--------------

# 컴포넌트 만들기

<p>

* 클래스를 통해서 만들기.

<pre><code>class App extends Component {

}
</code></pre>

* 함수를 통해서 만들기.

</p>

# 클래스 형태의 컴포넌트

<p>

* 클래스 형태의 컴포넌트에서는 내부에서 JSX(HTML양식)를 return하는 render() 함수가 필수이다.

</p>

# 컴포넌트 내보내기

<p>

* 작성한 컴포넌트를 다른 곳에서 사용할 수 있도록 내보내기.

<pre><code>export default App;
</code></pre>

</p>

index.js
-----------------

# 다른 파일에서 컴포넌트 불러오기

<p>

<pre><code>import App from './App';
</code></pre>

</p>

# ReactDom.render

<p>

* 첫번째 파라미터: 렌더링 할 결과물 (<App />)
* 두번째 파라미터: 컴포넌트를 어떤 DOM에 그릴지. (/public/index.html <div id="root"></div>)

<pre><code>ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
</code></pre>

</p>


