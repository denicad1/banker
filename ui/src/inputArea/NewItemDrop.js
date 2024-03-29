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
        this.state = {
            dropdownOpen: false,
            name: "Type"
        };
    }
    componentDidMount() {
        this.setState((state, props) => ({
            name: props.transValue
        }));
    }
    toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });
    classes = "d-flex ";
    display = (e) => {
        let type = e.target.textContent;
        this.setState(() => ({ name: type }));
        this.handleSubmit(type);

    };
    handleSubmit = (txt) => {
        if (this.name === "Type") {
            alert("Please select a transaction type");
            return;
        } else {
            this.props.transType(txt);
            this.setState(() => ({ name: "Type" }));
        }

    }


    render() {
        return (
            <>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction="down">
                    {/* need to make dropdowntoggle show if it is a deposit or withdraw. probably using state */}
                    <DropdownToggle caret color='dark'>{this.state.name}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Type</DropdownItem>
                        <DropdownItem onClick={this.display}>Deposit</DropdownItem>
                        <DropdownItem onClick={this.display}>Withdraw</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </>
        );
    }
}

export default NewItemDrop;