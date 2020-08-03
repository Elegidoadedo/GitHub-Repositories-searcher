import { useContext } from 'react';
import { Context } from '../../../Context';

const { isPublic, user: {login}} = useContext(Context);
export const handleChange = ({value, refetch, variables}) => {

    console.log('debounce', value)
    console.log('login', login)
    console.log('isPublic', isPublic)
    refetch({
      ...variables,
      searchText: value,
      query: `fork:true ${isPublic ? 'is:Public' : `user:${login}`} ${value}`,
    })
  };