import React, { Component } from 'react';
import { connect } from 'react-redux';

import PriceItem from '../../../reuse/price_item';
import data from '../../content_data';

import { selectPrice } from '../../../../actions/index';

class PriceBox extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        const clickedElement = e.target.closest('.price-item-select');
        if (!clickedElement) return;
        const id = clickedElement.dataset.id;
        this.props.selectPrice(id);
    }
    
    render() {
        const { pricing } = data;
        const { active } = this.props;
        
        return (
            <div 
                className="price-box price-box-select"
                onClick={this.handleClick}>
                    <PriceItem
                        price={pricing[0][0]} 
                        period={pricing[0][1]}
                        name={`price-item-select ${pricing[0][0] === active ? 'active' : ''}`}/> 
                    <PriceItem  
                        price={pricing[1][0]} 
                        period={pricing[1][1]}
                        name={`price-item-select ${pricing[1][0] === active ? 'active' : ''}`} /> 
                    <PriceItem 
                        price={pricing[2][0]} 
                        period={pricing[2][1]}
                        name={`price-item-select ${pricing[2][0] === active ? 'active' : ''}`} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        active: state.selectedPrice
    }
}

export default connect(mapStateToProps, { selectPrice })(PriceBox);

