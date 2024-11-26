import React, { Component } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class Select extends Component {
  render() {
    const { idSelect, label, name, onChange, options, value } = this.props;
    return (
      <div>
        <label htmlFor={ idSelect }>
          {label}
          <select id={ idSelect } name={ name } onChange={ onChange } value={ value }>
            {options.map((option) => (
              <option key={ uuidv4() } id={ option } value={ option }>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  idSelect: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  value: propTypes.string.isRequired,
};

export default Select;
