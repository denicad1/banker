import React, { Component } from 'react';

class Balance extends Component {
    constructor(props){
        super(props)
        
    }

   
    render() {
        let amount=this.props.account.amount
        return (
            <div>
                
                <h1>Balance</h1>
                <h2>{amount}</h2>
                
            </div>
        );
    }
}

export default Balance;