import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionBox from '../../../reuse/section_box';
import { setDateBack,
         setDateForward
} from '../../../../actions/index';

class PlanDate extends Component {
    
    constructor(props) {
        super(props);
        
        this.dayBack = this.dayBack.bind(this);
        this.dayForward = this.dayForward.bind(this);
    }
    
    dayBack() {
        this.props.setDateBack(this.props.date.moment);
    }
    
    dayForward() {
        this.props.setDateForward(this.props.date.moment);
    }
    
    render() {
        const { date } = this.props;
        
        return(
            <SectionBox title="TRENING DNIA">
                <div className="plan-date">
                    <div 
                        className="date-arrow"
                        onClick={this.dayBack}>
                            <i className="ion-ios-arrow-back" />
                    </div>
                    <div className="date-info">
                        <div className="date-info-box">
                            <span className="date-info-item">
                                {date.dayNum}
                            </span>
                            <span className="date-info-item">
                                {date.month}
                            </span>
                        </div>
                        <div className="date-info-box">
                            <span className="date-info-item">
                                {date.dayWord}
                            </span>
                        </div>
                    </div>
                    <div 
                        className="date-arrow"
                        onClick={this.dayForward} >
                        <i className="ion-ios-arrow-forward" />
                    </div>
                </div>
            </SectionBox>
        );
    }
}

function mapStateToProps(state) {
    return {
        date: state.activeDate
    }
}

export default connect(mapStateToProps, { setDateBack, setDateForward })(PlanDate);