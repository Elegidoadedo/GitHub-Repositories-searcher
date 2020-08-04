
  import React from 'react';
  import { fireEvent, render, } from '@testing-library/react';
  import {SearchReposWithQuery} from './SearchReposWithQuery';
  import { Context } from '../Context';
  import ApolloClient from 'apollo-boost';
  import { ApolloProvider } from 'react-apollo';

  //** CREATING THE CLIENT OF APOLLO */
  const client = new ApolloClient({
    uri: 'FAKEURI',
    onError: (error) => console.log(error)
  })

  //** Adding context mockup and provider */
  const renderComponent = (props) => render(
    <Context.Provider value={{user: 'hello'}}>
      <ApolloProvider client={client}>
        <SearchReposWithQuery {...props} />
      </ApolloProvider>
    </Context.Provider>
  );

describe('Search Repos Query', () => {
  it('should render without errors', () => {
    renderComponent()
  });
});