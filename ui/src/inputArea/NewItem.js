import React, { Component } from 'react';

import { Button } from "reactstrap";
import NewItemInput from './NewItemInput';

class NewItem extends Component {
    classes="container-md d-flex flex-row justify-content-center h-25"
    render() {
        
        return (
            <div className={this.classes}>
                <Button color='primary'>New Amount</Button>
                <NewItemInput/>

                    

                    {/* need to make dropdown for deposit or withdraw */}
                
            </div>
        );
    }
}

export default NewItem;