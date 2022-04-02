// Coloque aqui suas actions

export const USER = 'USER';
export const WALLET = 'WALLET';

export const setUser = (payload) => ({ type: USER, payload });

export const setWallet = (payload) => ({ type: WALLET, payload });
