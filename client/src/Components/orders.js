import React, { Component } from 'react';
import logo from '../logo.png';
import Tab from './table'
import '../App.css';

let ordersList = require('../data/orders.json');

class Orders extends Component {
  state = {
    orders: ordersList.orders,
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="App-header"> Orders : </div>
            <Tab category={this.state.orders}/>
        </div>
      </div>
    );
  }
}

export default Orders;
