import React from 'react';
import propTypes from 'prop-types';
import { Button as CustomButton } from './styles';

const Button = ({ onClick, label }) => (
  <CustomButton onClick={onClick}>{label}</CustomButton>
);

Button.propTypes = {
  /** Action to perform when clicking on the button */
  onClick: propTypes.func.isRequired,
  /** Label to display within the button */
  label: propTypes.string.isRequired,
};

export default Button;
