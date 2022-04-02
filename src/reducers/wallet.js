// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { WALLET } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      wallet: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
