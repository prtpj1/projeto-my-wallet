// Coloque aqui suas actions
import getCurrenciesAPI from '../services/economiaApi';

export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const FETCH_WALLET_OK = 'FETCH_WALLET_OK';
export const REQUEST_WALLET = 'REQUEST_WALLET';
export const USER = 'USER';

export const requestWalletSuccess = (currencies) => ({
  type: FETCH_WALLET_OK,
  currencies,
});

export const setExpenses = (expenses, exchangeRates) => ({
  type: FETCH_EXPENSES,
  expenses: {
    ...expenses,
    exchangeRates,
  },
});

export const setUser = (payload) => ({ type: USER, payload });

export const thunkFetchCurrencies = () => async (dispatch) => {
  const currencies = await getCurrenciesAPI();
  const currenciesKeys = Object.keys(currencies);
  const currenciesUSDT = currenciesKeys.filter((USDTElem) => !USDTElem.includes('USDT'));
  dispatch(requestWalletSuccess(currenciesUSDT));
};

export const thunkFetchExpenses = (state) => async (dispatch) => {
  const currencies = await getCurrenciesAPI();
  dispatch(setExpenses(state, currencies));
};
