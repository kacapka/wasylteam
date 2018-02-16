import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBarUser from './navbar_mobile_user';
import NavBarPublic from './navbar_mobile_public';

class NavBarMobile extends Component {
     
    render() {     
        return (
            <div className={`nav ${this.props.isOpen}`}>
                <Switch>
                    <Route path="/user" component={NavBarUser} />
                    <Route path="/" component={NavBarPublic} />
                </Switch>
            </div>
        );
    }
}

export default NavBarMobile;