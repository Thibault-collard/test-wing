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
								<Table.HeaderCell key={i}> {name} </Table.HeaderCell>
							))}  
							</Table.Row>
						</Table.Header>

						<Table.Body>
						{this.props.category.map(function(item, i){
										return <Table.Row>
												<>
													<Table.Cell>{item.id}</Table.Cell>
													<Table.Cell>{item.name}</Table.Cell>

													<Table.Cell>{item.weight} 
													
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

export default Tab;