import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const SEARCHREPOS = gql`
  query search($query: String!, $type: SearchType!, $first: Int) {
    search(
      query: $query,
      type: $type,
      first: $first
    ){
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
          }
        }
      }
    }
  }`;
  const renderProp = ({ loading, error, data }) => {
    if (loading) return <p> loading...</p>
    if (error) return <p> Error...</p>
    const {search} = data;
    console.log('data ----->', search.edges)
    return <ul>
      {search.edges.map( ele => <li>{ele.node.name}</li>)}
    </ul>
  }

  export const SearchReposWithQuery = () => (
    <Query query={SEARCHREPOS} variables= {{ query: 'is:public user:elegidoadedo', type: 'REPOSITORY', first: 50 }}>
      {renderProp}
    </Query>
  );

  SearchReposWithQuery.propTypes = {
  };
