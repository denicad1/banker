import React, { Component, useEffect, useState } from 'react';
import Transactions from './Transactions';


const AmountColumns=(props)=> {
    
    const[depositList,setDepositList]=useState(0);
    const[withdrawList,setWithdrawList]=useState(0);
    const[account,setAccount]=useState(0);
    
    
     useEffect(()=>{ 
        setAccount(props.account);
        if (Object.keys(account).length!==0) {
             console.log(props.account)
             console.log(account);
             let id=account.id;
        const response=async ()=>{
            const response= await fetch(`/accounts/transactions/${id}`);
            
            const body= await response.json();
          let withdraw=body.filter(trans=> trans.withdraw===true);
          //filter not working in useState functions. need to assign to var first
            setWithdrawList(withdraw);
            //setDepositList(body.filter(trans=>trans.withdraw===false));
             console.log(withdrawList,depositList);
        }
        //lists not generating correct transactions. need to have account be the latest value and not one step behind
        response().catch(console.error)
        }
        
    },[props.account])
        
  

    
    
    
        return (
            <div className='d-flex justify-content-around'>
                  
                   

                <Transactions>
                    {/* {depositList.forEach(dep => {
                        <div>dep</div>
                    })} */}
                </Transactions>
                <Transactions>
                    
                </Transactions>
            </div>
        );
    
}

export default AmountColumns;