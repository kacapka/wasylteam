import React, { Component } from 'react';

import Header from '../../../reuse/header';
import data from '../../content_data';
import SectionBox from '../../../reuse/section_box';

class Home extends Component {
        
    render() {
        const { yellowBox } = data;
    
        return(
            <header>
                <Header 
                    title='Witaj USERNAME w moim teamie!'
                    url={data.img.bgHome} />
                <div className="user-header">
                    <div className="section-description">
                        {data.description.user}
                    </div>
                </div>
            </header>
        );
    }
}

export default Home;