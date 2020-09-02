import React, { Component } from 'react';
import logo from '../logo.png';
import Tab from './table'
import '../App.css';
let itemsList = require('../data/items.json');

class Products extends Component {
  state = {
    items: itemsList.items,
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="App-header"> Products : </div>
          <Tab category={this.state.items}/>
        </div>
      </div>  
    );
  }
}

export default Products;
