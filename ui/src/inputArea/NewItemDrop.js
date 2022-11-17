import React, { Component } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

class NewItemDrop extends Component {
    constructor(props) {
        super(props);
        this.state={dropdownOpen:false};
    }
    toggle = () => this.setState({dropdownOpen:!this.state.dropdownOpen});
    classes="d-flex ";

    render() {
        return (
            <>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction="down">
                    {/* need to make dropdowntoggle show if it is a deposit or withdraw. probably using state */}
                    <DropdownToggle caret color='dark'>Type</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Type</DropdownItem>
                        <DropdownItem>Deposit</DropdownItem>
                        <DropdownItem>Withdraw</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </>
        );
    }
}

export default NewItemDrop;