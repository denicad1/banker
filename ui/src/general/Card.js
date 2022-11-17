import React, { Component } from 'react';

class Card extends Component {
    classes=`bg-secondary w-50 mx-auto my-5 rounded p-3 border border-3 border-dark`;
    render() {
        return (
            <div className={this.classes}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;