import React, { Component } from 'react';

class PriceItem extends Component {
    render() {
        return (
            <div 
                className={`price-item ${this.props.name}`}
                data-id={this.props.price} >
                    <span className="price-item-value">{this.props.price}</span>
                    <span>/</span>
                    <span className="price-item-period">{this.props.period}</span>
            </div>
        );
    }
}

export default PriceItem;