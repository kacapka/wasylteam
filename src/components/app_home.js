import React, { Component } from 'react';
import NavBarHome from './navbar/navbar_home';
import ContentHome from './content/content_home';
import Footer from './footer/footer';

class AppHome extends Component {
    render() {
        return (
            <div>
                <div className="deskop">
                    <h1>please switch to mobile view</h1>
                    <h3>deskop view under construction</h3>
                </div>
                <div className="mobile app-container">
                    <NavBarHome />
                    <ContentHome />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default AppHome;
