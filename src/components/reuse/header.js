import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div 
                className="header-bg"
                style={{backgroundImage: this.props.url}} >
                    <div className="header-bg-name">
                        {this.props.title}
                    </div>
            </div>
        );
    }
}

export default Header;