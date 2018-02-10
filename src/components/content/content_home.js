import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/home';
import SignUp from './signup/signup';
import Contact from './contact/contact';
import About from './about/about';

class ContentHome extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>
        );
    }
}

export default ContentHome;


