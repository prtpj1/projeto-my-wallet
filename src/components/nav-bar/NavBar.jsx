import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import Label from '../Label';
import { METHOD_OPTIONS, TAG_OPTIONS } from '../../utils/constants';
import Button from '../Button';

const NavBar = ({ formState, formActions, currencies }) => {
  const { value, currency, method, tag, description } = formState;
  const { handleChange, handleBlur, clearInput, handleClickAdd } = formActions;
  return (
    <nav className="nav">
      <Label
        className="nav__label"
        htmlFor="valor"
        text="Valor:"
      >

        <input
          className="nav__input nav__value"
          data-testid="value-input"
          id="valor"
          name="value"
          onBlur={ (e) => handleBlur(e) }
          onChange={ handleChange }
          onFocus={ clearInput }
          required
          type="number"
          value={ value }
        />
      </Label>
      <Label
        className="nav__label"
        htmlFor="currency"
        text="Moeda:"
      >
        <Select
          className="nav__input"
          id="currency"
          name="currency"
          onChange={ handleChange }
          options={ currencies }
          required
          value={ currency }
        />
      </Label>
      <Label
        htmlFor="method"
        text="Método de Pagamento"
        className="nav__label"
      >
        <Select
          className="nav__input"
          id="method"
          name="method"
          onChange={ handleChange }
          options={ METHOD_OPTIONS }
          required
          value={ method }
        />
      </Label>
      <Label
        className="nav__label"
        text="Tag:"
        htmlFor="tag"
      >
        <Select
          className="nav__input"
          id="tag"
          name="tag"
          onChange={ handleChange }
          options={ TAG_OPTIONS }
          required
          value={ tag }
        />
      </Label>
      <Label
        className="nav__label-description"
        htmlFor="description"
        text="Descrição:"
      >

        <input
          className="nav__input nav__input-description"
          data-testid="description-input"
          id="description"
          name="description"
          onChange={ handleChange }
          placeholder="Descreva ou nomeie a despesa"
          required
          type="text"
          value={ description }
        />
      </Label>
      <Button
        className="btn btn__add-expense"
        onClick={ handleClickAdd }
        type="submit"
      >
        Adicionar despesa
      </Button>
      {/* <button
        className="btn btn__add-expense"
        onClick={ handleClickAdd }
        type="submit"
      >
        Adicionar despesa
      </button> */}
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
