import React, { Component } from 'react';

class GroceryAdd extends Component {
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
    }

    render() {
        return (
            <form action="" className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Grocery" />
                <button className="add-button">추가</button>
            </form>
        );
    }
}

export default GroceryAdd;