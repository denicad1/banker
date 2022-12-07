import React, { Component } from 'react';

class Balance extends Component {
    constructor(props){
        super(props)
        state={account:this.props.account,
        balance:0}
    }
//need to check if this will actually update the balance or not.
    componentDidMount(){
        this.setState({balance:this.state.account.getAmount()});
    }
    render() {
        return (
            <div>
                <h1>Balance</h1>
                <h2>{this.state.balance}</h2>
                
            </div>
        );
    }
}

export default Balance;