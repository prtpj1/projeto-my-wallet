import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUser } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      email: '',
      password: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    },
    () => this.inputValidation());
  }

  handleClick = () => {
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  inputValidation = () => {
    const { email, password } = this.state;
    const minSizePassWord = 6;
    const validEmail = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    const btnState = (email.match(validEmail) && password.length >= minSizePassWord)
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true });
    // console.log(btnState);
    return btnState;
  };

  render() {
    const { disabled } = this.state;
    const { email, password } = this.props;
    return (
      <div className="login-wrapper">
        <main className="login-container">
          <section className="login-inputs-container">
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
                type="email"
                value={ email }
              />
            </label>
            <label
              className="login-label"
              htmlFor="password"
            >
              Password
              <input
                className="password login-input"
                data-testid="password-input"
                id="password"
                name="password"
                onChange={ this.handleChange }
                type="password"
                value={ password }
              />
            </label>
          </section>
          <button
            className="button"
            disabled={ disabled }
            onClick={ this.handleClick }
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
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  dispatchSetValue: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
