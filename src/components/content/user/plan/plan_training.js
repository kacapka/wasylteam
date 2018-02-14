import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

class PlanTraining extends Component {
    
    constructor(props) {
        super(props);
        
        this.renderTraining = this.renderTraining.bind(this);
    }
    
    renderTraining() {
        
        const day = this.props.trainings.find(el => el.date === this.props.date);
        
        if (!day) return (
            <div 
            className="section-training-box"
            key={this.props.date}>
                <div className="section-name not-found">
                    <span>BRAK</span>
                    <span className="color-red">TRENINGU</span>
                </div>
            </div>
        );
        
        return (
            <div 
                className="section-training-box"
                key={this.props.date}>
                <div className="section-name training-name">
                    {`"${day.name}"`}
                </div>
                {day.parts.map(part => {
                    const list = (part) => {
                        return part.exercises.map((ex, index) => {
                            return (
                                <div className="exercise-box" key={ex.id}>
                                    <div className="exercise-name">
                                        {`${index+1}. ${ex.name}`}
                                    </div>
                                    <div className="exercise-details">
                                        {ex.desc}
                                    </div>
                                </div>    
                            );
                        });
                    } 
                    return (
                        <div 
                        className="training-box"
                        key={part.id}>
                            <div className="training-part-name">
                                {part.name}
                            </div>
                            {list(part)}
                        </div>
                    );
                })}
            </div>
        ); 
    }

    render() {

        const transitionOpt = {
            transitionName: this.props.direction,
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 100,
            component: 'div',
            className: 'section-training'
        };

        return(
            <CSSTransitionGroup {...transitionOpt} >
                    {this.renderTraining()}
            </CSSTransitionGroup>
        );
    }
}

function mapStateToProps(state) {
    return {
        trainings: state.trainings,
        date: state.activeDate.date,
        direction: state.transitionPlan
    }
}


export default connect(mapStateToProps)(PlanTraining);


