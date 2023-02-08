import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Form, Button} from "reactstrap";

import NewItemDrop from './NewItemDrop';

class NewItemInput extends Component {
    constructor(props) {
        super(props);
        
        this.state={amount:"",withdraw:null,account:{}};
        

    }
    newType=(type)=>{
        type==='Withdraw'? this.setState({withdraw:true}) : this.setState({withdraw:false});
    }
    handleTrans=async ()=>{
     const selectedAccount=this.props.account;
     const amount=this.state.withdraw?-this.state.amount:this.state.amount;
     console.log(amount,selectedAccount.amount);
     const newBal=selectedAccount.amount+parseFloat(amount);
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({amount:this.state.amount,withdraw:this.state.withdraw,account:selectedAccount})
        };
        const putOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        };
        await fetch(`/accounts/transactions/${selectedAccount.id}/add`, postOptions);
       
        await fetch(`/accounts/${selectedAccount.id}?amount=${newBal}`, putOptions)
           this.props.update(selectedAccount);
           this.setState({account:{},amount:"",withdraw:null})
           
           
           
        
    };

    // PUT request is updating account balance but it appears to be a string instead of a float or int. need to have balance
    // display on page and update automatically. also withdraws are not deducting from balance. need to fix newBal variable to 
    //minus withdraw instead of making whole balance negative.
    
    

    render() {
      
        return (
            <React.Fragment>
                <Button color='primary' onClick={this.handleTrans} >New Amount</Button>
                <Form className='d-flex'>
                    <InputGroup className='mx-3'>
                        <Input placeholder='please enter an amount' onInput={e=>{this.setState({amount:e.target.value})}} value={this.state.amount}/>
                        <InputGroupText>$</InputGroupText>
                    </InputGroup>
                    <NewItemDrop transType={this.newType} />
                </Form>
            </React.Fragment>
        );
    }
}

export default NewItemInput;