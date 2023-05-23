import React, { Component } from 'react';

class Balance extends Component {
    
    render() {
        
        return (
            <div className='my-3'>
                <h1>Balance</h1>
                <h2>{this.props.children}</h2>
                
            </div>
        );
    }
}

export default Balance;