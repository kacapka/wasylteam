import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavMobileHome from './nav_mobile_home';
import NavMobileUser from './nav_mobile_user';


class NavBarMobile extends Component {
    render() {
        return (
            <div className={`nav ${this.props.isOpen}`}>
                <Switch>
                    <Route path='/user' component={NavMobileUser} />
                    <Route path='/' component={NavMobileHome} />
                </Switch>  
            </div>
        );
    }
}

export default NavBarMobile;