import React, { Component } from 'react';
import InputArea from './inputArea/InputArea';
import Accounts from './inputArea/Accounts';
import Balance from './inputArea/Balance';
import { Nav, Navbar, NavbarText } from 'reactstrap';
import NewAccount from './inputArea/NewAccount';
import AmountColumns from './amountColumns/AmountColumns';
import Card from './general/Card';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.state={account:{},fetch:false};
    }

    getAccount=(account)=>{
        this.setState({account,fetch:true});
       
    }
    handleFetch=(done)=>{
        this.setState({fetch:done});
    }
    

    render() {
        let account=this.state.account;
        let id;
        if (account.id) {
            id=account.id;
        }else{
            id=1;
        }
        
        return (
            <>
                <Accounts
                onAccountSelect={this.getAccount}/>
                <Navbar color='dark'>
                    <Nav className="me-auto" navbar>
                    </Nav>
                    <NavbarText><NewAccount /></NavbarText>
                </Navbar>
                <Card>
                <Balance account={this.state.account}/>
                <InputArea account={this.state.account} update={this.getAccount}/>
                </Card>
                <Card>
                <AmountColumns account={id} fetch={this.state.fetch} done={this.handleFetch}/>
                </Card>
            </>
        );
    }
}

export default Frame;