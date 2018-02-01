import React, { Component} from 'react';

import SectionBox from '../../reuse/section_box';
import MailForm from '../../reuse/mail_form';

class Contact extends Component {
    render() {
        return (
            <SectionBox title="KONTAKT">
                <MailForm />
            </SectionBox>
        );
    }
}

export default Contact;