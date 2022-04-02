import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    const { currency, description, email, payMethod, tag, valor } = this.props;
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
          <label htmlFor="currency">
            Moeda:
            <select
              data-testid="currency-input"
              id="currency"
              name="currency"
              value={ currency }
            >
              <option>USD</option>
            </select>
          </label>
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
          </label>
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
            // disabled={ disabled }
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
});

Wallet.propTypes = {
  currency: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  payMethod: propTypes.string.isRequired,
  valor: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
