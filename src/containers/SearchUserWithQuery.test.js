
  import React from 'react';
  import { render, } from '@testing-library/react';
  import { SearchUserWithQuery } from './SearchUserWithQuery';
  import { Context } from '../Context';
  import ApolloClient from 'apollo-boost';
  import { ApolloProvider } from 'react-apollo';

  //** CREATING THE CLIENT OF APOLLO */
  const client = new ApolloClient({
    uri: 'FAKEURI',
    onError: (error) => console.log(error)
  })

  //** Adding context mockup and provider */
  const renderComponent = () => render(
    <Context.Provider value={{user: 'hello'}}>
      <ApolloProvider client={client}>
        <SearchUserWithQuery />
      </ApolloProvider>
    </Context.Provider>
  );

describe('Search User Query', () => {
  it('should render without errors', () => {
    renderComponent()
  });
});