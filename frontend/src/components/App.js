import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import ExchangeRates from "./exchange_rates"
import Dogs from "./dogs"
import '../stylesheets/App.css';

// uri:`http://localhost:4000/graphql`,
//dogs
//xchange
// uri: 'https://48p1r2roz4.sse.codesandbox.io',
const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/',
  cache: new InMemoryCache()
});

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));


function App() {
  return (
    <div className="master">
      <ApolloProvider client={client}>
        <p>Homepage</p>
        {/* <ExchangeRates/> */}
        <Dogs/>
      </ApolloProvider>
    </div>
  );
}

export default App;



{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
