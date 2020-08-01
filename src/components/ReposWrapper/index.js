import React, { useState, useContext } from 'react';
// import _debounce from 'lodash/debounce';
import { Wrapper, Input } from './styles';
import { Context } from '../../Context';
import { Card } from '../Card';

export const ReposWrapper = ({ search, refetch, variables, loading, repositoryCount, pageInfo }) => {
  const { isPublic, user: {login}} = useContext(Context);
  const [page, setPage] = useState(1)
  const { searchText } = variables;

  if(loading) return <p> loading...</p>


  const handlePagination = (action) => {
    switch (action) {
      case 'previous':
        setPage(page - 1);
        refetch({
          ...variables,
          before: pageInfo.startCursor
        })
        break;
      case 'next':
        setPage(page + 1);
        refetch({
          ...variables,
          after: pageInfo.endCursor
        })
        break;
    }
  }

  const handleChange = (event) => {
    const { target:{value} } = event;

    refetch({
      ...variables,
      searchText: value,
      query: `fork:true ${isPublic ? 'is:Public' : `user:${login}`} ${value}`,
    })
  };

  return <Wrapper>
    <Input  value={searchText}  onChange={handleChange} placeholder="Find a repository..." />
      {
        search.map( ({ node }) => <Card title={node.name} description={node.description} metadata={node.updatedAt} url={node.url} key={node.id}/>)
      }
      {page > 1 && <button onClick={()=> handlePagination('previous')}>Prev Page</button>}
      { page < (Number(repositoryCount)/10) && repositoryCount > 10 && <button onClick={()=> handlePagination('next')}>Next Page</button>}
      <span>Showing from {(page - 1) * 10} to {page * 10} of {repositoryCount}</span>
  </Wrapper>

};
