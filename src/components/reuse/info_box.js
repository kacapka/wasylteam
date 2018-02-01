import React, { Component } from 'react';

class InfoBox extends Component {
    render() {
        return(
            <div className="info-box">
                <div 
                    className="info-box-img"
                    style={{backgroundImage: this.props.url}}
                    alt='photo' />
                <p className="info-box-title">
                    {this.props.title}
                </p>
                <p className="info-box-description">
                    {this.props.text}
                </p>
            </div>
        );
    }
}

export default InfoBox;