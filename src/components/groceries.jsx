import React, { Component } from 'react';
import Grocery from './grocery';
import GroceryAdd from './groceryAdd';

class Groceries extends Component {
    handleIncrement = (grocery) => {
        this.props.onIncrement(grocery);
    };

    handleDecrement = (grocery) => {
        this.props.onDecrement(grocery);
    };

    handleDelete = (grocery) => {
        this.props.onDelete(grocery);
    };

    handleAdd = name => {
        this.props.onAdd(name);
    };

    render() {
        return <>
        <GroceryAdd onAdd={this.handleAdd} />
        <ul>
            {
                this.props.groceries.map(grocery => (
                    <Grocery key={grocery.id} 
                    grocery={grocery} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} 
                    onDelete={this.handleDelete} />
                ))
            }
        </ul>
        <button className="grocery-reset" onClick={this.props.onReset}>Reset All</button>
        </>;
    }
}

export default Groceries;