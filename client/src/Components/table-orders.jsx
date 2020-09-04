import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class TabOrder extends Component {
	state = {
		category:"",
	}
	
  render() {
		const name = [];
		for ( var cat in this.props.category[0] ) {
			name.push(cat); 
		}
    return (
        <div >
           <Table celled>
						<Table.Header>
							<Table.Row>
							{name.map((name, i) => (
								<Table.HeaderCell> {name} </Table.HeaderCell>
							))}  
							</Table.Row>
						</Table.Header>

						<Table.Body>
						{this.props.category.map(function(item){
										return <Table.Row>
												<>
													<Table.Cell>{item.id}</Table.Cell>
													<Table.Cell>{item.date}</Table.Cell>

													<Table.Cell>{item.weight} 
													{item ?
													item.items.map(function(items){
														return <>
														
														<Table.Cell>
															<Table.Row>
																<Table.Cell> {items.item_id} </Table.Cell>
																<Table.Cell> {items.quantity} </Table.Cell>
															</Table.Row>
														</Table.Cell>
														<br></br>
														</>
													})
													: null } 
													</Table.Cell>
													
												</>
										</Table.Row> 
								})}
						</Table.Body>
					</Table>
        </div>
    );
  }
}

export default TabOrder;