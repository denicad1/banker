import React, { Component, useEffect, useState } from 'react';
import Transactions from './Transactions';


const AmountColumns=()=> {
    
    const[depositList,setDepositList]=useState(0);
    const[withdrawList,setWithdrawList]=useState(0);
    const[account,setAccount]=useState(0);
    //need to get transactions using account and filter to make withdraws and deposit list
    //need to change this to a function component instead of a class component
    //${this.state.account.id}
    async useEffect=()=>{
        const response= await fetch(`/accounts/transactions/1`);
        console.log(this.state.account.id);

        if (!response.ok) {
            console.log(response);
          throw new Error(`Error! status: ${response.status}`);
        }
        const body= await response.json();
        this.setState({withdrawList:body.filter(trans=>{return trans.withdraw===true}),
        depositList:body.filter(trans=>{return trans.withdraw===false})});
    }
    
    
        return (
            <div className='d-flex justify-content-around'>
                <Transactions/>
                <Transactions/>
            </div>
        );
    
}

export default AmountColumns;