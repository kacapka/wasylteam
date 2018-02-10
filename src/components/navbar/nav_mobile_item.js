import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleNav } from '../../actions/index';

class NavItem extends Component {
    constructor(props) {
        super(props);
        
        this.closeNav = this.closeNav.bind(this);
    }
    
    closeNav() {
        this.props.toggleNav(this.props.isNavOpen);
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

function mapStateToProps(state) {
    return {
        isNavOpen: state.isNavOpen
    }
}
            
export default connect(mapStateToProps, { toggleNav })(NavItem);