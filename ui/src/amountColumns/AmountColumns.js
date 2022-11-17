import React, { Component } from 'react';
import Deposits from './Deposits';
import Withdraws from './Withdraws';

class AmountColumns extends Component {
    render() {
        return (
            <div className='d-flex justify-content-around'>
                <Withdraws/>
                <Deposits/>
            </div>
        );
    }
}

export default AmountColumns;