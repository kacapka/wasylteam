import React, { Component } from 'react';
import NavItem from './nav_mobile_item';

class NavBarMobileHome extends Component {
    render() {
        return (
            <div className={`nav ${this.props.isOpen}`}>
                <ul className="mobile-nav">
                    <NavItem to='/' name='home' />
                    <NavItem to='/about' name='o mnie' />
                    <NavItem to='/contact' name='kontak' />
                    <NavItem to='/signup' name='zaloguj się' />
                </ul> 
            </div>
        );
    }
}

export default NavBarMobileHome;