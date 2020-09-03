import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class TabParcel extends Component {
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
								{this.props.category.map((item, i) => (
										<Table.Row>
												<>
													<Table.Cell>{item.order_id}</Table.Cell>
													<Table.Cell>{item.weight} </Table.Cell>
														{this.props.category.map((item, i) => (
															<>
															<Table.Cell>{item.items[0].item_id}</Table.Cell>
															<Table.Cell>{item.items[0].quantity}</Table.Cell>
															</>
														))}
													<Table.Cell> {item.tracking_id}</Table.Cell>
													<Table.Cell> {item.palette_number}</Table.Cell>
													
													<Table.Cell></Table.Cell>
												</>
										</Table.Row> 
								))}
						</Table.Body>
					</Table>
        </div>
    );
  }
}

export default TabParcel;