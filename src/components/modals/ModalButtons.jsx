import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import Button from '../Button';

const ModalButtons = ({ onCancel, onConfirm, disabled }) => (
  <div className="modal__wrapper-btns">
    <Button
      className="btn btn-cancel"
      onClick={ onCancel }
      type="button"
    >
      <MdCancel size={ 32 } />
    </Button>
    <Button
      className="btn btn-confirm"
      disabled={ disabled }
      onClick={ onConfirm }
      type="submit"
    >
      <FaCheckCircle size={ 32 } />
    </Button>
  </div>
);

ModalButtons.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ModalButtons;
