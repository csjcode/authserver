import { React, Component } from 'react';
import ( reduxForm ) from 'redux-form';

class Signin extends Component {
  render(){
    return (
      <form>
        <fieldset className="form-group">
          <label>Email</label>
          <input className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input className="form-control"/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
    form: 'signin',
    fields:['email','password']
})(Signin);
