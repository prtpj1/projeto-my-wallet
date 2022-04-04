// Coloque aqui suas actions
import getCurrenciesAPI from '../services/economiaApi';

export const USER = 'USER';
export const REQUEST_WALLET = 'REQUEST_WALLET';
export const FETCH_WALLET_OK = 'FETCH_WALLET_OK';
export const FETCH_WALLET_ERROR = 'FETCH_WALLET_ERROR';

export const setUser = (payload) => ({ type: USER, payload });

// export const requestWallet = () => ({
//   type: REQUEST_WALLET,
// });

export const requestWalletSuccess = (currencies) => ({
  type: FETCH_WALLET_OK,
  currencies,
});

export const fetchWallet = async (dispatch) => {
  // dispatch(requestWallet());
  const currencies = await getCurrenciesAPI();
  const currenciesKeys = Object.keys(currencies);
  const currenciesUSDT = currenciesKeys.filter((USDTElem) => !USDTElem.includes('USDT'));
  dispatch(requestWalletSuccess(currenciesUSDT));
  // console.log(currenciesKeys);
};

export const actionFetchCurrencies = () => fetchWallet;
