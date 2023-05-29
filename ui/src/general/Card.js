import React, { Component } from 'react';

class Card extends Component {
    classes=`bg-light w-50 mx-auto my-5 rounded p-3 `;
    render() {
        let addClasses= this.props.className? this.props.className:'';
        return (
            <div className={this.classes + addClasses}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;