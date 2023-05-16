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
        this.state={account:{},fetch:false
       ,Bal:0
    };
    }

    getAccount=async (account)=>{
        this.setState(prevState=>({account,fetch:true,remount:!prevState.remount})); 
        await this.handleBal();
    }
    handleBal=(bal)=>{
        this.setState({Bal:bal});
        }
    // handleBal=async()=>{
    //     const response= await fetch("/accounts");
    //     if (!response.ok) {
    //       throw new Error(`Error! status: ${response.status}`);
    //     }
    //     const body= await response.json();
    //     const account=body.find(acc=>{
    //         console.log(acc);
    //         return (acc.id===this.state.account.id)});
    //     console.log(account);
    //     console.log(account.amount);
    //     this.setState({Bal:account.amount});
    // }

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
                onAccountSelect={this.getAccount} />
                <Navbar color='dark'>
                    <Nav className="me-auto" navbar>
                    </Nav>
                    <NavbarText><NewAccount /></NavbarText>
                </Navbar>
                <Card>
                <Balance>{this.state.Bal}</Balance>
                <InputArea account={this.state.account} update={this.getAccount} />
                </Card>
                <Card>
                <AmountColumns account={id} fetch={this.state.fetch} bal={this.handleBal}/>
                </Card>
            </>
        );
    }
}

export default Frame;