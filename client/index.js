import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HashRouter } from 'react-router-dom';
import './style/style.css';
import App from './components/App';

const client = new ApolloClient({});

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
