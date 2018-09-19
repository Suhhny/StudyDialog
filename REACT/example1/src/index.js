import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import Input from './Input';
import App2 from './App2';


// ReactDOM.render(<App />, document.getElementById('root'));

// registerServiceWorker();


ReactDOM.render(
    <Router history = { BrowserRouter }>
        <Route path = "/" component = { App }>
            <Route path = "" component = { Input } />
            <Route path = "tada" component = { App2 } />
        </Route>
    </Router>, document.getElementById('root')
);
