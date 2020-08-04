import React from 'react';
import { fireEvent, render} from '@testing-library/react';
import { ReposWrapper } from './ReposWrapper';
import { Context } from '../../Context';

const FAKE_CONTEXT = {
  user: 'fakeUser',
  updateUser: Function.prototype,
  setIsPublic: Function.prototype,
}


const renderComponent = ({
  search = [],
  repositoryCount = 0,
} = {}) => render(
  <Context.Provider value={FAKE_CONTEXT}>
    <ReposWrapper search={search} repositoryCount={repositoryCount} />
  </Context.Provider>
);

describe( 'RepoWrapper', () => {
  it('it renders correctly without repos', () => {
    renderComponent()
  });

  it('Next page button renders if is up 10 repos', () => {
    const { getByText } = renderComponent({repositoryCount: 20});

    expect(getByText('Next page')).toBeInTheDocument()
  });
  it('when clicking next page, will appear prev page button', () => {
    const { getByText } = renderComponent({ repositoryCount: 20});

    fireEvent.click(getByText('Next page'))

    expect(getByText('Prev Page')).toBeInTheDocument()
  });

})