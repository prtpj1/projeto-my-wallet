// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { REQUEST_WALLET, FETCH_WALLET_OK } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_WALLET:
    return {
      ...state,
    };
  case FETCH_WALLET_OK:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};
// console.log(FETCH_WALLET_OK);

export default wallet;
