import React from 'react';
// import _debounce from 'lodash/debounce';
import { Wrapper, List } from './styles';
import { Card } from '../Card';

export const ReposWrapper = ({ search, refetch, variables, loading }) => {
  const { searchText } = variables;

  const handleChange = (event) => {
    const { target:{value} } = event;

    refetch({
      ...variables,
      searchText: value,
      query: `user:elegidoadedo fork:true ${value}`,
    })
  };

  return <Wrapper>
    <input  value={searchText}  onChange={handleChange} />
    <List>
      {
        loading ?
        <p> loading...</p> :
        search.map( ({ node }) => <Card title={node.name} description={node.description} metadata={node.updatedAt} url={node.url} key={node.id}/>)
      }
    </List>
  </Wrapper>

};
