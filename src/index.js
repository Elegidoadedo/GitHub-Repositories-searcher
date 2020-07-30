import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const URI = process.env.REACT_APP_URI;

console.log(process.env.REACT_APP_URI)
console.log(process.env.REACT_APP_TOKEN)
const client = new ApolloClient({
  uri: URI,
  request: (operation) => {
    const token = process.env.REACT_APP_TOKEN;
    console.log('tokeeeen ---->', token)
    const authorization = token ? `Bearer ${token}`: undefined;
    console.log('authorization ---->', authorization)

    operation.setContext({
      headers: {
        authorization,
      },
    });
  },
  onError: (error) => console.log(error)
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

