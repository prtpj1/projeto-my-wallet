import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, text, children, className }) => (
  <label className={ className } htmlFor={ htmlFor }>
    {text}
    {children}
  </label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Label;
