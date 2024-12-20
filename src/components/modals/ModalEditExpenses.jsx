import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense } from '../../actions';
import Label from '../Label';
import Select from '../Select';
import { METHOD_OPTIONS, TAG_OPTIONS } from '../../utils/constants';
import ModalButtons from './ModalButtons';
import { isFormValid } from '../../utils/functions';

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

    const formValid = isFormValid({ value, currency, method, tag, description });

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

            <Label
              className="modal__label"
              htmlFor="valor"
              text="Valor:"
            >

              <input
                className="modal__field modal__value"
                data-testid="value-input"
                id="valor"
                name="value"
                onChange={ this.handleChange }
                required
                type="number"
                value={ value }
              />
            </Label>
            <Label
              className="modal__label"
              htmlFor="currency"
              text="Moeda:"
            >
              <Select
                className="modal__field"
                id="currency"
                name="currency"
                onChange={ this.handleChange }
                options={ currencies }
                required
                value={ currency }
              />
            </Label>
            <Label
              htmlFor="method"
              text="Método de Pagamento"
              className="modal__label"
            >
              <Select
                className="modal__field"
                id="method"
                name="method"
                onChange={ this.handleChange }
                options={ METHOD_OPTIONS }
                required
                value={ method }
              />
            </Label>
            <Label
              className="modal__label"
              text="Tag:"
              htmlFor="tag"
            >
              <Select
                className="modal__field"
                id="tag"
                name="tag"
                onChange={ this.handleChange }
                options={ TAG_OPTIONS }
                required
                value={ tag }
              />
            </Label>
            <Label
              className="modal__label"
              htmlFor="description"
              text="Descrição:"
            >

              <input
                className="modal__field modal__field-description"
                data-testid="description-input"
                id="description"
                name="description"
                onChange={ this.handleChange }
                placeholder="Descreva ou nomeie a despesa"
                required
                type="text"
                value={ description }
              />
            </Label>

            <ModalButtons
              disabled={ !formValid }
              onCancel={ this.handleCancel }
              onConfirm={ this.handleConfirm }
            />
          </form>
        </div>
      </div>
    );
  }
}

ModalEditExpenses.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
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
