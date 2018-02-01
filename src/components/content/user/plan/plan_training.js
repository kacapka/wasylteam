import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlanDate extends Component {
    
    renderTraining() {
        const day = this.props.trainings.find(el => el.date === this.props.date);
        
        if (!day) return (
            <div className="section-name not-found">
                <span>BRAK</span>
                <span className="color-red">TRENINGU</span>
            </div>
        );
        
        return (
            <div>
                <div className="section-name training-name">
                    {day.name}
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
                        <div key={part.id}>
                            <div className="training-box" >
                                <div className="training-part-name">
                                    {part.name}
                                </div>
                                {list(part)}
                            </div>
                        </div>
                    );
                })}
            </div>
        ); 
    }
      
    render() {
        return(
            <div className="section-box section-training">
                {this.renderTraining()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        trainings: state.trainings,
        date: state.activeDate.date
    }
}


export default connect(mapStateToProps)(PlanDate);