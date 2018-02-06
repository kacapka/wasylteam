import React, { Component } from 'react';

import BtnInsta from '../../../reuse/button_insta';

class PlanInsta extends Component {
   
    render() {
        return(
            <div className="section-box section-box-insta">
                <div className="section-description description-insta">
                    Jeśli chcesz urozmaicić swój trening w dodtakowe ćwiczenia sprawdź moje InstaStory
                </div>
                <BtnInsta text="sprawdź" />
            </div>
        );
    }
}

export default PlanInsta;