import React from 'react';
import { reduxForm, handleSubmit, Field } from 'redux-form';

const validateForm = (vales) => {
    const errors = {};

    // validation goes here

    return errors;
};

class Registration extends React.Component {

    submitForm(values) {
        console.debug(values);
    }

    render() {

        const {handleSubmit} = this.props;

        return (
            <div class="col-xs-12">
                <h1>Contacts</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h3>Join the Ghost community</h3>
                            <hr class="star-primary" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                                <div class="row control-group">
                                    <div class="form-group col-xs-12 ">
                                        <label>Email Address</label>
                                        <Field component="input" name="email" type="text" placeholder="max@payne.com" class="form-control" />
                                    </div>
                                </div>
                                <div class="row control-group">
                                    <div class="form-group col-xs-12 ">
                                        <label>Password</label>
                                        <Field component="input" name="password" type="password" class="form-control" />
                                    </div>
                                </div>
                                <br />
                                <div id="success"></div>
                                <div class="row">
                                    <div class="form-group col-xs-12">
                                        <button type="submit" class="btn btn-success btn-lg">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Registration = reduxForm({
    form: 'registrationForm',
    destroyOnUnmount: false,
    validate: validateForm
})(Registration);

export default Registration;
