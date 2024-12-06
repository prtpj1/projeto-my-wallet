import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { editExpense } from '../../actions';

class ModalEditExpenses extends React.Component {
  constructor(props) {
    super(props);
    const { expense } = this.props;

    this.state = {
      value: expense.value,
      currency: expense.currency,
      method: expense.method,
      tag: expense.tag,
      description: expense.description,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleOverlayClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleOverlayClose);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleConfirm = (e) => {
    e.preventDefault();
    const { dispatch, expense, onClose } = this.props;
    const updateExpense = {
      ...expense,
      ...this.state,
    };

    dispatch(editExpense(updateExpense));
    onClose();
  }

  handleCancel = () => {
    const { onClose } = this.props;
    onClose();
  }

  handleOverlayClose = (e) => {
    if (e.target === e.currentTarget || e.key === 'Escape') {
      this.handleCancel();
    }
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;

    return (
      <div
        className="modal__overlay"
        onClick={ this.handleOverlayClose }
        onKeyDown={ this.handleOverlayClose }
        role="presentation"
      >
        <div className="modal__wrapper">
          <h2 className="modal__title">Editar Despesas</h2>
          <form className="modal__form" onSubmit={ this.handleConfirm }>

            <label htmlFor="value">
              Valor:
              <input
                name="value"
                onChange={ this.handleChange }
                required
                type="number"
                value={ value }
              />
            </label>

            <label htmlFor="currency">
              Moeda:
              <select
                name="currency"
                onChange={ this.handleChange }
                required
                type="text"
                value={ currency }
              >
                {currencies.map((currencyElement) => (
                  <option
                    key={ currencyElement }
                    value={ currencyElement }
                  >
                    {currencyElement}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="method">
              Método:
              <select
                name="method"
                onChange={ this.handleChange }
                required
                type="text"
                value={ method }
              >
                <option value="" disabled>Selecione uma opção</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão de Crédito">Cartão de Crédito</option>
                <option value="Cartão de Débito">Cartão de Débito</option>
              </select>
            </label>

            <label htmlFor="tag">
              Tag:
              <select
                name="tag"
                onChange={ this.handleChange }
                required
                type="text"
                value={ tag }
              >
                <option value="" disabled>Selecione uma opção</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Transporte">Transporte</option>
                <option value="Saúde">Saúde</option>
              </select>
            </label>

            <label htmlFor="description">
              Descrição:
              <input
                name="description"
                onChange={ this.handleChange }
                required
                type="text"
                value={ description }
              />
            </label>

            <div className="modal__wrapper-btns">
              <button
                className="modal__btn btn-cancel"
                onClick={ this.handleCancel }
                type="button"
              >
                <MdCancel size={ 32 } />
              </button>
              <button
                className="modal__btn btn-confirm"
                type="submit"
              >
                <FaCheckCircle size={ 32 } />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ModalEditExpenses.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(ModalEditExpenses);
