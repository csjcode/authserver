import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function functionName(dispatch) {
    // Submit to server
    axios.post(`${ROOT_URL}/signin`, { email, password }) // email:email, pasword:pasword  ... etc.
      .then(response => {
        // If good:
        // Update state to Authenticated
        // Save JWT token


        // redirect to the route /feature
        browserHistory.push('/feature');
      })
      .catch(() => {

      })


    // If request is Based
    // Show an error
  }

};
