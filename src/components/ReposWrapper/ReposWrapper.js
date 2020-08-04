import React, { useState, useContext, useCallback } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { Context } from '../../Context';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const ReposWrapper = ({ search, refetch, variables, loading, repositoryCount, pageInfo }) => {
  const { isPublic, user: {login}} = useContext(Context);
  const [page, setPage] = useState(1)

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

  const renderList = () => {
    if ( loading ) return <p> loading...</p>;

    return search.map( ({ node }) => <Card title={node.name} description={node.description} updatedAt={node.updatedAt} url={node.url} key={node.id}/>)
  };

  const renderButtons = () => (
    <>
      {page > 1 && <Button  onClick={()=> handlePagination('previous')} label="Prev page" />}
      {page < (Number(repositoryCount)/10) && repositoryCount > 10 && <Button onClick={()=> handlePagination('next')} label="Next page"  />}
    </>
  );

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
      {renderList()}
      {renderButtons()}
      <span>Showing from {(page - 1) * 10} to {page * 10} of {repositoryCount}</span>
  </Wrapper>

};

ReposWrapper.propTypes = {
  //** Result of tue query */
  search: PropTypes.array,
  //** function to refecth */
  refetch: PropTypes.func,
  //** variable to do the refecth */
  variables: PropTypes.object,
  //** Loading status */
  loading: PropTypes.bool,
  //** number of respos */
  repositoryCount: PropTypes.number,
  //** Object wich conatins start and end cursors for pagination */
  pageInfo: PropTypes.object,
}

ReposWrapper.defaultProps = {
  search: Array.prototype,
  refetch: Function.prototype,
  variables: Object.prototype,
  loading: false,
  respositoryCount: 0,
  pageInfo: Object.prototype,
}