import React, { Component } from 'react';
import './custom.css'

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state={accounts:[]};
        
    }
    async componentDidMount(){
        
        const response= await fetch("/accounts");
        
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        
        const body= await response.json();

        this.setState({accounts:body[0]})
       
    }
   
    
    render() {
        return (
            
            <div className='border mx-5 p-3 position-absolute top-20' >
                <h1>Accounts</h1>
               
                {this.state.accounts?.map((account)=>{
                  return  <div key={account.id}>{`${account.name}`}<br/></div>
                })}


            </div>
        );
    }
}

export default Accounts;