import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Form, Button} from "reactstrap";
import Transactions from '../amountColumns/Transactions';
import NewItemDrop from './NewItemDrop';

class NewItemInput extends Component {
    constructor(props) {
        super(props);
        

    }

    // need to finish method for lifting up transType and then create method for posting to database and refresh app for 
    // new list of Transactions. also need to add field for Description.
    

    render() {
        return (
            <React.Fragment>
                <Button color='primary' >New Amount</Button>
                <Form className='d-flex'>
                    <InputGroup className='mx-3'>
                        <Input placeholder='please enter an amount' />
                        <InputGroupText>$</InputGroupText>
                    </InputGroup>
                    <NewItemDrop transType={this.newType}/>
                </Form>
            </React.Fragment>
        );
    }
}

export default NewItemInput;