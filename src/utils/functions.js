import { MIN_PASSWORD_LENGTH, VALID_EMAIL } from './constants';

export const emailValidation = (email) => {
  const validEmail = VALID_EMAIL.test(email);

  return validEmail ? '' : 'Email inválido';
};

export const passwordValidation = (password) => {
  const validPassword = password.length >= MIN_PASSWORD_LENGTH;

  return validPassword ? '' : (`A senha deve ter no mínimo 
    ${MIN_PASSWORD_LENGTH} caracteres`);
};
