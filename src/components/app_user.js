import React, { Component } from 'react';
import NavBarUser from './navbar/navbar_user';
import ContentUser from './content/content_user';
import Footer from './footer/footer';

class AppUser extends Component {
    render() {
        return (
            <div>
                <div className="deskop">
                    <h1>please switch to mobile view</h1>
                    <h3>deskop view under construction</h3>
                </div>
                <div className="mobile app-container">
                    <NavBarUser />
                    <ContentUser />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default AppUser;
