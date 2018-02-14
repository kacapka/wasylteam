import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';


const FIELDS = {
    name: {
        htmltag: 'input',
        type: 'text',
        label: 'imię'
    },
    email: {
        htmltag: 'input',
        type: 'email',
        label: 'mail'
    },
    subject: {
        htmltag: 'input',
        type: 'text',
        label: 'temat'
    },
    message: {
        htmltag: 'textarea',
        type: 'text',
        label: 'twoja wiadomość'
    }
}

class MailForm extends Component {
    
    constructor(props) {
        super(props);
        
        this.renderField = this.renderField.bind(this);
    }
    
    renderField(field) {
        const { type, label} = field.config;
        const className = field.meta.touched ? field.meta.error : '';
    
        return (
            <div className="mail-form-box">
                <label>{label}</label>
                <field.config.htmltag type={type} 
                    {...field.input} />
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
        
        //in action creator in axios use .then() method to set and invoke callback
        
        console.log(values);
    }
    
    render() {
        const { handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}
                className='mail-form'>
                <Field name="name"
                    config={FIELDS.name}
                    component={this.renderField}
                />
                <Field name="email"
                    config={FIELDS.email}
                    component={this.renderField}
                />
                <Field name="subject"
                    config={FIELDS.subject}
                    component={this.renderField}
                />
                <Field name="message"
                    config={FIELDS.message}
                    component={this.renderField}
                />
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
    validate
})(MailForm);


// when user is logged in get name and adress - set initial values

/*
initialValues: {
    name: 'kacapka',
    email: 'kacapka@gmail.com'
},
*/