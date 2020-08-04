import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card';

const CARD_URL = 'www.myrepo.com';
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

  it('has the proper href in card title', () =>{
    const { getByText } = renderComponent();

    expect(getByText(CARD_TITLE).closest('a')).toHaveAttribute('href', CARD_URL)
  })
});