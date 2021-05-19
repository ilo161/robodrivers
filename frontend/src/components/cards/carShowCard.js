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
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core/';
import "../../stylesheets/card_show.css"
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';




// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     // marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   topBar: {
//       backgroundColor: '#1D3643'
//   }
// }));

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "350px"
  },
  primaryLight: {
        backgroundColor: theme.palette.primary.dark, 
        color: theme.palette.primary.main
  },
  isWorkingText: {
    color: theme.palette.secondary.light
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



// const ButtonSmPadding = (car) => {
//   const classes = useStyles()
//   return (<ButtonGroup className={classes.root}  variant="contained">
//             <Button  >
//               {car ? car.make : null}
//             </Button>
//             <Button >
//               {car ? car.model : null}
//             </Button>
//           </ButtonGroup>)
// }


const CarShowCard = ({loadCarToState, selectedCarId}) => {
    const classes = useStyles()
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
  const carId = "60a185da10d2cdd04d5ef711"
  const [ loadCar, {loading, called, error, data}] = useLazyQuery(REQUEST_CAR)

  const subtitleWorking = (
          <Typography variant="body1" color="secondary" component="span">
            Making Money
          </Typography>)

  const subtitleNotWorking =  (
          <Typography variant="body2" color="textSecondary" component="span">
            Parked
          </Typography>)

  useEffect(() => {

    if(selectedCarId != ""){
      console.log("use Effect in effect", selectedCarId)
      loadCar({
                variables: { id: selectedCarId },
                notifyOnNetworkStatusChange: true
              })
    }}, [selectedCarId])


    if (called && loading) return <p>Loading ...</p>
    if (!called) {
       return <button onClick={(e) => {
        console.log("inside", carId)
        loadCarToState(e, carId)
        }} >Load car</button>
    }
    const car = data ? data.car ? data.car : null : null
    console.log("dataa", car)
    

    return(
       <div>
         <p>hi car show TWO!! card</p>
         <p>{data ? data.car.url : "no url"}</p>
          <Card className={classes.root}>
            <CardActionArea>
              <img className="resize-fit-center" src={car ? car.url : null}/>
              <CardContent >
          <ButtonGroup  variant="contained">
            <Button color="primary" >
              {car ? car.make : null}
            </Button>
            <Button className={classes.primaryLight}>
              {car ? car.model : null}
            </Button>
          </ButtonGroup>
          </CardContent>
          <CardContent>
          <ButtonGroup size="xs" variant="contained">
            <Button color="primary" >
              {car ? "Income/Hr" : null}
            </Button>
            <Button className={classes.primaryLight}>
              {car ? car.incomePerHr : null}
            </Button>
            <Button color="primary" >
              {car ? "aILevel" : null}
            </Button>
            <Button className={classes.primaryLight}>
              {car ? car.aILevel : null}
            </Button>
          </ButtonGroup>
          
          {/* <ButtonGroup size="small" variant="contained">
            <Button color="primary" >
              {car ? "Owner" : null}
            </Button>
            <Button className={classes.primaryLight}>
              {car ? `${car.owner.firstName} ${car.owner.lastName}` : null}
            </Button>
          </ButtonGroup> */}
          
          <Typography gutterBottom variant="h5" component="h2">
            Status: {car.isWorking ? subtitleWorking : subtitleNotWorking}
          </Typography>
          <Typography gutterBottom variant="h5" component="span">
            Owner:
            <Typography variant="subtitle1" component="span">
              {car ? `   ${car.owner.firstName} ${car.owner.lastName}` : null}  
            </Typography>
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            VIN: {car ? car.VIN : ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="span">
            Owner: {car ? `${car.owner.firstName} ${car.owner.lastName}` : "Ai Owned"}
      </Typography>
      </CardContent>
      <CardActions>
        {car ? !car.isWorking ? 
        <SendDriverButton>
          Send to Work
        </SendDriverButton>

        :
        <CancelDriverButton>Cancel RoboDriver</CancelDriverButton>
         : null}
         

        <SendDriverButton>
          Send to Work
        </SendDriverButton>
        
      </CardActions>
    </Card>
       </div>
    )
}

{/* <Button size="small" variant="contained" color="primary">
          Cancel RoboDriver
        </Button> */}

export default CarShowCard;