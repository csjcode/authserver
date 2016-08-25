import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types'; // action types

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function (dispatch) {
    // Submit to server
    axios.post(`${ROOT_URL}/signin`, { email, password }) // email:email, pasword:pasword  ... etc.
      .then(response => {
        // If good:
        // Update state to Authenticated
        dispatch({ type: AUTH_USER });
        // Save JWT token
        localStorage.setItem('token',response.data.token)
        // redirect to the route /feature
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      })
    // If request is Based
    // Show an error
  }

};

export function signupUser({ email, password }) {
  return function (dispatch) {
    axios({
        url: `${ROOT_URL}/signup`,
        data: { email, password },
        method: 'post',
        responseType: 'json'
      })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(error => {
        dispatch(authError(error.response.data.error));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  };
};
