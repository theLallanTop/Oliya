import { apiDispatch } from '../../helpers/ApiClient';
import api from '../../helpers/ApiClient';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const initialState = {
  isBusy: false,
  ErorMessage: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case LOGIN:
      return { ...state, isBusy: true };
    case LOGIN_SUCCESS:
      return { ...state, isBusy: false, authToken: action.result.accessToken,
        user: action.result.user, ErorMessage: '' };
    case LOGIN_FAIL:
      return { ...state, isBusy: false, ErorMessage: 'Invalid Username/Password' };
    default:
      return state;
  }
}

export function login(data, isconnected) {
  return (dispatch, getState) => new Promise((resolve, reject) => {
    resolve();
  })
}

export function logout() {
  return apiDispatch([LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL], 'delete', '/sessions');
}
