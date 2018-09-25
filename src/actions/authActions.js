import axios from 'axios';
import {setAuthToken} from '../utils';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from '../types';

export const loginUser = userData => dispatch => {
  axios
    .post('/users/login', userData)
    .then(res => {

      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>{
      return(
	      dispatch({
	        type: GET_ERRORS,
	        payload: err.response.data
	      })
	    )  
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};


export const logoutUser = history => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history ? history.push('/login') : window.location.href = '/login';
};