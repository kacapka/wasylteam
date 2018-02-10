import React, { Component } from 'react';
import NavItem from './nav_mobile_item';

class NavBarMobileUser extends Component {
    render() {
        return (
            <div className={`nav ${this.props.isOpen}`}>
                <ul className="mobile-nav">
                    <NavItem to='/home' name='home' />
                    <NavItem to='/plan' name='plan treningowy' />
                    <NavItem to='/payment' name='patnosci' />
                    <NavItem to='/contact' name='zadaj pytanie' />
                    <NavItem to='/home' name='wyloguj się' />
                </ul> 
            </div>
        );
    }
}

export default NavBarMobileUser;