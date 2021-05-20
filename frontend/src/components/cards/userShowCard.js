import {useState, useEffect} from "react"
import {  gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
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
  Container
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "200px",
    maxWidth: "350px",
    // maxWidth: "100%",
    // maxHeight: "100%"
    // background: 'dodgerblue'
  },
  rootCard: {
    minWidth: "50%",
    maxHeight: "100%",
    // maxWidth: "350px",
    // background: 'linear-gradient(0deg, #F11, #FFF, #FFF, #FFF)'
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

const UpgradeAllCarsButton = styled(Button)({
  background: 'dodgerblue',
  marginLeft: "8px",
  padding: '4px 2px',
  fontSize: "0.8125rem",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 38,
});

const CancelAllCarsButton = styled(Button)({
  background: 'red',
  marginLeft: "8px",
  padding: '4px 2px',
  fontSize: "0.8125rem",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 38,
});

const HyreAllCarsButton = styled(Button)({
  background: 'green',
  marginLeft: "8px",
  padding: '4px 2px',
  fontSize: "0.8125rem",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 38,
});



const UserShowCard = ({ data , data: owner, updateCarMutation, UPDATE_CAR, oneUserCarsQuery }) => {

    const classes = useStyles();
    // sending null here is very dangerous as it will crash the server... but
    // won't fail because <Card> action will not render
    const id = owner ? owner.id : null

    // This FN will flip the car object key of isWorking Boolean to it's opposite 
    // as well as isSummoned Boolean
    //OR
    //// This FN will upgrade the AILevel in Car Object to +1 and increase incomePerHr Rate
    const batchUpdateCars = (type) => {
        let id;

        //variables for batch summon function
        let currentOptions;
        let input;

        //variables for batch upgrade AI level
        let nextIncome;
        let nextAILevel;

        if(type == "summon"){
            owner.cars.forEach(carObj => {

                // grab current values and store in variable for fast mutation
                id = carObj.id
                input = {isSummoned: true, isWorking: false}

                updateCarMutation({variables: { id, input }})
            }) 
        } else if(type ==="hyre"){
              owner.cars.forEach(carObj => {
                
                id = carObj.id
                input = {isSummoned: false, isWorking: true}

                updateCarMutation({variables: { id, input }})

              })
        } else if(type ==="AI"){

            owner.cars.forEach(carObj => {
                // console.log("batch AI up", carObj)
                id = carObj.id;
                nextIncome = (carObj.incomePerHr + (carObj.aILevel * 25));
                nextAILevel = (carObj.aILevel + 1);

                updateCarMutation({
                        variables: {id, 
                                    input: {aILevel: nextAILevel,
                                            incomePerHr: nextIncome  
                                            }
                        }})
            }) 
        }
          
    }


    return (
        data ? 
        <Box className={classes.root} display="flex" flexDirection="column" alignItems="center"
             justifyContent="center">
            <Card className={classes.rootCard} variant="outlined">
                <CardActionArea 
                    onClick={() => oneUserCarsQuery({ variables: { id } })}
                >
                    <CardContent>
                        <Typography align="center">
                            {owner.firstName}
                        </Typography>
                        <Typography align="center">
                            {owner.lastName}
                        </Typography>
                        <Typography align="center">
                            {`$ ${owner.money}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Container maxWidth="sm">
                    <Box display="flex" justifyContent="center" >
                        <HyreAllCarsButton
                            onClick={() => batchUpdateCars("hyre")}
                        >
                            Hyre Cars
                        </HyreAllCarsButton>

                        <CancelAllCarsButton
                            onClick={() => batchUpdateCars("summon")}
                        >
                            Summon Cars
                        </CancelAllCarsButton>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <UpgradeAllCarsButton
                            onClick={() => batchUpdateCars("AI")}
                        >
                            Upgrade Cars
                        </UpgradeAllCarsButton>
                    </Box>
                </Container>
                </CardActions>
            </Card>
        </Box>
        : <p> fetch users failed </p>
    )

}

export default UserShowCard;