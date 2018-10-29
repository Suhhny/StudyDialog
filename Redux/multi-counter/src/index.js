import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// store 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
