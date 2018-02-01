import React, { Component } from 'react';

class SectionBox extends Component {
    render() {
        const className = `section-box ${this.props.nameClass ? this.props.nameClass : ''}`;
        return (
            <div className={className}>
                <div className="section-name">{this.props.title}</div>
                {this.props.children}
            </div>
        );
    }
}

export default SectionBox;