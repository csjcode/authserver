import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render(){
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email: </label>
          <input className="form-control" {...email} />
          <label>Password: </label>
          <input className="form-control" {...password} type="password" />
          <div>{ password.touched && password.error && <div className="error">{ password.error }</div>}</div>
          <label>Password Confirm: </label>
          <input className="form-control" {...passwordConfirm}  type="password" />
        </fieldset><button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

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
})(Signup);
