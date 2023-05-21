import React, { useEffect, useState } from 'react';
import Transactions from './Transactions';
import Transaction from './Transaction';


const AmountColumns=(props)=> {
    const[transList,setTransList]=useState([]);
    let done=(e)=>{
        props.done(e);
    }
    const deps=[];
    const withs=[];
    const filterTrans=()=>{transList.filter(tran=>{
        if (tran.withdraw===false) {
            deps.push(tran.amount);
        } else {
            withs.push(tran.amount);
        } 
    });}
    const transReducer=()=>{
        let depsTotal=0;
        let withsTotal=0;
        if (deps.length>0) {
            depsTotal=deps.reduce((acc,cur)=>acc+cur);
        }
        if (withs.length>0) {
            withsTotal=withs.reduce((acc,cur)=>acc+cur);
        }
        let total =depsTotal-withsTotal;
            props.bal(total);
    }
    
     useEffect(()=>{ 
        if (props.fetch) {
            
        
            let id=props.account;
            const response=async ()=>{
            const response= await fetch(`/accounts/transactions/${id}`);
            const body= await response.json();
            setTransList(body); 
               
        }
        response().catch(console.error);
        done(false);
    }
    filterTrans();
    transReducer(); 
    },[transList,props.fetch])
    
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
                        return <Transaction key={dep.id}>{`${dep.id}`}<span className={textColor}>{dep.amount}</span></Transaction>
                        }).reverse()}
                        
                </Transactions>    
            </div>
        ); 
}

export default AmountColumns;