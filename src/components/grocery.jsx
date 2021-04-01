import React, { Component } from 'react';

class Grocery extends Component {
    handleIncrement = () => {
        this.props.onIncrement(this.props.grocery);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.grocery);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.grocery);
    };

   render() {
       const { name, count } = this.props.grocery;
       return (
           <li className="grocery">
             <span className="grocery-name">{name}</span>
             <span className="grocery-count">{count}개</span>
             <button className="grocery-button grocery-increase" onClick={this.handleIncrement}><i className="fas fa-plus-circle"></i></button>
             <button className="grocery-button grocery-decrease" onClick={this.handleDecrement}><i className="fas fa-minus-circle"></i></button>
             <button className="grocery-button grocery-delete" onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
           </li>
       )
   }
}

export default Grocery;