import React, { useEffect, useState } from 'react';
import Transactions from './Transactions';


const AmountColumns=(props)=> {
    
    const[depositList,setDepositList]=useState([]);
    const[withdrawList,setWithdrawList]=useState([]);
   // const[account,setAccount]=useState(0);
    
    
     useEffect(()=>{ 
        //setAccount(props.account);
        if (Object.keys(props.account).length!==0) {

            
             let id=props.account.id;
        const response=async ()=>{
            const response= await fetch(`/accounts/transactions/${id}`);
            
            const body= await response.json();
          let deposits=body.filter(trans=> trans.withdraw===false);
          let withdraws=body.filter(trans=>trans.withdraw===true);
          
          //filter not working in useState functions. need to assign to var first
          
            setWithdrawList(withdraws);
            setDepositList(deposits);
            
            
            //setDepositList(body.filter(trans=>trans.withdraw===false));
             //console.log(withdrawList,depositList);
             
        }
        //lists not generating correct transactions. need to have account be the latest value and not one step behind
        response().catch(console.error)
        }
        
    },[props.account])
        
  

    
    
    
        return (
            <div className='d-flex justify-content-around'>
                  asd;fj;afkjs;f
                  {withdrawList[0]}
                  {JSON.stringify(depositList[0])}
                   
            {console.log(withdrawList,depositList)}
                <Transactions>
                    {/* {depositList.forEach(dep => {
                        <div>dep</div>
                    })} */}
                </Transactions>
                {
                    depositList.forEach(dep=><div>{dep}</div>)
                    }
                
                
                    {withdrawList.forEach(withdraw =><div>{withdraw}</div>) }
                    
                
            </div>
        );
    
}

export default AmountColumns;