import {useState, useEffect} from "react"
import {  gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import {Button,
        Container,
        CssBaseline,
        Grid
        } from "@material-ui/core/"
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

import CarShowCard from "./cards/carShowCard"


// import ExchangeRates from "./exchange_rates"
// import Dogs from "./dogs"
import '../stylesheets/App.css';


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

// This gets all the information at start....
// There's no need to send/use useEffect Inside CardShow....
// Unless I just get the Id's... but then thats N + 1... hmm
const ALL_CARS = gql`
  query getAllCars {
    allCars{
      id
      make
      model
      mileage
      year
      aILevel
      incomePerHr
      isWorking
      VIN
      url
      owner{
        firstName
        lastName
      }
    }
  }
`
const UPDATE_CAR = gql`
    mutation UpdateCar($id: ID, $input: UpdateCarInput!) {
      updateCar(id: $id, input: $input) {
        id
        make
        model
        mileage
        year
        aILevel
        incomePerHr
        isWorking
        VIN
        url
        owner{
          firstName
          lastName
        }
      }
    }
  `

const App = () => {
  const [selectedCarId, setSelectedCarId] = useState("");
  const [currentData, setCurrentData] = useState({});

  const [updateQueryBool, setUpdateQueryBool] = useState(false);

  const { loading, error, data } = useQuery(ALL_CARS);

  // const [ updateCarQuery, {loading: loadingU, called: calledU, 
  //                   error: errorU, data: dataU}] = useLazyQuery(UPDATE_CAR)
  // const [ updateCarMutation, {loading: loadingU, called: calledU, 
  //                   error: errorU, data: dataU}] = useMutation(UPDATE_CAR)


  let allCarsArr;

  console.log("SELCID", selectedCarId)
  // if(dataU != undefined){
  //   console.log("UPDATE!", dataU)
  // }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  
  // Update Car FN for carCard
  // const updateCarFn = (id, type) => {
  //   if(type === "aILevel"){
  //     // const { loading, error, data } = useQuery(ALL_CARS, 
  //     //         {
  //     //           variables: { id: selectedCarId, input: true },
  //     //           notifyOnNetworkStatusChange: true
  //     //         });
  //   }

  // }
  
  //button callback from CarShow
  const loadCarToState = ( e, id ) => {
    console.log("THE THING!", id);
    setSelectedCarId(id);
  }

  

  allCarsArr = data ? data.allCars.map(car => {
    // setCurrentData(data)
    return (<Grid item xs={12} sm={6} md={4} lg={3}>
              <CarShowCard 
                key={car.VIN} data={car}
                // updateCarMutation={updateCarMutation}
                updateCarMutation={5}
              />
            </Grid>
            )
  }) : null

  

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="master">
          <NavBar/>
            {/* <CarsIndex/> */}
            {/* <CarShow loadCarToState={loadCarToState} 
                      selectedCarId={selectedCarId}/> */}
            {/* <CardShowCard loadCarToState={loadCarToState} 
                      selectedCarId={selectedCarId}/> */}
          <Grid container spacing={2} justify="center">
            {allCarsArr}
          </Grid>
            
        </div>
      </Container>
     </ThemeProvider>
  );
}

// function ExchangeRates() {
//   const { loading, error, data } = useQuery(EXCHANGE_RATES);


//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :</p>;

//   return data.rates.map(({ currency, rate }) => (
//     <div key={currency}>
//       <p>
//         {currency}: {rate}
//       </p>
//     </div>
//   ));
// }
function ExchangeRates() {
  const { loading, error, data } = useQuery(ALL_CARS);


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
// const CarShow = ({loadCarToState, selectedCarId}) => {
//   // This is on main below
//   // const [selectedCarId, setSelectedCarId] = useState(null);
//   console.log("CSHOW", selectedCarId)

//    const REQUEST_CAR = gql`
//     query RequestCar($id: ID) {
//       car(id: $id) {
//         make
//         model
//         aILevel
//         incomePerHr
//         owner{
//           firstName
//           lastName
//         }
//       }
//     }
//   `;
//   const carId = "60a185da10d2cdd04d5ef711"
//   const [ loadCar, {loading, called, error, data}] = useLazyQuery(REQUEST_CAR)



//   useEffect(() => {

//     if(selectedCarId != ""){
//       console.log("use Effect in effect", selectedCarId)
//       loadCar({
//                 variables: { id: selectedCarId },
//                 notifyOnNetworkStatusChange: true
//               })
//     }}, [selectedCarId])

//   // useEffect(() => {

//   // })
    
    
    

 
  
//   // setSelectedCarId(carId)

  

//     if (called && loading) return <p>Loading ...</p>
//     if (!called) {
//        return <button onClick={(e) => {
//         console.log("inside", carId)
//         loadCarToState(e, carId)
//         }} >Load car</button>
//     }
//     console.log(data)
//     const car = data ? data.car ? data.car : null : null
//     return (
//       <div>
//         <Button variant="contained" style={{
//           backgroundColor: '#1D3643'
//         }}>I am Groot button</Button>
//           <p>hi</p>
//           {/* <p>{data ? data.car : "no data"}</p> */}
//           <p>{car ? car.model : "no car data"}</p>
//       </div>
          
           
//     )

//     // {data && data.car && <div><img src={data.car.url} /> </div>}
          
//     //       {data.car ? <ul> <li>{car.make}</li>
//     //                       <li>{car.model}</li>
//     //                       <li>{car.incomePerHr}</li>
//     //                       <li>{car.incomePerHr}</li>
//     //                 </ul>
//     //        : <p> no car</p>}
          
        

    
    
//     // <h1>Hello {data.greeting.message}!</h1>;

    
// }

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

