import React from 'react';
import { render, getByText } from '@testing-library/react';
import { ProfileWrapper } from './ProfileWrapper';
import { Context } from '../../Context';

  const FAKE_CONTEXT = {
    user: 'fakeUser',
    updateUser: Function.prototype,
    setIsPublic: Function.prototype,
    isPublic: false,
  }

  const FAKE_PRIVATE_CONTEXT = {
    user: 'fakeUser',
    updateUser: Function.prototype,
    setIsPublic: Function.prototype,
    isPublic: true,
  }

const rendercomponent = ({
  search = [{node:''}],
  value = FAKE_CONTEXT,
} = {}) => render(
  <Context.Provider value={value}>
      <ProfileWrapper search={search} />
  </Context.Provider>
);

describe('ProfileWrapper', () => {

  it('Check if it renders correctly', () => {
    rendercomponent();
  })

  it('Check the button in initial state', () => {
    const { getByText } = rendercomponent();
    expect(getByText('Public repositories')).toBeInTheDocument()
  });

  it('Check the button in initial state', () => {
    const { getByText } = rendercomponent({value: FAKE_PRIVATE_CONTEXT});

    expect(getByText('My repositories')).toBeInTheDocument()
  });
})