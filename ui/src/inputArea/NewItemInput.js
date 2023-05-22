import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Form, Button} from "reactstrap";

import NewItemDrop from './NewItemDrop';

class NewItemInput extends Component {
    constructor(props) {
        super(props);
        this.state={amount:"",withdraw:null,account:{},type:"Type"};
    }
    newType=(type)=>{
        this.setState((state,props)=>({type}));
        type==='Withdraw'? this.setState({withdraw:true}) : this.setState({withdraw:false});
    }
    handleTrans=async ()=>{
     const selectedAccount=this.props.account;
     let amount=this.state.amount;
     if (isNaN(amount)) {
        alert("Please enter a valid number");
        this.setState({amount:""});
        return;
     } else {
        amount=this.state.withdraw?-amount:amount;
     }
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
           this.setState((state,props)=>({account:{},amount:"",withdraw:null,type:"Type"}));
           
           
           
        
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
                    <NewItemDrop key={this.state.type} transType={this.newType} transValue={this.state.type}/>
                </Form>
            </React.Fragment>
        );
    }
}

export default NewItemInput;