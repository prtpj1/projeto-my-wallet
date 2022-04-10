import React, { Component } from 'react';
import propTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      // dataTestid,
      // defaultOption,
      // defaultValue,
      idSelect,
      label,
      name,
      onChange,
      options,
      value,
    } = this.props;
    return (
      <div>
        <label htmlFor={ idSelect }>
          { label }
          <select
            // data-testid={ dataTestid }
            id={ idSelect }
            name={ name }
            onChange={ onChange }
            value={ value }
          >
            {/* <option value={ defaultValue }>
              {defaultOption}
            </option> */}
            {options.map((option, index) => (
              <option
                key={ index }
                id={ option }
                value={ option }
              >
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
  // dataTestid: propTypes.string.isRequired,
  // defaultOption: propTypes.string.isRequired,
  // defaultValue: propTypes.string.isRequired,
  idSelect: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  options: propTypes.arrayOf(
    propTypes.string,
  ).isRequired,
  value: propTypes.string.isRequired,
};

export default Select;
