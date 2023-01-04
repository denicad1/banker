import React, { useEffect, useState } from 'react';
import Transactions from './Transactions';
import Transaction from './Transaction';


const AmountColumns=(props)=> {
  
    const[transList,setTransList]=useState([]);

     useEffect(()=>{ 
        if (Object.keys(props.account).length!==0) {
            let id=props.account.id;
            const response=async ()=>{
            const response= await fetch(`/accounts/transactions/${id}`);
            const body= await response.json();
            setTransList(body);  
        }
        response().catch(console.error)
        }
        
    },[props.account])
    //need to pass down props to transaction component to style the list of transactions
        return (
            <div className='d-flex justify-content-around'>
                <Transactions>
                    {transList.map(dep =>{ 
                        let textColor='fs-4 bg-gradient border text-light border-dark p-1 rounded ';
                        if (dep.withdraw===true) {
                            textColor+=` bg-danger`
                        } else {
                            textColor+=` bg-success`
                        }
                        return <Transaction key={dep.id}>{`${dep.id}`} {`${dep.transdate}`} <span className={textColor}>{dep.amount}</span></Transaction>
                        })}
                        
                </Transactions>    
            </div>
        ); 
}

export default AmountColumns;