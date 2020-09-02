import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Tab extends Component {
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
													<Table.Cell>{item.id}</Table.Cell>
													<Table.Cell>{item.name} {item.date}</Table.Cell>

													<Table.Cell>{item.weight} 
													{	this.props.category.items ?
														this.props.category.items.map((item, i) => (
															{item} 
														)): null }
													</Table.Cell>
													
												</>
										</Table.Row> 
								))}
						</Table.Body>
					</Table>
        </div>
    );
  }
}

export default Tab;