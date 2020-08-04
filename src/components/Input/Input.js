import React from 'react';
import PropTypes from 'prop-types';
import { Input as CustomInput } from './styles';

export const Input = ({onChange, placeholder}) => (
  <CustomInput onChange={onChange} placeholder={placeholder} />
)

Input.propTypes = {
  //** the fucntion to trigger when typing, can we a debounce func */
  onChange: PropTypes.func.isRequired,
  //** Text to display when is no value */
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  //** Button placeholder if text is empty */
  placeholder: '',
}
