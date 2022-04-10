// import propTypes from 'prop-types';
import React, { Component } from 'react';

class ExpenseTable extends Component {
  render() {
    // const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </thead>
          {/* <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.expenses}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    );
  }
}

// ExpenseTable.propTypes = {
//   expenses: propTypes.arrayOf.isRequired,
// };

export default ExpenseTable;
