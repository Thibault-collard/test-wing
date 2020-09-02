import React, { Component } from 'react';
import logo from './logo.png';
import Tab from './Components/table'
import './App.css';
let itemsList = require('./data/items.json');

class App extends Component {
  state = {
    items: itemsList.items
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
            <div className="containerProduct">
                <div className="App-header"> Products : </div>
                <Tab name={this.state.name} category={this.state.items}/>
            </div>
      </div>
       
    );
  }
}

export default App;
