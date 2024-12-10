import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, onClick, type }) => (
  <button
    className={ className }
    onClick={ onClick }
    type={ type }
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
