import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Form, Button} from "reactstrap";

import NewItemDrop from './NewItemDrop';

class NewItemInput extends Component {
    constructor(props) {
        super(props);
        
        this.state={amount:0,withdraw:null,account:this.props.account};
        

    }
    newType=(type)=>{
        type==='Withdraw'? this.setState({withdraw:true}) : this.setState({withdraw:false});
    }
    handleTrans=async ()=>{
     const selectedAccount=this.props.account;
     const amount=this.state.amount+selectedAccount.amount;
     const newBal= this.state.withdraw==='Withdraw'?-amount:amount;
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
           this.props.update(this.props.account);
        
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
                        <Input placeholder='please enter an amount' onInput={e=>{this.setState({amount:e.target.value})}}/>
                        <InputGroupText>$</InputGroupText>
                    </InputGroup>
                    <NewItemDrop transType={this.newType}/>
                </Form>
            </React.Fragment>
        );
    }
}

export default NewItemInput;