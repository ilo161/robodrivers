import {  gql, useQuery } from '@apollo/client';
import '../stylesheets/cars_index.css';

// import ExchangeRates from "./exchange_rates"
// import Dogs from "./dogs"
import '../stylesheets/App.css';

// uri:`http://localhost:4000/graphql`,
//dogs
// uri: 'https://71z1g.sse.codesandbox.io/',
//xchange


const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
// mileage
//       make
//       year
//       isWorking
//       isSummoned
//       hadAccident
//       maintenanceLog
//       incomePerHr
//       aILevel
//       owner
const ALL_CARS = gql`
  query getAllCars {
    allCars{
      id
      color
      model
      VIN
      isWorking
      isSummoned
      hadAccident
      maintenanceLog
      incomePerHr
      aILevel
      url
      owner {
        firstName
      }


      
    }
  }
`

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

//good place for a lazy query
const CarShow = ({}) => {
  const REQUEST_CAR = gql`
    query RequestCar($id: ID) {
      car(id: $id) {
        model
        VIN
        isWorking
      }
    }
  `;

  const {loading, error, data} = useQuery()
}

const CarsIndex = () => {
  const { loading, error, data } = useQuery(ALL_CARS);

  if (loading) return <p>Getting Cars</p>;
  if (error) return <p>Error mate: </p>

  const color_model = data.allCars.map(({color,
      model,
      VIN,
      isWorking,
      isSummoned,
      hadAccident,
      maintenanceLog,
      incomePerHr,
      aILevel,
      owner, url}) => (
    <li key={VIN}> {color}
      {model} +
      {VIN} +
      {isWorking.toString()} +
      {isSummoned.toString()} +
      {hadAccident.toString()} +
      {maintenanceLog}$$ +
      {incomePerHr}$$ +
      Level {aILevel} + : {model}
      &&&&&&{owner.firstName}++<img src={url} width="100px" height="100px"/></li>
  ))


  return(
    <ul className="allcars">
      {color_model}
    </ul>
  )
}



const App = () => {
//   client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));
  return (
    <div className="master">
        <p>Homepage22</p>
        {/* <ExchangeRates/> */}
        <CarsIndex/>
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
