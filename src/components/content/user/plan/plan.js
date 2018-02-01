import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../../reuse/header';
import data from '../../content_data';
import PlanDate from './plan_date';
import PlanTraining from './plan_training';
import PlanDescription from './plan_description';
import PlanInsta from './plan_insta';

import { setDate, fetchTrainings } from '../../../../actions/index';

class Plan extends Component {
    
    componentDidMount() {
        this.props.setDate();
        this.props.fetchTrainings();
    }
    
    render() {
        return (
            <div>
                <Header 
                    title='WITAJ USERNAME'
                    url={data.img.bgUser} />
                <section>
                    <PlanDate />
                    <PlanTraining />
                    <PlanDescription />
                    <PlanInsta />
                </section>
            </div>
        );
    }
}

export default connect(null, { setDate, fetchTrainings })(Plan);