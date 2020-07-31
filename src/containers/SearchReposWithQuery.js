import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { ReposWrapper } from '../components/ReposWrapper'

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
            description
            isFork
            updatedAt
            url
            id
            name
            createdAt
            url
            languages(
              first:100
            ){
              nodes{
                name
              }
            }
          }
        }
      }
    }
  }`;
  const renderProp = ({ loading, error, data='', refetch, variables }) => {
    if (error) return <p> Error...</p>
    const {search } = data;
    return <ReposWrapper search={search.edges} refetch={refetch} variables={variables} loading={loading}/>
  }

  export const SearchReposWithQuery = () => (
    <Query query={SEARCHREPOS} variables= {{ query: `user:elegidoadedo fork:true`, type: 'REPOSITORY', first: 100, searchText:''}}>
      {renderProp}
    </Query>
  );

  SearchReposWithQuery.propTypes = {
  };
