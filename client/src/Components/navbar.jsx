import React, { Component } from 'react';
import '../App.css';
class Navbar extends Component {
	render() {
		return (
				<div className="container-menu">
					<ul id="nav">
						<li><a className="active" href="#"><i className="fa fa-home"></i></a></li>
						<li><a href="/products">Products</a></li>
						<li><a href="/orders">Orders</a></li>
						<li><a href="/parcel">Purcels</a></li>
						<li><a href="/transaction">Transaction</a></li>
					</ul>
				</div>
		);
}
}

export default Navbar;