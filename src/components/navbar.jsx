import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <span>🍒GROCERY LIST🍒</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </div>
        );
    }
}

export default Navbar;