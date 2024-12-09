import React, { Component } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class Select extends Component {
  render() {
    const { className, id, name, onChange, options, value } = this.props;
    return (
      <div>
        <select
          className={ className }
          id={ id }
          name={ name }
          onChange={ onChange }
          value={ value }
        >
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
      </div>
    );
  }
}

Select.propTypes = {
  className: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  value: propTypes.string.isRequired,
};

export default Select;
