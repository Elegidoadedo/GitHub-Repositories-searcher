import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../Context';
import { Wrapper, Name, Alias, Avatar } from './styles';
import Button from '../Button/Button';

const everybody = {
  avatarUrl: 'https://pbs.twimg.com/profile_images/1007061206908260353/lffy8-gX_400x400.jpg',
  name: 'Look for all public repositories',
  login: '*',
}
export const ProfileWrapper = ({ search , refetch, variables }) => {

  useEffect(() => {
    updateUser(search[0].node)
  }, [search]);

  const { user, updateUser, isPublic, setIsPublic } = useContext(Context);
  const [userToShow, setUserToShow] = useState(search[0].node);
  const { avatarUrl, name, login } = userToShow;


  const handleClick = () => {
    setIsPublic(!isPublic);
    setUserToShow(everybody)
  };

  return <Wrapper>
    <Avatar src={avatarUrl} />
    <Name> {name}</Name>
    <Alias> {login}</Alias>
    { !isPublic && <Button onClick={handleClick} label="Public repositories" />}
  </Wrapper>
};

ProfileWrapper.propTypes= {
  search: PropTypes.shape({
    node : PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }),
  }),
};

ProfileWrapper.defaultProps = {
  search: {
    node: {
      avatarUrl: String.prototype,
      name: String.prototype,
      login: String.prototype,
    }
  }
}