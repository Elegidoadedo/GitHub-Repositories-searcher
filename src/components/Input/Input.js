import React from 'react';
import PropTypes from 'prop-types';
import { Input as CustomInput } from './styles';

export const Input = ({onChange, placeholder}) => (
  <CustomInput onChange={onChange} placeholder={placeholder} />
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
}