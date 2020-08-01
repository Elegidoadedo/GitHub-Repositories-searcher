import React, { useContext } from 'react';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost';
import { Context } from '../Context';
import { ProfileWrapper } from '../components/ProfileWrapper';


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
const renderProp = ({ loading, error, data='', refetch, variables }) => {
  if (error) return <p> Error...</p>
  if (loading) return <p> Loeading... </p>
  const {search } = data;
   return <ProfileWrapper search={search.edges} refetch={refetch} variables={variables} loading={loading}/>
}

export const SearchUserWithQuery = () => {
  const { user } = useContext(Context);
 
  return <Query query={SEARCHUSER_QUERY} variables= {{ query: 'elegidoadedo', searchText:''}}>
    {renderProp}
  </Query>
};