import React, { Component } from 'react';


import NewItemInput from './NewItemInput';

class NewItem extends Component {
    classes="container-md d-flex flex-row justify-content-center h-25"
    update=(account)=>{
    this.props.update(account);
    }
   
    render() {
        
        return (
            <div className={this.classes}>
                
                <NewItemInput account={this.props.account} update={this.update} />

                    

                  
                
            </div>
        );
    }
}

export default NewItem;