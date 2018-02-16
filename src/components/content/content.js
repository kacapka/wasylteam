import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/home';
import SignUp from './signup/signup';
import Contact from './contact/contact';
import About from './about/about';
import Plan from './user/plan/plan';
import Payment from './user/payment/payment';
import ContactUser from './user/contact/contact';
import HomeUser from './user/home/home';

class ContentHome extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/user/plan" component={Plan} />
                    <Route path="/user/payment" component={Payment} />
                    <Route path="/user/contact" component={ContactUser} />
                    <Route path="/user/" component={HomeUser} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>
        );
    }
}

export default ContentHome;


