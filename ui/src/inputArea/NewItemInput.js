import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Form } from "reactstrap";
import NewItemDrop from './NewItemDrop';

class NewItemInput extends Component {
    constructor(props) {
        super(props);
        

    }
    

    render() {
        return (
            <React.Fragment>
                <Form className='d-flex'>
                    <InputGroup className='mx-3'>
                        <Input placeholder='please enter an amount' />
                        <InputGroupText>$</InputGroupText>
                    </InputGroup>
                    <NewItemDrop/>
                </Form>
            </React.Fragment>
        );
    }
}

export default NewItemInput;