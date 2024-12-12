// Esse reducer será responsável por tratar as informações da pessoa usuária

import { USER } from '../actions/index';

const INITIAL_STATE = {
  email: localStorage.getItem('userEmail') || '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    localStorage.setItem('userEmail', action.payload);
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
