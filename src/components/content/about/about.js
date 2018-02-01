import React, { Component } from 'react';

import Header from '../../reuse/header';
import SectionBox from '../../reuse/section_box';
import data from '../content_data';
import HomeInstagram from '../home/home_instagram';

class About extends Component {
    render() {
        return (
            <div>
                <Header 
                    title='MATEUSZ WASILEWSKI'
                    url={data.img.bgAbout} />
                <SectionBox title="KIM JESTEM">
                    <div className="section-description about-description">
                        {data.description.about}
                    </div>
                </SectionBox>
                <HomeInstagram 
                    numInRow="1" 
                    numOfImg="4"
                    instaTitle="#WASYLTEAM"/>
            </div>
        );
    }
}

export default About;