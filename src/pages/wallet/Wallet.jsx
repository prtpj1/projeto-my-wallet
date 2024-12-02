/* eslint-disable max-lines */
import React from 'react';
import { connect } from 'react-redux';
import propTypes, { string, func, arrayOf } from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';

import { thunkFetchCurrencies, thunkFetchExpenses, deleteExpense } from '../../actions';
import ExpenseTableHead from '../../components/ExpenseTableHead';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      currency: 'USD',
      description: '',
      method: '',
      tag: '',
      value: '0.00',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(thunkFetchCurrencies());
  }

  clearInput = (e) => {
    e.target.value = '';
  }

  handleBlur = (e) => {
    const value = Number.parseFloat(e.target.value || 0.00).toFixed(2);
    this.setState({ value });
  }

  handleClickAdd = async (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(thunkFetchExpenses(this.state));

    this.setState((prevState) => ({
      id: prevState.id + 1,
      currency: 'USD',
      description: '',
      method: '',
      tag: '',
      value: '0.00',
    }));
  }

  handleClickDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteExpense(id));
  }

  toRealExpenses = () => {
    const { expenses } = this.props;
    const toRealExp = expenses.map((expense) => {
      const expValueRate = (+expense.value)
      * (+expense.exchangeRates[expense.currency].ask);
      return expValueRate;
    });
    const totalExpenses = toRealExp.reduce((acc, curr) => curr + acc, 0).toFixed(2);
    const formattedExpenses = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(totalExpenses);

    return formattedExpenses;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies, email, expenses } = this.props;
    const {
      currency,
      description,
      method,
      tag,
      value,
    } = this.state;

    return (
      <div className="wallet__container">
        <header className="header">
          <h1 className="header__title">MyWallet</h1>
          <section className="header__user-data">
            <p data-testid="email-field">
              {`Email: ${email}`}
            </p>
            <section className="header__currency-container">
              <span data-testid="header-currency-field">
                Total de despesas:
              </span>
              <span data-testid="total-field">
                {` ${this.toRealExpenses()}`}
              </span>
            </section>
          </section>
        </header>
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
              onChange={ this.handleChange }
              onFocus={ this.clearInput }
              type="number"
              onBlur={ (e) => this.handleBlur(e) }
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
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
              value={ description }
              placeholder="Descreva ou nomeie a despesa"
            />
          </label>
          <button
            className="btn btn__add-expense"
            onClick={ this.handleClickAdd }
            type="submit"
          >
            Adicionar despesa
          </button>
        </nav>
        <section className="table__wrapper">
          <table className="table__container">
            <ExpenseTableHead />
            <tbody className="table__body">
              {expenses.map((exp) => (
                <tr key={ exp.id }>
                  <td>{exp.description}</td>
                  <td>{exp.tag}</td>
                  <td>{exp.method}</td>
                  <td>{(+exp.value).toFixed(2)}</td>
                  <td>{exp.exchangeRates[exp.currency].name}</td>
                  <td>{(+exp.exchangeRates[exp.currency].ask).toFixed(2)}</td>
                  <td>
                    {((+exp.value)
                * (+exp.exchangeRates[exp.currency].ask)).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <div className="table__btns">
                    <button className="table__btn btn__editar" type="button">
                      <FaRegEdit size={ 20 } />
                    </button>
                    <button
                      className="table__btn btn__excluir"
                      type="button"
                      onClick={ () => this.handleClickDelete(exp.id) }
                    >
                      <FaTrashAlt size={ 18 } />
                    </button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  currencies: arrayOf(string).isRequired,
  dispatch: func.isRequired,
  email: string.isRequired,
  expenses: arrayOf(propTypes.any).isRequired,
};

export default connect(mapStateToProps)(Wallet);
