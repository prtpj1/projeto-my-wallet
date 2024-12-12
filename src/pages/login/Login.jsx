import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUser } from '../../actions/index';
import { MIN_PASSWORD_LENGTH } from '../../utils/constants';
import { emailValidation, passwordValidation } from '../../utils/functions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonDisabled: true,
      email: '',
      password: '',
      invalidEmail: '',
      invalidPassword: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    },
    () => this.inputValidation());
  }

  handleLogin = () => {
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;

    localStorage.setItem('useEmail', email);
    dispatchSetValue(email);
    history.push('/carteira');
  }

  inputValidation = () => {
    const { email, password } = this.state;
    const invalidEmail = emailValidation(email);
    const invalidPassword = passwordValidation(password);

    this.setState({
      isButtonDisabled: !(invalidEmail === '' && invalidPassword === ''),
      invalidEmail,
      invalidPassword,
    });
  };

  render() {
    const {
      isButtonDisabled,
      email,
      password,
      invalidEmail,
      invalidPassword,
    } = this.state;

    return (
      <div className="login__wrapper">
        <div className="info__container">
          <h3>Aviso:</h3>
          <p>
            Esta aplicação possui apenas o frontend,
            por tanto o email pode ser ficticio.
          </p>
          <p>
            Qualquer email que você colocar, servirá!
          </p>
        </div>
        <main className="login__container">
          <section className="login-inputs__container">
            <label
              className="login-label"
              htmlFor="email"
            >
              Email
              <input
                className="email login-input"
                data-testid="email-input"
                id="email"
                name="email"
                onChange={ this.handleChange }
                placeholder="email@email.com"
                required
                type="email"
                value={ email }
              />
            </label>
            {(invalidEmail && <span className="error-message">{invalidEmail}</span>)}
            <label
              className="login-label"
              htmlFor="password"
            >
              Password
              <input
                className="password login-input"
                data-testid="password-input"
                id="password"
                minLength={ MIN_PASSWORD_LENGTH }
                name="password"
                onChange={ this.handleChange }
                placeholder="min. 6 caracteres"
                required
                type="password"
                value={ password }
              />
            </label>
            {(
              invalidPassword
              && <span className="error-message">{invalidPassword}</span>)}
          </section>
          <button
            className="btn"
            disabled={ isButtonDisabled }
            onClick={ this.handleLogin }
            type="button"
          >
            Entrar
          </button>
        </main>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (emailValue) => dispatch(setUser(emailValue)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatchSetValue: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
