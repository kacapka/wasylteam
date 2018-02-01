import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleNav } from '../../actions/index';
import NavBarMobile from './navbar_mobile';

class NavBar extends Component {
    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
    }
    
    toggleNav() {
        this.props.toggleNav(this.props.isNavOpen);
    }
      
    render() {
        return (
            <div>
                <NavBarMobile isOpen={this.props.isNavOpen} />
                <div className="navbar">
                    <div className="navbar-logo">MW.</div>
                    <div 
                        className="navbar-hamburger"
                        onClick={this.toggleNav} >
                            <i className="ion-navicon-round" />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isNavOpen: state.isNavOpen
    }
}

export default connect(mapStateToProps, { toggleNav })(NavBar);