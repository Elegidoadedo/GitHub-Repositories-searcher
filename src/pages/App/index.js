import React from 'react';
// import { Card } from '../../components/Card'
import { SearchReposWithQuery  } from '../../containers/SearchReposWithQuery';
import { GlobalStyles } from '../../GlobalStyles';
import { ProfileWrapper } from '../../components/ProfileWrapper';
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
