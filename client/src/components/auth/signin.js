import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  handleFormSubmit({ email, password }){
    console.log(email, password);
  }
  render(){
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email</label>
            <input {...email} className="form-control"/>
          </fieldset>
          <fieldset className="form-group">
            <label>Password</label>
            <input {...password} className="form-control"/>
          </fieldset>
          <button action="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
    form: 'signin',
    fields:['email','password']
})(Signin);
