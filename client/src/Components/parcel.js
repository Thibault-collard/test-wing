import React, { Component } from 'react';
import '../App.css';

let ordersList = require('../data/orders.json');
let itemsList = require('../data/items.json');
let parcel = {
	"parcel": []
}

let weight_product;
let tmp_quantity = 1;
let tmp_weight = 0;
let weight_available = 30;
let items = [];
let parcel_number = 1;
let palette_number = 1;

function findCorrespondingWeight(item_orders){
	for(let h=0; h < itemsList.items.length;h++){
		//Iterate through the list of items in items.json
		if(itemsList.items[h].id == item_orders){
			// Find the corresponsding products
			return itemsList.items[h].weight
		}
	}
}

for(let i=0; i<ordersList.orders.length;i++){
//Iterate through the list of orders
	for(let j=0; j<ordersList.orders[i].items.length;j++){
		//Iterate through the list of item in the list of orders
		for(let k=0; k < ordersList.orders[i].items[j].quantity;k++){
			tmp_weight = findCorrespondingWeight(ordersList.orders[i].items[j].item_id)
			//console.log(tmp_weight)
			if(weight_available - tmp_weight > 0 ){
				weight_available -= tmp_weight;
			}
				
				
			if(weight_available > parseFloat(tmp_weight)){
				//console.log(ordersList.orders[i].items[j].quantity)
				//console.log(tmp_quantity)
				//console.log(weight_available)
				if(tmp_quantity == ordersList.orders[i].items[j].quantity){
					//console.log('bouclage en base de donnée')
					items.push({item_id:ordersList.orders[i].items[j].item_id,quantity:tmp_quantity})
					
					//console.log(ordersList.orders[i].items[j].item_id)
					tmp_quantity = 0;
				}
				tmp_quantity++
				
			}else{
				//console.log('bouclage en base de donnée')
				items.push({item_id:ordersList.orders[i].items[j].item_id,quantity:tmp_quantity})
				//console.log(ordersList.orders[i].items[j].item_id)
				//console.log(ordersList.orders[i].items[j].quantity)
				//console.log(tmp_quantity)
				//console.log(weight_available)
				//console.log('colis parcel')
				parcel_number++
				if(parcel_number == 17){
					palette_number++
					parcel_number = 0;
				}
				parcel.parcel.push({items, weight:30 - weight_available, palette_number:palette_number })
				items = [];	
				weight_available = 30;
				if(tmp_quantity == ordersList.orders[i].items[j].quantity){
					tmp_quantity = 1;
				}
				
				//console.log(tmp_quantity)
				//La tmp quantity continue tandis que le scan passe au produit suivant
			}
			
		}
		tmp_quantity = 1;
				// 
				// 	//console.log(ordersList.orders[i].items[j].quantity)
					
				// 	if(weight_available > parseFloat(itemsList.items[h].weight)){
				// 		//
				// 		tmp_quantity++
				// 		weight_available -= parseFloat(itemsList.items[h].weight)	
				// 	}else{
				// 		shopping_cart.push({items:[{item_id:ordersList.orders[i].items[j].item_id,quantity:tmp_quantity}]})
				// 		tmp_quantity = 0;
				// 		weight_available = 30;
				// 	}
				// 	console.log(shopping_cart)
				// 	//console.log(itemsList.items[h].weight*ordersList.orders[i].items[j].quantity)
				// }
				
				// tmp_quantity = 0;
				
				
			
		//
		
		//console.log(ordersList.orders[i].items[j].quantity)
	}
	
}
console.log(parcel)
class Parcel extends Component {
	
	
  render() {
    return (

			<>
			</>
		)  
  }
}

export default Parcel;
