import React, { Component } from 'react';
import NavItem from './nav_mobile_item';

class NavBarMobileUser extends Component {
    render() {
        return (    
            <ul className="mobile-nav">
                <NavItem to='/user/home' name='home' />
                <NavItem to='/user/plan' name='plan treningowy' />
                <NavItem to='/user/payment' name='patnosci' />
                <NavItem to='/user/contact' name='zadaj pytanie' />
                <NavItem to='/' name='wyloguj się' />
            </ul>   
        );
    }
}

export default NavBarMobileUser;