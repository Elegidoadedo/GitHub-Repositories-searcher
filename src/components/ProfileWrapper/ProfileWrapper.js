import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../Context';
import { Wrapper, Name, Alias, Avatar } from './styles';
import { ALL_USERS } from './constants'
import { Button } from '../Button/Button';

export const ProfileWrapper = ({ search }) => {

    const { user, updateUser, isPublic, setIsPublic } = useContext(Context);
    const [userToShow, setUserToShow] = useState(search[0].node);
    const { avatarUrl, name, login } = userToShow;

  useEffect(() => {
    updateUser(search[0].node)
    //TO DO -> https://github.com/facebook/create-react-app/issues/6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const renderButton = () => {
    if ( isPublic) {
      return  <Button onClick={()=>handleClick(user)} label="My repositories" />
    }
    return  <Button onClick={()=>handleClick(ALL_USERS)} label="Public repositories" />
  }

  const handleClick = (user) => {
    setIsPublic(!isPublic);
    setUserToShow(user)
  };

  return <Wrapper>
    <Avatar src={avatarUrl} />
    <Name> {name}</Name>
    <Alias> {login}</Alias>
    {renderButton()}
  </Wrapper>
};

ProfileWrapper.propTypes= {
  //** Result of the query */
  search: PropTypes.array
};

ProfileWrapper.defaultProps = {
  search: []
}