import {useState, useEffect} from "react"
import {  gql, useQuery, useLazyQuery } from '@apollo/client';
import {Button} from "@material-ui/core/"
import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import {
   orange,
   green,
   lightGreen,
  blueGrey,
  lightBlue,
  grey
} from "@material-ui/core/colors"
import '../stylesheets/cars_index.css';
import NavBar from "./nav/navBar"

import CardShowCard from "./cards/carShowCard"


// import ExchangeRates from "./exchange_rates"
// import Dogs from "./dogs"
import '../stylesheets/App.css';


// uri:`http://localhost:4000/graphql`,
//dogs
// uri: 'https://71z1g.sse.codesandbox.io/',
//xchange

const theme = createMuiTheme({
  palette:{
    primary: {
      main: lightBlue[600],
      light: lightBlue[300],
      dark: grey[50]
    },
    secondary: {
      main: green[500],
      dark: green[900]

    }
  }
})


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

const App = () => {
  const [selectedCarId, setSelectedCarId] = useState("");
  console.log("SELCID", selectedCarId)
  
  //button callback from CarShow
  const loadCarToState = ( e, id ) => {
    console.log("THE THING!", id);
    setSelectedCarId(id);
  }

  // loadCarToState = loadCarToState.bind(this);
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
    <ThemeProvider theme={theme}>
      <div className="master">
        <NavBar/>
          <p>Homepage22</p>
          {/* <ExchangeRates/> */}
          {/* <CarsIndex/> */}
          {/* <CarShow loadCarToState={loadCarToState} 
                    selectedCarId={selectedCarId}/> */}
          <CardShowCard loadCarToState={loadCarToState} 
                    selectedCarId={selectedCarId}/>
      </div>
     </ThemeProvider>
  );
}

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
const CarShow = ({loadCarToState, selectedCarId}) => {
  // This is on main below
  // const [selectedCarId, setSelectedCarId] = useState(null);
  console.log("CSHOW", selectedCarId)

   const REQUEST_CAR = gql`
    query RequestCar($id: ID) {
      car(id: $id) {
        make
        model
        aILevel
        incomePerHr
        owner{
          firstName
          lastName
        }
      }
    }
  `;
  const carId = "60a185da10d2cdd04d5ef711"
  const [ loadCar, {loading, called, error, data}] = useLazyQuery(REQUEST_CAR)



  useEffect(() => {

    if(selectedCarId != ""){
      console.log("use Effect in effect", selectedCarId)
      loadCar({
                variables: { id: selectedCarId },
                notifyOnNetworkStatusChange: true
              })
    }}, [selectedCarId])

  // useEffect(() => {

  // })
    
    
    

 
  
  // setSelectedCarId(carId)

  

    if (called && loading) return <p>Loading ...</p>
    if (!called) {
       return <button onClick={(e) => {
        console.log("inside", carId)
        loadCarToState(e, carId)
        }} >Load car</button>
    }
    console.log(data)
    const car = data ? data.car ? data.car : null : null
    return (
      <div>
        <Button variant="contained" style={{
          backgroundColor: '#1D3643'
        }}>I am Groot button</Button>
          <p>hi</p>
          {/* <p>{data ? data.car : "no data"}</p> */}
          <p>{car ? car.model : "no car data"}</p>
      </div>
          
           
    )

    // {data && data.car && <div><img src={data.car.url} /> </div>}
          
    //       {data.car ? <ul> <li>{car.make}</li>
    //                       <li>{car.model}</li>
    //                       <li>{car.incomePerHr}</li>
    //                       <li>{car.incomePerHr}</li>
    //                 </ul>
    //        : <p> no car</p>}
          
        

    
    
    // <h1>Hello {data.greeting.message}!</h1>;

    
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
