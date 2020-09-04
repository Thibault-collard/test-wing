import React, { Component } from 'react';
import '../App.css';
import axios from "axios";
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

let ordersList = require('../data/orders.json');
let itemsList = require('../data/items.json');
let parcel = {
	"parcel": []
}

let tmp_quantity = 1;
let tmp_weight = 0;
let weight_available = 30;
let items = [];
let parcel_number = 1;
let palette_number = 1;
let profit = 0;
let nbcolis = 0;

function findCorrespondingWeight(item_orders){
	for(let h=0; h < itemsList.items.length;h++){
		//Iterate through the list of items in items.json
		if(itemsList.items[h].id === item_orders){
			// Find the corresponsding products
			return itemsList.items[h].weight
		}
	}
}


async function getNumbers(){
	return await axios.get("https://helloacm.com/api/random/?n=15")
};
	
async function attrTrackingID(){
	for(let l=0;l<parcel.parcel.length;l++){
		getNumbers().then(res => {
			parcel.parcel[l].tracking_id = res.data
		})
	}
}

function dropshipingAlgo(){
	for(let i=0; i<ordersList.orders.length;i++){
		//Iterate through the list of orders
			for(let j=0; j<ordersList.orders[i].items.length;j++){
				//Iterate through the list of item in the list of orders
				for(let k=0; k < ordersList.orders[i].items[j].quantity;k++){
					tmp_weight = findCorrespondingWeight(ordersList.orders[i].items[j].item_id)
					
					if(weight_available - tmp_weight > 0 ){
						weight_available -= tmp_weight;
					}
						
					if(weight_available > parseFloat(tmp_weight) && k !== ordersList.orders[i].items[j].quantity-1){
						if(tmp_quantity === ordersList.orders[i].items[j].quantity){
							items.push({item_id:ordersList.orders[i].items[j].item_id,quantity:tmp_quantity})
							tmp_quantity = 0;
						}
						tmp_quantity++
						
					}else{
							if(j === ordersList.orders[i].items.length-1 && k+1 !== ordersList.orders[i].items[j].quantity-1 && ordersList.orders[i].items[j].quantity-tmp_quantity !== 0){
								items.push({item_id:ordersList.orders[i].items[j].item_id,quantity:ordersList.orders[i].items[j].quantity-tmp_quantity})
							}else{
								items.push({item_id:ordersList.orders[i].items[j].item_id,quantity:tmp_quantity})
							}
							parcel_number++
							if(parcel_number === 17){
								palette_number++
								parcel_number = 0;
							}
							parcel.parcel.push({order_id:ordersList.orders[i].id,items, weight:30 - weight_available, tracking_id:"", palette_number:palette_number });
							items = [];	
							weight_available = 30;
							if(tmp_quantity === ordersList.orders[i].items[j].quantity){
								tmp_quantity = 1;
							}
					}	
				}
				tmp_quantity = 1;	
			}
		}
		attrTrackingID()
		
}

dropshipingAlgo()

function calcProfit(){
	for(let i=0; i< parcel.parcel.length;i++){

		if(parcel.parcel[i].weight > 0 && parcel.parcel[i].weight < 1){
			profit += 1
		}
		else if(parcel.parcel[i].weight > 1 && parcel.parcel[i].weight < 5){
			profit += 2
		}
		else if(parcel.parcel[i].weight > 5 && parcel.parcel[i].weight < 10){
			profit += 3
		}
		else if(parcel.parcel[i].weight > 10 && parcel.parcel[i].weight < 20){
			profit += 5
		}
		else if(parcel.parcel[i].weight > 20 ){
			profit += 10
		}
	}
	nbcolis = parcel.parcel.length
}
calcProfit()


class Parcel extends Component {
	constructor() {
    super();
    this.state = {
      items: []
    };
  }

  render() {
		const name = [];
		for ( var cat in parcel.parcel[0] ) {
			name.push(cat); 
		}
    return (
			<>
			<div className="App">
        <div className="container">
          <div className="App-header"> {nbcolis} colis acheminés pour un montant total de : {profit} € </div>
					<Table celled>
						<Table.Header>

							{name.map((name, i) => (
								<Table.HeaderCell key={i}> {name} </Table.HeaderCell>
							))}  

						</Table.Header>

						<Table.Body>
						
								{parcel.parcel.map(function(item){
										return <Table.Row>
												<>
													<Table.Cell>{item.order_id}</Table.Cell>
													
														{item.items.map(function(items){
															return <>
																<Table.Cell>
																	<Table.Row>
																		<Table.Cell>{items.item_id}</Table.Cell>
																		<Table.Cell>{items.quantity}</Table.Cell>
																	</Table.Row>
																</Table.Cell>
																
															</>
														})}
														
														<Table.Cell>{item.weight} </Table.Cell>
																<Table.Cell> {item.tracking_id}</Table.Cell>
																<Table.Cell> {item.palette_number}</Table.Cell>
												</>
										</Table.Row> 
								})}
						</Table.Body>
					</Table>
        	</div>
        </div>
			</>
		)  
  }
}

export default Parcel;
