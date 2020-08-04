import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import { ProfileWrapper } from '../components/ProfileWrapper/ProfileWrapper';


const SEARCHUSER_QUERY = gql`
  query search($query: String!) {
      search(
        query: $query,
        type: USER,
        first: 1,
      ) {
        userCount
        edges {
          node {
            ... on User{
              id
              login
              name
              createdAt
              avatarUrl
              bio
            }
          }
        }
      }
  }
`;
const renderProp = ({ loading, error, data = '', refetch, variables }) => {
  if (error) return <p> Error...</p>
  if (loading) return <p> Loading... </p>
  const {search } = data;
   return <ProfileWrapper search={search.edges} refetch={refetch} variables={variables} loading={loading}/>
}

export const SearchUserWithQuery = () => (
  <Query query={SEARCHUSER_QUERY} variables= {{ query: 'elegidoadedo', searchText:''}}>
    {renderProp}
  </Query>
);

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
