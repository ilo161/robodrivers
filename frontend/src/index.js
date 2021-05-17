import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, HttpLink, from } from  '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { onError } from "@apollo/client/link/error";
import './index.css';
import App from './components/App';
// import reportWebVitals from './reportWebVitals'; 

// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache()
// });
const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql',
  cache: new InMemoryCache()
});

// const httpLink = new HttpLink({
//   uri: "http://localhost:5001/"
// });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// const client = new ApolloClient({
//   // The `from` function combines an array of individual links
//   // into a link chain
//   link: from([errorLink, httpLink]),
//   cache: new InMemoryCache()
// });


ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
