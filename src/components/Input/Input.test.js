import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from './Input';


const INPUT_PLACEHOLDER = 'Text for Placeholder';

const renderComponent = ({
  onChange = ()=>{},
  placeholder =  INPUT_PLACEHOLDER,
} = {}) => render(<Input onChange={onChange} placeholder={placeholder} />);

describe('Input', () => {
  it('mounts correctly', () => {
    renderComponent();
  })
  it('triggers the `onChange` function when typing within the input', () => {
    const onInputChange = jest.fn();
    const {  getByPlaceholderText } = renderComponent({onChange: onInputChange});

    fireEvent.change(getByPlaceholderText(INPUT_PLACEHOLDER), { target: { value: 'a' } })

    expect(onInputChange).toHaveBeenCalled();
  })
})