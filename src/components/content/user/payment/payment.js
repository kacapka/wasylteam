import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../../reuse/header';
import data from '../../content_data';
import SectionBox from '../../../reuse/section_box';
import PriceBox from './price_box';
import YellowBox from '../../../reuse/yellow_box';

class Payment extends Component {
    
    constructor(props) {
        super(props);
        
        this.onClickHandle = this.onClickHandle.bind(this);
    }
    
    onClickHandle() {
        console.log(this.props.price); 
        //action goes here
    }
    
    render() {
        const { yellowBox } = data;
    
        return(
            <header>
                <Header 
                    title='WITAJ USERNAME'
                    url={data.img.bgHome} />
                <div className="user-header">
                    <div className="section-description">
                        {data.description.user}
                    </div>
                </div>
                <section>
                    <SectionBox title="WYBIERZ PAKIET">
                        <PriceBox />
                        <YellowBox 
                            icon="ion-information-circled"
                            text={yellowBox.pricing} />
                        <YellowBox 
                            icon="ion-ios-medical"
                            text={yellowBox.premium} />
                    </SectionBox>
                    <SectionBox title="DOKONAJ PŁATNOŚCI">
                        <div className="btn-wrapper-pay">
                            <div 
                            onClick={this.onClickHandle}
                            className="app-button btn-sign-up-red">
                                Zapłać
                            </div>
                        </div>
                        <YellowBox 
                            icon="ion-information-circled"
                            text={yellowBox.payment} />
                    </SectionBox>
                </section>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        price: state.selectedPrice
    }
}

export default connect(mapStateToProps)(Payment);