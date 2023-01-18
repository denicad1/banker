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
    handleTrans=()=>{
     let selectedAccount=this.state.account;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({amount:this.state.amount,withdraw:this.state.withdraw,account:this.state.account})
        };
        fetch(`/accounts/transactions/${selectedAccount.id}/add`, requestOptions)
            .then(response => response.json());
            // .then(data => this.setState({ postId: data.id }));
    };
    // need to finish method for lifting up transType and then create method for posting to database and refresh app for 
    // new list of Transactions. also need to add field for Description.
    //need to finish setting up POST method with state. 
    //created update using function component not class so need to edit this for class update
    

    render() {
       console.log(this.state);
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