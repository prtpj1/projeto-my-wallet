import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ExpenseTable from '../components/ExpenseTable';
import Select from '../components/Select';
import { actionFetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getWallet } = this.props;
    getWallet();
    // console.log(getWallet);
  }

  render() {
    const {
      currencies,
      description,
      email,
      payMethod,
      valor,
    } = this.props;

    const tagOpts = ['Alimentação', 'Lazer', 'Saúde', 'Transporte', 'Trabalho'];
    // console.log(currencies);

    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <p data-testid="email-field">
            Email:
            {email}
          </p>
          <p data-testid="total-field">
            0
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
        <nav>
          <label htmlFor="valor">
            Valor:
            <input
              data-testid="value-input"
              id="valor"
              name="valor"
              type="text"
              value={ valor }
            />
          </label>
          <div data-testid="currency-input">
            <Select
              defaultOption={ currencies[0] }
              id="currency"
              label="Moeda: "
              name="currency"
              options={ currencies }
              value={ currencies[0] }
            />
          </div>
          <label htmlFor="payMethod">
            Método de Pagamento:
            <select
              data-testid="method-input"
              id="payMethod"
              name="payMethod"
              value={ payMethod }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <div data-testid="tag-input">
            <Select
              defaultOption="Selecione"
              id="tag"
              label="Tag: "
              name="tag"
              options={ tagOpts }
            />
          </div>

          <label htmlFor="descript">
            Descrição:
            <input
              data-testid="description-input"
              id="descript"
              name="descript"
              type="text"
              value={ description }
            />
          </label>
          <button
            // onClick={ this.handleClick }
            type="button"
          >
            Adicionar despesa
          </button>
        </nav>
        <main>
          <ExpenseTable />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  // ifFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getWallet: () => dispatch(actionFetchCurrencies()),
});

Wallet.propTypes = {
  currencies: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  getWallet: propTypes.func.isRequired,
  payMethod: propTypes.string.isRequired,
  valor: propTypes.string.isRequired,
  // wallet: propTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

/*
          {/* <label htmlFor="currency">
            Moeda:
            <select
              data-testid="currency-input"
              id="currency"
              name="currency"
              value={ setCurrency }
            >
              <option>USD</option>
            </select>
          </label>
<label htmlFor="tag">
  Método de Pagamento:
            <select
    data-testid="tag-input"
    id="tag"
    name="tag"
    value={ tag }
  >
    <option>Alimentação</option>
    <option>Lazer</option>
    <option>Trabalho</option>
    <option>Transporte</option>
    <option>Saúde</option>
  </select>
</label>;
*/
