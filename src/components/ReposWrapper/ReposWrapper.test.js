import React from 'react';
import { fireEvent, render} from '@testing-library/react';
import { ReposWrapper } from './ReposWrapper';
import { Context } from '../../Context';

const FAKE_CONTEXT = {
  user: 'fakeUser',
  updateUser: Function.prototype,
  setIsPublic: Function.prototype,
}
const PREV_PAGE_BUTTON_LABEL = 'Prev page'
const NEXT_PAGE_BUTTON_LABEL = 'Next page'

const renderComponent = ({
  search = [],
  repositoryCount = 0,
} = {}) => render(
  <Context.Provider value={FAKE_CONTEXT}>
    <ReposWrapper search={search} repositoryCount={repositoryCount} />
  </Context.Provider>
);

describe( 'ReposWrapper', () => {
  it('renders correctly without repos', () => {
    renderComponent()
  });

  it('renders the "Next page" button if `reporsitoryCount` is bigger than 10', () => {
    const { getByText } = renderComponent({repositoryCount: 20});

    expect(getByText(NEXT_PAGE_BUTTON_LABEL)).toBeInTheDocument()
  });
  
  it('renders the "Prev page" button when clicking on "Next page" button', () => {
    const { getByText } = renderComponent({ repositoryCount: 20});

    fireEvent.click(getByText(NEXT_PAGE_BUTTON_LABEL))

    expect(getByText(PREV_PAGE_BUTTON_LABEL)).toBeInTheDocument()
  });
})