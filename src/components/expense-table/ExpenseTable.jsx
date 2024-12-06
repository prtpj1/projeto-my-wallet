import React from 'react';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ExpenseTableHead from './ExpenseTableHead';

const ExpenseTable = ({ expenses, handleClickDelete, handleClickEdit }) => (
  <section className="table__wrapper">
    <table className="table__container">
      <ExpenseTableHead />
      <tbody className="table__body">
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
            <div className="table__btns">
              <button
                className="table__btn btn__editar"
                onClick={ () => handleClickEdit(exp) }
                type="button"

              >
                <FaRegEdit size={ 20 } />
              </button>
              <button
                className="table__btn btn__excluir"
                type="button"
                onClick={ () => handleClickDelete(exp.id) }
              >
                <FaTrashAlt size={ 18 } />
              </button>
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickEdit: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};

export default ExpenseTable;
