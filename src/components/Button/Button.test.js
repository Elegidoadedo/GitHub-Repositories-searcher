import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import {Button} from './Button';

const BUTTON_LABEL = 'Button label';

const renderComponent = ({
  onClick = Function.prototype,
  label = BUTTON_LABEL,
} = {}) => render(<Button onClick={onClick} label={label} />);

describe('Button', () => {
  it('renders without crashing', () => {
    renderComponent();
  });

  it('calls the `onClick` function when clicking on the button', () => {
    const onButtonClick = jest.fn();
    const { getByText } = renderComponent({ onClick: onButtonClick });

    fireEvent.click(getByText(BUTTON_LABEL));

    expect(onButtonClick).toHaveBeenCalled();
  });
});
