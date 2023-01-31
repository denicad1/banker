import React, { Component } from 'react';

class Balance extends Component {
    constructor(props){
        super(props)
        
    }
    amount={};
    componentDidUpdate(){
        this.amount=this.props.account
    }
   
    render() {
        
        return (
            <div>
                
                <h1>Balance</h1>
                <h2>{this.amount.amount}</h2>
                
            </div>
        );
    }
}

export default Balance;