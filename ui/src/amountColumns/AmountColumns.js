import React, { Component } from 'react';
import Transactions from './Transactions';


class AmountColumns extends Component {
    constructor(props){
        super(props);
        state={depositList:[],
        withdrawList:[]}
    }
    //need to pass account down as prop to filter list of transactions
    
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