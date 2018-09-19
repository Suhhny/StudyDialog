import React, { Component } from 'react';
import Nav from './Nav';
import Result from './Result';
import './App.css';

class App2 extends Component {
  render() {
    return (
      <div className="whole">
        <Nav />
        <Result />
      </div>
    );
  }
}

export default App2;
