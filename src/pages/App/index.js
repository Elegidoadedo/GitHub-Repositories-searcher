import React from 'react';
import { SearchReposWithQuery  } from '../../containers/SearchReposWithQuery';
import { GlobalStyles } from '../../GlobalStyles';
import { SearchUserWithQuery } from '../../containers/SearchUserWithQuery';
import { Layout } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <SearchUserWithQuery />
        <SearchReposWithQuery />
      </Layout>
    </>
  );
}

export default App;
