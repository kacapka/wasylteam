import React, { Component } from 'react';

import HomeHeader from './home_header';
import HomeInfo from './home_info';
import HomeInstagram from './home_instagram';

class Home extends Component {
    render() {
        return(
            <div>
                <HomeHeader />
                <HomeInfo />
                <HomeInstagram 
                    numInRow="2" 
                    numOfImg="8"
                    instaTitle="INSTAGRAM @WASYLTEAM"/>
            </div>
        );
    }
}

export default Home;