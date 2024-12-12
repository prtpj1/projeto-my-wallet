import React from 'react';
import { connect } from 'react-redux';
import propTypes, { string, func, arrayOf } from 'prop-types';

import { thunkFetchCurrencies, thunkFetchExpenses, deleteExpense } from '../../actions';
import Header from '../../components/header/Header';
import ExpenseTable from '../../components/expense-table/ExpenseTable';
import NavBar from '../../components/nav-bar/NavBar';
import ModalEditExpenses from '../../components/modals/ModalEditExpenses';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      currency: 'USD',
      description: '',
      method: '',
      tag: '',
      value: '1.00',
      editExpense: null,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const savedEmail = localStorage.getItem('userEmail');

    if (savedEmail) {
      this.setState({ email: savedEmail });
      dispatch({ type: 'USER', payload: savedEmail });
    }
    dispatch(thunkFetchCurrencies());
  }

  clearInput = (e) => {
    e.target.value = '';
  };

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
  };

  handleBlur = (e) => {
    const value = Number.parseFloat(e.target.value || 1.00).toFixed(2);
    this.setState({ value });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

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
      value: '1.00',
    }));
  };

handleClickEdit = (expense) => {
  this.setState({
    editExpense: expense,
  });
}

handleEdit = async (e) => {
  e.preventDefault();
  const { dispatch } = this.props;
  const {
    editingId,
    editExpense,
    value,
    description,
    currency,
    method,
    tag,
  } = this.state;

  const updateExpense = {
    editingId,
    editExpense,
    value,
    description,
    currency,
    method,
    tag };
  dispatch(updateExpense);

  this.setState({
    id: 0,
    currency: 'USD',
    description: '',
    method: '',
    tag: '',
    value: '1.00',
    editingId: null,
    editExpense: {},
  });
}

handleCloseModal = () => {
  this.setState({
    editExpense: null,
  });
}

handleClickDelete = (id) => {
  const { dispatch } = this.props;
  dispatch(deleteExpense(id));
};

render() {
  const { currencies, email, expenses } = this.props;
  const { currency, description, method, tag, value, editExpense } = this.state;

  const formState = { value, currency, method, tag, description };
  const formActions = {
    handleChange: this.handleChange,
    handleBlur: this.handleBlur,
    clearInput: this.clearInput,
    handleClickAdd: this.handleClickAdd,
  };

  return (
    <div className="wallet__container">
      {editExpense && (
        <ModalEditExpenses
          expense={ editExpense }
          onClose={ this.handleCloseModal }
        />
      )}
      <Header email={ email } totalExpenses={ this.toRealExpenses() } />
      <NavBar
        formState={ formState }
        formActions={ formActions }
        currencies={ currencies }
      />
      <ExpenseTable
        expenses={ expenses }
        handleClickEdit={ this.handleClickEdit }
        handleClickDelete={ this.handleClickDelete }
      />
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
