import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to signup
    this.props.signupUser(formProps);
  }

  render(){
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email: </label>
          <input className="form-control" {...email} />
          { email.touched && email.error && <div className="error">{ email.error }</div>}
          <label>Password: </label>
          <input className="form-control" {...password} type="password" />
          { password.touched && password.error && <div className="error">{ password.error }</div>}
          <label>Password Confirm: </label>
          <input className="form-control" {...passwordConfirm}  type="password" />
          { passwordConfirm.touched && passwordConfirm.error && <div className="error">{ passwordConfirm.error }</div>}
        </fieldset><button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email){
    errors.email = 'Please enter an email';
  }

  if (!formProps.password){
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm){
    errors.passwordConfirm = 'Please enter a password confirmation';
  }


  if (formProps.password !== formProps.passwordConfirm){
    errors.password = "passwords must match";
  }


  // console.log(formProps);

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email','password','passwordConfirm'],
  validate
},null,actions)(Signup);
