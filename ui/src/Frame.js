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
        this.state={account:{}};
    }

    getAccount=(account)=>{
        this.setState({account});
       
    }
    

    render() {
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
                <InputArea/>
                </Card>
                <Card>
                <AmountColumns account={this.state.account}/>
                </Card>
            </>
        );
    }
}

export default Frame;