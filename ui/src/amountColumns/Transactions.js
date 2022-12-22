import React, { Component } from 'react';

class Transactions extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Transactions;