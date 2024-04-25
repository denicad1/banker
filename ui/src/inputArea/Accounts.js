import React, { Component } from 'react';
import './custom.css'

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state={accounts:[],fetchAccounts:false};
        
    }
    async componentDidMount(){
        this.setState({accounts:[]});
        const response= await fetch("/accounts");
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const body= await response.json();
        this.setState({accounts:new Set(body)});
    }
    
    


    getAccount=(e)=>{
        const name=e.target.innerHTML;
        const account= this.state.accounts.find(account=>{return account.name===name});
        this.props.onAccountSelect(account);
        //need to lift state up so can use context to send it to transactions columns
    }
   
    
    render() {
        return (
            
            <div className='border mx-5 p-3 position-absolute top-20' >
                <h1>Accounts</h1>
               
                {this.state.accounts.map((account)=>{
                  return  <div key={account.id} onClick={this.getAccount}>{`${account.name}`}</div>
                })}


            </div>
        );
    }
}

export default Accounts;