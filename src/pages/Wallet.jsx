import React from 'react';
import { connect } from 'react-redux';
import propTypes, { string, func, arrayOf } from 'prop-types';

import { thunkFetchCurrencies, thunkFetchExpenses } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(thunkFetchCurrencies());
    console.log(dispatch);
  }

  handleClick = async (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(thunkFetchExpenses(this.state));

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    }));
  }

  toRealExpenses = () => {
    const { expenses } = this.props;
    const toRealExp = expenses.map((expense) => {
      const expValueRate = (+expense.value)
      * (+expense.exchangeRates[expense.currency].ask);
      return expValueRate;
    });
    const totalExpenses = toRealExp.reduce((acc, curr) => curr + acc, 0).toFixed(2);
    return totalExpenses;
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
      <div>
        <header className="header-container">
          <h1 className="header-title">TrybeWallet</h1>
          {/* <hr /> */}
          <section className="heaer-user-data">
            <p data-testid="email-field">
              {/* Email: */}
              {`Email: ${email}`}
            </p>
            <section className="header-currency-container">
              <span data-testid="total-field">
                {`$${this.toRealExpenses()}`}
              </span>
              <span data-testid="header-currency-field">
                BRL
              </span>
            </section>
          </section>
        </header>
        <nav className="nav-container">
          {/* <hr /> */}
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
              type="number"
              value={ (+value).toFixed(2) }
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
              {currencies.map((option, index) => (
                <option
                  key={ index }
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
            />
          </label>
          <button
            className="button"
            onClick={ this.handleClick }
            type="submit"
          >
            Adicionar despesa
          </button>
          {/* <hr /> */}
        </nav>
        <table className="table-container">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
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
                  <button className="button-excluir" type="button">
                    X
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
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
