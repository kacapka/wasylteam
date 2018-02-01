import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ToggleNav } from '../../actions/index';

class NavItem extends Component {
    constructor(props) {
        super(props);
        
        this.closeNav = this.closeNav.bind(this);
    }
    
    closeNav() {
        this.props.ToggleNav();
    }
    
    render() {
        return (
            <li>
                <Link  
                    to={this.props.to} 
                    onClick={this.closeNav}>
                        {this.props.name}
                </Link>
            </li>
        );
    }
} 
            
export default connect(null, { ToggleNav })(NavItem);