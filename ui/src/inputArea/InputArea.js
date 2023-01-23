import React, { Component } from 'react';
import NewItem from "./NewItem";



class InputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    classes='align-self-start';

    render() {
        return (
            <div>
                
                <div className='d-flex justify-content-around align-items-center m-3'>
                    
                    <NewItem account={this.props.account} update={this.props.update}/>
                </div>

            </div>
        );
    }
}

export default InputArea;