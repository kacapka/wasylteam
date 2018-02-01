import React, { Component } from 'react';

class YellowBox extends Component {
    render() {
        return (
            <div className="yellow-box">
                <i className={this.props.icon} />
                <div className="yellow-box-description">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default YellowBox;