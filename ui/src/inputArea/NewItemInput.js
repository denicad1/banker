import React, { Component, useState } from 'react';
import { InputGroup, InputGroupText, Input, Form, Button} from "reactstrap";
import Transactions from '../amountColumns/Transactions';
import NewItemDrop from './NewItemDrop';

class NewItemInput extends Component {
    constructor(props) {
        super(props);
        const [transaction,setTransaction]=useState({amount:0,withdraw:null,account:null});
        

    }
    newType=(type)=>{
        type==='Withdraw'? setTransaction({withdraw:true}) : setTransaction({withdraw:false});
    }
    handleTrans=()=>{
        setTransaction

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));

    }
    // need to finish method for lifting up transType and then create method for posting to database and refresh app for 
    // new list of Transactions. also need to add field for Description.
    //need to finish setting up POST method with state. 
    //created update using function component not class so need to edit this for class update
    

    render() {
        return (
            <React.Fragment>
                <Button color='primary' onClick={handleTrans} >New Amount</Button>
                <Form className='d-flex'>
                    <InputGroup className='mx-3'>
                        <Input placeholder='please enter an amount' onInput={e=>{setTransaction({amount:e.target.value})}}/>
                        <InputGroupText>$</InputGroupText>
                    </InputGroup>
                    <NewItemDrop transType={this.newType}/>
                </Form>
            </React.Fragment>
        );
    }
}

export default NewItemInput;