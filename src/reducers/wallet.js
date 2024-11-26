// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  REQUEST_WALLET,
  FETCH_WALLET_OK,
  FETCH_EXPENSES,
  DELETE_EXPENSE,
} from '../actions/index';

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
  case FETCH_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expenses,
      ],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };

  default:
    return state;
  }
};
// console.log(FETCH_WALLET_OK);

export default wallet;
