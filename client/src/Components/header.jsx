import React, { Component } from 'react';
import logo from '../logo.png';
import Tab from './table'
import '../App.css';
let itemsList = require('../data/items.json');

class App extends Component {

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;