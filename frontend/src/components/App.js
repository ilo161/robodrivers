import {useState, useEffect} from "react"
import {  gql, useQuery, useLazyQuery, useMutation, useApolloClient } from '@apollo/client';
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

//Queries and Mutations
import {ALL_CARS} from "./util/queries/ALL_CARS"
import { CREATE_CAR } from "./util/mutations/CREATE_CAR"
import { UPDATE_CAR } from "./util/mutations/UPDATE_CAR"
import { ONE_USER_ALL_CARS } from "./util/queries/ONE_USER_ALL_CARS"

// Visual Components
import AllUsersCard from "./cards/allUsersCard"
import UserShowCard from "./cards/userShowCard";
import CarShowCard from "./cards/carShowCard";

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


const App = () => {
  const client = useApolloClient();

  const [selectedCarId, setSelectedCarId] = useState("");
  const [currentData, setCurrentData] = useState({});

  const [updateQueryBool, setUpdateQueryBool] = useState(false);

  const { loading, error, data } = useQuery(ALL_CARS);
  // const { loading, error, data } = useQuery(ALL_CARS);

  const [ createCarMutation, {loading: loadingNewCar, called: calledNewCar, 
                    error: errorNewCar, data: dataNewCar}] = useMutation(CREATE_CAR)

  const [ updateCarMutation, {loading: loadingU, called: calledU, 
                    error: errorU, data: dataU}] = useMutation(UPDATE_CAR)
                    

  const [ oneUserCarsQuery, {loading: loadingUserCars,
                             called: calledUserCars, error: errorUserCars,
                              data: dataUserCars}] = useLazyQuery(ONE_USER_ALL_CARS)

  const [ allUsersCarsQuery, {loading: loadingAllUserCars,
                             called: calledAllUserCars, error: errorAllUserCars,
                              data: dataAllUserCars}] = useLazyQuery(ALL_CARS)

  let allCarsArr = [];
  let allUsersArr;

  // useEffect(() => {
  //     // Update the document title using the browser API
  //     document.title = `user one UP`;
  //     if(dataUserCars){
  //       allCarsArr = dataUserCars.user.cars.map(car => {

  //       return (<Grid item xs={12} sm={6} md={4} lg={3}>
  //               <CarShowCard 
  //                 key={car.VIN} data={car}
  //                 updateCarMutation={updateCarMutation}

  //               />
  //             </Grid>
  //             )
  //     })
  //     }
        

  // },[dataUserCars]);

  

  // console.log("SELCTED ID", selectedCarId)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  
  
  //              {
  //                variables: { id: selectedCarId, input: true },
  //               notifyOnNetworkStatusChange: true
  //             });
  console.log("main data", data)
  
  //button callback from CarShow
  const loadCarToState = ( e, id ) => {
    console.log("THE THING!", id);
    setSelectedCarId(id);
  }
/* User Cards Up Top
***************/

   allUsersArr = data ? data.users.map(owner => {
    console.log("OWNER?", owner)

    return (<Grid item xs={5} sm={5} md={4} lg={4}>
              <UserShowCard
                key={owner.id} data={owner}
                createCarMutation={createCarMutation}
                updateCarMutation={updateCarMutation}
                oneUserCarsQuery={oneUserCarsQuery}
                />
            </Grid>
            )
  }) : null

  //Insert ALL USERS CARD
  // console.log("len", allCarsArr.length)
  
  // brute force insert of all users button/card
  if (allUsersArr.length === 2 && data){
    const secondUser = allUsersArr[1]
    allUsersArr.push(secondUser)
    allUsersArr[1] = ( <Grid item xs={1} sm={2} md={2} lg={2}>
                        <AllUsersCard data={data}
                          allUsersCarsQuery={allUsersCarsQuery}
                        />
                      </Grid>
                    )
    // console.log(allUsersArr)
  }

/****************
END USER CARDS
*/


  // Car Cards Display FN's Below
  allCarsArr = data ? data.allCars.map(car => {
    
    // const { todo } = client.readQuery({
    //   query: ALL_CARS,
    //   variables: { // Provide any required variables here
    //     id: 5,
    //   },
    // });

    // console.log(all_cars_cache);

    



    return (<Grid item xs={12} sm={6} md={4} lg={3}>
              <CarShowCard 
                key={car.VIN} data={car}
                updateCarMutation={updateCarMutation}

              />
            </Grid>
            )
  }) : null

// console.log(dataUserCars)

// Updated "FILTERED" array when user clicks on User Show Card
// if( dataUserCars || dataAllUserCars){
//   console.log( dataAllUserCars ? dataAllUserCars : "one user")
//   console.log( dataUserCars ? dataUserCars : "")
// }








// Update only the cars the user owns
  allCarsArr = dataUserCars ? dataUserCars.user.cars.map(car => {

    return (<Grid item xs={12} sm={6} md={4} lg={3}>
              <CarShowCard 
                key={car.VIN} data={car}
                updateCarMutation={updateCarMutation}

              />
            </Grid>
            )
  }) : allCarsArr

 
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="master">
          <NavBar/>

            <Grid container spacing={2} justify="center">
              {allUsersArr}
            </Grid>
            <Grid container spacing={2} justify="center">
              {allCarsArr}
            </Grid>
            
        </div>
      </Container>
     </ThemeProvider>
  );
}

export default App;

