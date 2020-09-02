
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Orders from './Components/orders'
import Products from './Components/products'
import Header from './Components/header'
import NavBar from './Components/navbar' 

const Index = () => (
  <div>
				<BrowserRouter>
				<Header/>
				<NavBar/>
						<Route exact path='/' component={Products} />
						<Route exact path='/orders' component={Orders} />
						<Route exact path='/products' component={Products} />
				</BrowserRouter>
	</div>
);


ReactDOM.render(<div><Index/></div>, document.getElementById('root'))
