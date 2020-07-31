import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/index.js';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const URI = process.env.REACT_APP_URI;
const client = new ApolloClient({
  uri: URI,
  request: (operation) => {
    const token = process.env.REACT_APP_TOKEN;
    const authorization = token ? `Bearer ${token}`: undefined;

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

