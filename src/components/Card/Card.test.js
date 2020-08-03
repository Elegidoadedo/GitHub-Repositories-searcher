import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import {Card} from './Card';

const CARD_URL = '#';
const CARD_TITLE = 'Text for Title';
const CARD_META = 'Text for Meta';
const CARD_DESCRIPTION = 'text for description';

const renderComponent = ({
  title = CARD_TITLE,
  description = CARD_DESCRIPTION,
  metadata = CARD_META,
  url = CARD_URL,
} = {}) => render(<Card url={url} title={title} description={description} metada={metadata} />);


describe('Card', () => {
  it('renders without crashing', () => {
    renderComponent();
  });

  it('Title has href correctly', () =>{
    const onTitleClick = jest.fn();
    const { getByText, debug } = renderComponent({ url: '#' });
    expect(getByText(CARD_TITLE).closest('a')).toHaveAttribute('href', CARD_URL)
    // fireEvent.click(getByText(TITLE));
  })
});