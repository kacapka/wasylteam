import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Plan from './user/plan/plan';
import Payment from './user/payment/payment';
import Contact from './user/contact/contact';
import Home from './user/home/home';

class ContentUser extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/plan" component={Plan} />
                    <Route path="/payment" component={Payment} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>
        );
    }
}

export default ContentUser;


