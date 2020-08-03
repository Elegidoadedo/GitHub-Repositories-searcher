import React, { useState, useContext, useCallback } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { Wrapper, Input } from './styles';
import { Context } from '../../Context';
import { Card } from '../Card/Card';
import Button from '../Button/Button'

export const ReposWrapper = ({ search, refetch, variables, loading, repositoryCount, pageInfo }) => {
  const { isPublic, user: {login}} = useContext(Context);
  const [page, setPage] = useState(1)
  const { searchText } = variables;

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
      default:
        return;
    }
  }

  const handleChange = (value, isPublic) => {

    refetch({
      ...variables,
      searchText: value,
      query: `fork:true ${isPublic ? 'is:Public' : `user:${login}`} ${value}`,
    })
  };

  const debounceInput = useCallback(debounce(handleChange, 400), [])


  return <Wrapper>
    <Input onChange={(event)=> debounceInput(event.target.value, isPublic)} placeholder="Find a repository..." />
      {loading 
        ? <p> loading...</p>
        : search.map( ({ node }) => <Card title={node.name} description={node.description} metadata={node.updatedAt} url={node.url} key={node.id}/>)
      }
      {page > 1 && <Button  onClick={()=> handlePagination('previous')} label="Prev Page" />}
      { page < (Number(repositoryCount)/10) && repositoryCount > 10 && <Button className="primary-button" onClick={()=> handlePagination('next')} label="Next page"  />}
      <span>Showing from {(page - 1) * 10} to {page * 10} of {repositoryCount}</span>
  </Wrapper>

};
