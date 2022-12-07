import React, { Component } from 'react';
import Transactions from './Transactions';


class AmountColumns extends Component {
    constructor(props){
        super(props);
        state={depositList:[],
        withdrawList:[],
        account:this.props.account}
    }
    //need to get transactions using account and filter to make withdraws and deposit list
    
    render() {
        return (
            <div className='d-flex justify-content-around'>
                <Transactions/>
                <Transactions/>
            </div>
        );
    }
}

export default AmountColumns;