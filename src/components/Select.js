import React, { Component } from 'react';
import propTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      defaultOption,
      defaultValue,
      id,
      label,
      name,
      onChange,
      options,
      value,
    } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          { label }
          <select
            id={ id }
            name={ name }
            onChange={ onChange }
            value={ value }
          >
            <option value={ defaultValue }>
              {defaultOption}
            </option>
            {options.map((option, index) => (
              <option key={ index }>{option}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  defaultOption: propTypes.string.isRequired,
  defaultValue: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  options: propTypes.arrayOf(
    propTypes.string,
  ).isRequired,
  value: propTypes.string.isRequired,
};

export default Select;
