import React from 'react';
import { SearchReposWithQuery  } from '../containers/SearchReposWithQuery';
import { GlobalStyles } from '../GlobalStyles';
import { SearchUserWithQuery } from '../containers/SearchUserWithQuery';
import { Layout, Title } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Title>GITHUB REPOSITORY SEARCHER</Title>
      <Layout>
        <SearchUserWithQuery />
        <SearchReposWithQuery />
      </Layout>
    </>
  );
}

export default App;
