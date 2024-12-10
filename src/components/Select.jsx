import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class Select extends Component {
  render() {
    const { className, id, name, onChange, options, value } = this.props;
    return (
      <select
        className={ className }
        id={ id }
        name={ name }
        onChange={ onChange }
        value={ value }
      >
        <option value="" disabled>Selecione uma opção</option>
        {options.map((option) => (
          <option
            key={ uuidv4() }
            id={ option }
            value={ option }
          >
            {option}
          </option>
        ))}
      </select>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  className: '',
};

export default Select;
