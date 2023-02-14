import React, { Component } from 'react';
import { Button } from "reactstrap";


class NewAccount extends Component {
    constructor(props) {
        super(props);

        this.state={
            toggle:false
        }
    }
    handleToggle=()=>{
        this.setState(prevState=>({toggle:!prevState.toggle}))
    }
    handleSubmit=async()=>{
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({amount:0,name:this.state.name})
        };
        await fetch(`/accounts/add`, postOptions);
        this.setState({name:""})
        this.handleToggle();
    }
    //getting error on the date is happening. i think because it isn't the same format. will need to get that fixed. also style the 
    //conditionally rendered input and submit button. also need to have account list update with new account.  

    render() {
        let dialog;
        if (this.state.toggle) {
           dialog= <div>
                <input className='align-middle' onInput={e=>{this.setState({name:e.target.value})}}placeholder="Enter account name"></input>
                <Button color='success' className='mx-1' onClick={this.handleSubmit}>Submit</Button>
            </div>
        }else{dialog=<Button color="success"onClick={this.handleToggle}>New Account</Button>}
        return (
            <div>
               {dialog}
            </div>
        );
    }
}

export default NewAccount;