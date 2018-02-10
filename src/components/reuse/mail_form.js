import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';


const FIELDS = {
    name: {
        htmlTag: 'input',
        type: 'text',
        label: 'imię'
    },
    email: {
        htmlTag: 'input',
        type: 'email',
        label: 'mail'
    },
    subject: {
        htmlTag: 'input',
        type: 'text',
        label: 'temat'
    },
    message: {
        htmlTag: 'textarea',
        type: 'text',
        label: 'twoja wiadomość'
    }
}

class MailForm extends Component {
    
    renderField(field, type) {
        const fieldHelper = this.props.fields[type];
        const className = fieldHelper.touched ? fieldHelper.error : '';
    
        return (
            <div className="mail-form-box" key={field.label}>
                <label>{field.label}</label>
                <field.htmlTag
                    type={field.type}
                    {...fieldHelper}
                />
                <div className={`mail-alert ${className}`}>
                    <i className='ion-alert'></i>
                    pole obowiazkowe
                </div>
            </div>
        );
        
    }
  
    onSubmit(values) {
        //action goes here
        //this.props.sendMessage(values, callback);
        
        //as callback use this.props.history.push('path');
        //it navigate user to certain path after message is succeed
        
        //in action creator in axios use then method to set and invoke callback
        console.log(values);
    }
    
    render() {
        const { handleSubmit } = this.props;
        
        return (
            <form 
                onSubmit={handleSubmit(this.onSubmit.bind(this))}
                className='mail-form'>
                {_.map(FIELDS, this.renderField.bind(this))}
                <div className="flex-wrapper">
                    <button 
                        type="submit"
                        className="app-button btn-send-mail" >
                            Wyslij
                    </button>
                </div>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (field, type) => {
        if (!values[type]) {
            errors[type] = 'input-error';    
        }
    });

    return errors;
}


export default reduxForm({
    form: 'sendMail',
    fields: _.keys(FIELDS),
    /*initialValues: {
        name: 'kacapka',
        email: 'kacapka@gmail.com'
    },*/
    validate
})(MailForm);