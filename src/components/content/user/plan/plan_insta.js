import React, { Component } from 'react';

import SectionBox from '../../../reuse/section_box';
import BtnInsta from '../../../reuse/button_insta';

class PlanInsta extends Component {
   
    render() {
        return(
            <SectionBox title>
                <div className="section-description description-insta">
                    Jeśli chcesz urozmaicić swój trening w dodtakowe ćwiczenia sprawdź moje InstaStory
                </div>
                <BtnInsta text="sprawdź" />
            </SectionBox>
        );
    }
}

export default PlanInsta;