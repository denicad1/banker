import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Transaction;