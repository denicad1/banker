import React, { Component } from 'react';


import NewItemInput from './NewItemInput';

class NewItem extends Component {
    classes="container-md d-flex flex-row justify-content-center h-25"
    render() {
        
        return (
            <div className={this.classes}>
                
                <NewItemInput account={this.props.account} update={this.props.update}/>

                    

                  
                
            </div>
        );
    }
}

export default NewItem;