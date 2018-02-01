import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';

import { fetchInsta } from '../../../actions/index';
import Spinner from '../../reuse/loading_spinner';
import BtnInsta from '../../reuse/button_insta';

class HomeInstagram extends Component {
    
    componentDidMount() {
        this.props.fetchInsta();
    }
    
    renderInstaFeed() {
        const { insta } = this.props;
        
        if (!insta.length) return <Spinner />;
        
        return insta
                .slice(0, this.props.numOfImg)
                .map(img => {  
                return (
                    <div 
                        className={`insta-box insta-box-${this.props.numInRow}`} 
                        key={img[1]} >
                        <a href={img[3]} target="_blank">
                            <img 
                                className="insta-img"
                                src={img[1]} />
                        </a>
                    </div>
                ); 
            }
        )
    }
    
    render() {
        return (
            <section className="home-instagram">
                <div className="section-name">
                    {this.props.instaTitle}
                </div>
                <div className="instagram-feed">
                    {this.renderInstaFeed()}
                </div>
                <BtnInsta text="obserwuj" />
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        insta: state.insta
    }
}

export default connect(mapStateToProps, { fetchInsta })(HomeInstagram);