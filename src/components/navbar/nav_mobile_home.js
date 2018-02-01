import React, { Component } from 'react';

import NavItem from './nav_mobile_item';

class NavMobileHome extends Component {
    render() {
        return (
            <ul className="mobile-nav">
                <NavItem to='/' name='home' />
                <NavItem to='/about' name='o mnie' />
                <NavItem to='/contact' name='kontak' />
                <NavItem to='/signup' name='zaloguj się' />
            </ul>
        );
    }
}

export default NavMobileHome;