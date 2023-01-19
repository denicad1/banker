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
       console.log(this.props.account);
     let selectedAccount=this.props.account;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({amount:this.state.amount,withdraw:this.state.withdraw,account:this.props.account})
        };
        await fetch(`/accounts/transactions/${selectedAccount.id}/add`, requestOptions)
           
            // .then(data => this.setState({ postId: data.id }));
    };
    // need to make method for having frame update components. account id in transaction table is null. need to figure out why
    // see if I can have account be in the state or if I should keep using props instead
    
    

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