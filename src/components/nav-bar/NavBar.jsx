import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const NavBar = ({ formState, formActions, currencies }) => {
  const { value, currency, method, tag, description } = formState;
  const { handleChange, handleBlur, clearInput, handleClickAdd } = formActions;
  return (
    <nav className="nav">
      <label
        className="nav__label"
        htmlFor="valor"
      >
        Valor:
        <input
          className="nav__input nav__value"
          data-testid="value-input"
          id="valor"
          name="value"
          onChange={ handleChange }
          onFocus={ clearInput }
          type="number"
          onBlur={ (e) => handleBlur(e) }
          value={ value }
        />
      </label>
      <label
        className="nav__label"
        htmlFor="currency"
      >
        Moeda:
        <select
          className="nav__input nav__currency"
          data-testid="currency-input"
          id="currency"
          name="currency"
          onChange={ handleChange }
          value={ currency }
        >
          {currencies.map((option) => (
            <option
              key={ uuidv4() }
              id={ option }
              value={ option }
            >
              {option}
            </option>
          ))}
        </select>
      </label>
      <label
        className="nav__label"
        htmlFor="method"
      >
        Método de Pagamento:
        <select
          className="nav__input nav__method"
          data-testid="method-input"
          id="method"
          name="method"
          onChange={ handleChange }
          value={ method }
        >
          <option value="" disabled>Selecione uma opção</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
      <label
        className="nav__label"
        htmlFor="tag"
      >
        Tag:
        <select
          className="nav__input nav__tag"
          data-testid="tag-input"
          id="tag"
          name="tag"
          onChange={ handleChange }
          value={ tag }
        >
          <option value="" disabled>Selecione uma opção</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
      <label
        className="nav__label-description"
        htmlFor="description"
      >
        Descrição:
        <input
          className="nav__input nav__input-description"
          data-testid="description-input"
          id="description"
          name="description"
          type="text"
          onChange={ handleChange }
          value={ description }
          placeholder="Descreva ou nomeie a despesa"
        />
      </label>
      <button
        className="btn btn__add-expense"
        onClick={ handleClickAdd }
        type="submit"
      >
        Adicionar despesa
      </button>
    </nav>
  );
};

NavBar.propTypes = {
  formState: PropTypes.shape({
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  formActions: PropTypes.shape({
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    clearInput: PropTypes.func.isRequired,
    handleClickAdd: PropTypes.func.isRequired,
  }).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavBar;
