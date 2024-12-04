import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ email, totalExpenses }) => (
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
          {` ${totalExpenses}`}
        </span>
      </section>
    </section>
  </header>
);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.string.isRequired,
};

export default Header;
