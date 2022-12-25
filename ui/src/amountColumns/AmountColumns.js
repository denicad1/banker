import React, { Component, useEffect, useState } from 'react';
import Transactions from './Transactions';


const AmountColumns=(props)=> {
    
    const[depositList,setDepositList]=useState(0);
    const[withdrawList,setWithdrawList]=useState(0);
    const[account,setAccount]=useState(0);
    //need to get transactions using account and filter to make withdraws and deposit list
    
     useEffect(()=>{ 
        setAccount(props.account);
        const response=async ()=>{
            const response= await fetch(`/accounts/transactions/1`);
            if (!response.ok) {
                console.log(response);
              throw new Error(`Error! status: ${response.status}`);
            }
            const body= await response.json();
            setWithdrawList(body.filter(trans=>{return trans.withdraw===true}));
            setDepositList(body.filter(trans=>{return trans.withdraw===false}));
        }
        //lists not generating correct transactions. need to figure out why
        response().catch(console.error())
    },[])
        
  

    
    
    
        return (
            <div className='d-flex justify-content-around'>
                <Transactions/>
                <Transactions/>
            </div>
        );
    
}

export default AmountColumns;