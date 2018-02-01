import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PriceItem from '../../reuse/price_item';
import Header from '../../reuse/header';
import data from '../content_data';

class HomeHeader extends Component {
    render() {
        const { pricing } = data;
        
        return (
            <header>
                <Header 
                    title='WASYL TEAM' 
                    url={data.img.bgHome}/>
                <div className="section section-pricing">
                    <Link 
                        className="app-button btn-sign-up"
                        to="/signup">
                        Załóż konto
                    </Link>
                    <div className="section-description greet-description">
                        {data.description.home}
                    </div>
                    <div className="price-box">
                        <PriceItem 
                            price={pricing[0][0]} period={pricing[0][1]}
                            name='' />
                        <PriceItem 
                            price={pricing[1][0]} period={pricing[1][1]}
                            name='' />
                        <PriceItem 
                            price={pricing[2][0]} period={pricing[2][1]}
                            name="price-item-highlight" />
                    </div>
                    <div className="section-description">
                        <span className="yellow-sign">*</span> dla posiadaczy konta PREMIUM spersonalizowany plan dietetyczny 
                    </div>
                </div>   
            </header>
        );
    }
}

export default HomeHeader;