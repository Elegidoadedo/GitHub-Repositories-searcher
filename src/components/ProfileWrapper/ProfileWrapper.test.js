import React from 'react';
import { render, getByText } from '@testing-library/react';
import { ProfileWrapper } from './ProfileWrapper';
import { Context } from '../../Context';

const FAKE_CONTEXT = {
  user: 'fakeUser',
  updateUser: Function.prototype,
  setIsPublic: Function.prototype,
}
const PUBLIC_REPOSITORIES_BUTTON_LABEL = 'Public repositories'
const MY_REPOSITORIES_BUTTON_LABEL = 'My repositories'


const rendercomponent = ({
  search = [{node:''}],
  value = FAKE_CONTEXT,
} = {}) => render(
  <Context.Provider value={value}>
      <ProfileWrapper search={search} />
  </Context.Provider>
);

describe('ProfileWrapper', () => {
  it('renders correctly', () => {
    rendercomponent();
  })

  it('displays "Public repositories" button when context `isPublic` is false', () => {
    const { getByText } = rendercomponent({value: {...FAKE_CONTEXT, isPublic: false}});

    expect(getByText(PUBLIC_REPOSITORIES_BUTTON_LABEL)).toBeInTheDocument()
  });

  it('displays "My repositories" button when context `isPublic` is true', () => {
    const { getByText } = rendercomponent({value: {...FAKE_CONTEXT, isPublic: true}});

    expect(getByText(MY_REPOSITORIES_BUTTON_LABEL)).toBeInTheDocument()
  });
})