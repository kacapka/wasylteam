import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionBox from '../../../reuse/section_box';

class PlanDescription extends Component {

    renderDescription() {
        const day = this.props.trainings.find(el => el.date === this.props.date); 
        if (!day || day.dsecription === null) return 'brak wskazówek dla wybranego treningu';
        
        return day.description;
    }
      
    render() {
        return(
            <SectionBox title="wskazówki">
                <div className="section-description">
                    {this.renderDescription()}
                </div>
            </SectionBox>
        );
    }
}

function mapStateToProps(state) {
    return {
        trainings: state.trainings,
        date: state.activeDate.date
    }
}


export default connect(mapStateToProps)(PlanDescription);