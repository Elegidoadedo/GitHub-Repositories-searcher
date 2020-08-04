import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Context } from '../Context';
import { ReposWrapper } from '../components/ReposWrapper'

const SEARCHREPOS = gql`
  query search($query: String!, $before: String, $after: String) {
    search(
      query: $query,
      type: REPOSITORY,
      first: 10,
      before: $before,
      after: $after
    ){
      repositoryCount
      pageInfo{
        endCursor
        startCursor
      }
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
          }
        }
      }
    }
  }`;

  const renderProp = ({ loading, error, data='', refetch, variables }) => {
    if (error) return <p> Error...</p>
    console.log(data)
    const { search } = data;
    return <ReposWrapper search={search.edges} refetch={refetch} variables={variables} loading={loading} repositoryCount={search.repositoryCount} pageInfo={search.pageInfo}/>
  }

  export const SearchReposWithQuery = () => {
    const { user, isPublic } = useContext(Context);
    return <Query query={SEARCHREPOS} variables= {{
      query: `fork:true ${isPublic ? 'is:Public': `user:${user.login}`}`,
      before: null,
      after: null,
      searchText:''
    }}>
      {renderProp}
    </Query>
  };

  renderProp.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,
    error: PropTypes.bool,
    refetch: PropTypes.func,
    variables: PropTypes.object,
  };

  renderProp.defaultProps = {
    loading: false,
    error: false,
    refetch: Function.prototype,
    variables: Object.prototype,
  }
