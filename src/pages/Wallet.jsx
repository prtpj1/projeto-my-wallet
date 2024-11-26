/* eslint-disable max-lines */
import React from 'react';
import { connect } from 'react-redux';
import propTypes, { string, func, arrayOf } from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt } from 'react-icons/fa';
import { thunkFetchCurrencies, thunkFetchExpenses, deleteExpense } from '../actions';
import ExpenseTableHead from '../components/ExpenseTableHead';

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
      <div className="wallet-container">
        <header className="header-container">
          <h1 className="header-title">MyWallet</h1>
          <section className="header-user-data">
            <p data-testid="email-field">
              {`Email: ${email}`}
            </p>
            <section className="header-currency-container">
              <span data-testid="header-currency-field">
                Total de despesas:
              </span>
              <span data-testid="total-field">
                {` ${this.toRealExpenses()}`}
              </span>
            </section>
          </section>
        </header>
        <nav className="nav-container">
          <label
            className="nav-label"
            htmlFor="valor"
          >
            Valor:
            <input
              className="nav-input nav-value"
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
            className="nav-label"
            htmlFor="currency"
          >
            Moeda:
            <select
              className="nav-input nav-currency"
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
            className="nav-label"
            htmlFor="method"
          >
            Método de Pagamento:
            <select
              className="nav-input nav-method"
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
            className="nav-label"
            htmlFor="tag"
          >
            Tag:
            <select
              className="nav-input nav-tag"
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
            className="nav-label"
            htmlFor="description"
          >
            Descrição:
            <input
              className="nav-input nav-description"
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
            className="button btn-add-expense"
            onClick={ this.handleClickAdd }
            type="submit"
          >
            Adicionar despesa
          </button>
        </nav>
        <section className="table-container-wrapper">
          <table className="table-container">
            <ExpenseTableHead />
            <tbody className="table-body">
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
                  <div className="table-btns-container">
                    <button className="button-editar" type="button">
                      Editar
                    </button>
                    <button
                      className="button-excluir"
                      type="button"
                      onClick={ () => this.handleClickDelete(exp.id) }
                    >
                      <FaTrashAlt size={ 15 } />
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
