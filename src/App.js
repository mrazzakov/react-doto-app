import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <input type="checkbox"/>
        <p>List Item 1</p>
        <input type="checkbox"/>
        <p>List Item 2</p>
        <input type="checkbox"/>
        <p>List Item 3</p>
      </div>
    );
  }
}

export default App;
