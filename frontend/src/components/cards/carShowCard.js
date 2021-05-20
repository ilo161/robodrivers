import {useState, useEffect} from "react"
import {  gql, useQuery, useLazyQuery } from '@apollo/client';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { styled } from '@material-ui/core/styles';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core/';
import "../../stylesheets/card_show.css"


// These Styles function to solicite whether a car is working or not
const useStyles = makeStyles(theme => ({
  rootW: {
    maxWidth: "350px",
    // background: 'linear-gradient(180deg, #090, #FFF, #FFF, #FFF)',
    // background: 'linear-gradient(225deg, #090, #FFF)',
    border: "2px solid green"
  },
  rootNW: {
    maxWidth: "350px",
    // background: 'linear-gradient(0deg, #F11, #FFF, #FFF, #FFF)',
    border: "2px solid red"
  },
  primaryLight: {
        backgroundColor: theme.palette.primary.dark, 
        color: theme.palette.primary.main
  },
  isWorkingText: {
    color: theme.palette.secondary.light
  },
  mb: {
    marginBottom: 15
  }

}));

// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
const SendDriverButton = styled(Button)({
  background: 'green',
  marginLeft: "8px",
  padding: '4px 10px',
  fontSize: "0.8125rem",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 28,
});

const CancelDriverButton = styled(Button)({
  background: 'red',
  marginLeft: "8px",
  padding: '4px 10px',
  fontSize: "0.8125rem",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 28,
});

const SellCarButton = styled(Button)({
  background: 'red',
  marginLeft: "8px",
  padding: '4px 10px',
  fontSize: "0.8125rem",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 28,
});

const UpgradeCarButton = styled(Button)({
  background: 'dodgerblue',
  marginLeft: "8px",
  padding: '4px 10px',
  fontSize: "0.8125rem",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 28,
});




const CarShowCard = ({loadCarToState, selectedCarId, data, updateCarMutation}) => {
    const [displayMainCard, setDisplayMainCard] = useState(true);

    // useEffect(() => {
    //     console.log("hook activated")
    // }, [displayMainCard]); 

    const classes = useStyles()
    
  // console.log("CSHOW", selectedCarId)

   const REQUEST_CAR = gql`
    query RequestCar($id: ID) {
      car(id: $id) {
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
  `;

  
  //Debug Only
  // const carId = "60a185da10d2cdd04d5ef711"
  // const carId = "60a185da10d2cdd04d5ef710"
  // const [ loadCar, {loading, called, error, data2}] = useLazyQuery(REQUEST_CAR)

  

  const subtitleWorking = (
          <Typography  variant="body1" color="primary" component="span">
            Making Money
          </Typography>)

  const subtitleNotWorking =  (
          <Typography  variant="body1" color="error" component="span">
            Parked
          </Typography>)

  //DEBUG ONLY
  // This useEffect watches the carId and fires a Query when it receives ID info
  // useEffect(() => {

  //   if(selectedCarId != ""){
  //     console.log("use Effect in effect", selectedCarId)
  //     loadCar({
  //               variables: { id: selectedCarId },
  //               notifyOnNetworkStatusChange: true
  //             })
  //   }
  // }, [selectedCarId])


    // if (called && loading) return <p>Loading ...</p>
    // if (!called) {
    //    return <button onClick={(e) => {
    //     console.log("inside", carId)
    //     loadCarToState(e, carId)
    //     }} >Load car</button>
    // }
    const car = data ? data : null 
    let nextIncome; 
    let nextAILevel;

    if (car){
      nextIncome = (car.incomePerHr + (car.aILevel * 25));
      nextAILevel = (car.aILevel + 1);
    }

    
    return(
      
       <div>
         {car ? displayMainCard ?
          <Card className={car.isWorking ? classes.rootW : classes.rootNW}>
            <CardActionArea>
              <img className="resize-fit-center" src={car ? car.url : null}/>
              <CardContent>
                <Box mb={2}> 
                  <ButtonGroup  variant="contained">
                    <Button color="primary" >
                      {car ? car.make : null}
                    </Button>
                    <Button className={classes.primaryLight}>
                      {car ? car.model : null}
                    </Button>
                  </ButtonGroup>
                </Box>
              
                <Box mb={2}> 
                  <ButtonGroup variant="contained">
                    {/* Left Button */}
                    <Button color="primary" >
                      {car ? "$$/Hr" : null}
                    </Button>
                    <Button className={classes.primaryLight}>
                      {car ? car.incomePerHr : null}
                    </Button>
                    {/* Right Button */}
                    <Button color="primary" >
                      {car ? "aI-Lvl" : null}
                    </Button>
                    <Button className={classes.primaryLight}>
                      {car ? car.aILevel : null}
                    </Button>
                  </ButtonGroup>
                </Box>

                {/* Middle Card Text */}
                <Box mt={1}>
                  <Typography variant="h5" component="h2">
                    Status: {car.isWorking ? subtitleWorking : subtitleNotWorking}
                  </Typography>
                  
                  <Typography variant="h5" component="h2">
                    Year: {car ? car.year : 3030}
                  </Typography>

                  <Typography variant="h5" component="h2">
                    Mileage: {car.mileage ? car.mileage : 0}
                  </Typography>
                  
                  <Typography  variant="h5" component="h2">
                    VIN: {car ? car.VIN : ""}
                  </Typography>
                  <Typography  variant="h5" component="h2"
                  onClick={() => 
                  setDisplayMainCard(displayMainCard ? false : true)
                  }
                  >
                    Click: -> {car ? "Info" : ""}
                  </Typography>
                </Box>
          

              {/* Owner Info */}
                {/* <Typography variant="body2" color="textSecondary" component="span">
                      Owner: {car ? `${car.owner.firstName} ${car.owner.lastName}` : "Ai Owned"}
                </Typography> */}
              </CardContent>
            </CardActionArea>

              {/* Button to Send Query Hire/Cancel/Upgrade */}
            <CardActions>
              {car ? !car.isWorking ? 
              <SendDriverButton
                onClick={() => updateCarMutation({
                  variables: {
                              id: car.id,
                              input: {isSummoned: false, isWorking: true}
                            }
                })}
              >
                Hyre Car
              </SendDriverButton>

              :
              <CancelDriverButton
                onClick={() => updateCarMutation({
                  variables: {
                              id: car.id,
                              input: {isSummoned: true, isWorking: false}
                            }
                })}
              >
                Cancel Hyre
              </CancelDriverButton>
              : null}

              <UpgradeCarButton 
                  onClick={() => updateCarMutation({
                      variables: {
                         id: car.id, 
                         input: {aILevel: nextAILevel,
                                incomePerHr: nextIncome  
                                }
                      }
                      })}>
                      Upgrade Ai  
              </UpgradeCarButton>
            </CardActions>
 
          </Card>
        :
        <Card className={car.isWorking ? classes.rootW : classes.rootNW}> 
        <CardActionArea>
              <img className="resize-fit-center" src={car ? car.url : null}/>
              <CardContent>
                <Box mb={2}> 
                  <ButtonGroup  variant="contained">
                    <Button color="primary" >
                      {car ? car.make : null}
                    </Button>
                    <Button className={classes.primaryLight}>
                      {car ? car.model : null}
                    </Button>
                  </ButtonGroup>
                </Box>
              
                <Box mb={2}> 
                  <ButtonGroup variant="contained">
                    {/* Left Button */}
                    <Button color="primary" >
                      {car ? "$$/Hr" : null}
                    </Button>
                    <Button className={classes.primaryLight}>
                      {car ? car.incomePerHr : null}
                    </Button>
                    {/* Right Button */}
                    <Button color="primary" >
                      {car ? "aI-Lvl" : null}
                    </Button>
                    <Button className={classes.primaryLight}>
                      {car ? car.aILevel : null}
                    </Button>
                  </ButtonGroup>
                </Box>

                {/* Middle Card Text */}
                <Box mt={1}>
                  <Typography variant="h5" component="h2">
                    Status: {car.isWorking ? subtitleWorking : subtitleNotWorking}
                  </Typography>
                  
                  <Typography variant="h5" component="h2">
                    Owner: {car ? `${car.owner.firstName} ${car.owner.lastName}` : "Ai Owned"}
                  </Typography>
                  <Typography  variant="h5" component="h2"
                    onClick={() => 
                    setDisplayMainCard(displayMainCard ? false : true)
                  }
                  >
                    Click: -> {car ? "Info" : ""}
                  </Typography>

                
                </Box>
          

        
              </CardContent>
            </CardActionArea>


            <CardActions>
              {car ? 

              <SellCarButton>
                Sell Car 
              </SellCarButton>
              :
              null}
            </CardActions> 
            </Card>
           : "no car"}
       </div>

    )
}



export default CarShowCard;