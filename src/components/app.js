import React, { Component } from 'react';
import NavBar from './navbar/navbar';
import Content from './content/content';
import Footer from './footer/footer';

class App extends Component {
    render() {
        return (
            <div>
                <div className="deskop">
                    <h1>please switch to mobile view</h1>
                    <h3>deskop view under construction</h3>
                </div>
                <div className="mobile app-container">
                    <NavBar />
                    <Content />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
