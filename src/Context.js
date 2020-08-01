import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const Provider = ({ children }) => {
  const [ user, setUser ] = useState({login: 'elegidoadedo'});
  const [ isPublic, setIsPublic ] = useState (false);
  const value = {
    user,
    isPublic,
    setIsPublic,
    updateLogin: (login) =>{
      setUser({
        ...user,
        login,
      })
    },
    updateUser: (user) =>{
      const { name, login, avatarUrl } = user;
      setUser({
        name,
        login,
        avatarUrl
      })
    },
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default {
  Provider,
  Consumer: Context.Consumer,
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
