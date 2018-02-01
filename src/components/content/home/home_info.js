import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import data from '../content_data';
import SectionBox from '../../reuse/section_box';
import InfoBox from '../../reuse/info_box';


class HomeInfo extends Component {
    render() {
        const { img } = data;
        
        return (
            <section>
                <SectionBox 
                nameClass="section-home-info"
                title="JESTEM TU DLA CIEBIE">
                    <div className="section-description">
                        {data.description.greet}
                    </div>
                    <InfoBox 
                        url={img.infoBox[0]}
                        title='plan treningowy'
                        text='codzienny zestaw ćwiczeń dla każdego niezależnie od poziomu zaawansowania'/>
                    <InfoBox 
                        url={img.infoBox[1]}
                        title='konsultacje'
                        text='wsparcie online'/>
                    <div className='yellow-frame'>
                        <InfoBox 
                            url={img.infoBox[2]}
                            title='plan dietetyczny'
                            text='spersonalizowana dieta wraz z  suplementacja'/>
                    </div>
                </SectionBox>
                <div className="btn-wrapper">
                    <Link 
                        className="app-button btn-sign-up-red"
                        to="/signup">
                        Załóż konto
                    </Link>
                </div>
            </section>
        );
    }
}

export default HomeInfo;