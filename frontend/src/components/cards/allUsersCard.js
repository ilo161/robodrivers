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
    minWidth: "40px",
    maxWidth: "150px",
    // maxWidth: "100%",
    // maxHeight: "100%"
    // background: 'dodgerblue'
  },
  rootCard: {
    // minWidth: "50%",
    minWidth: "40px",
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


const AllUsersCard = ({ data , data: owner, allUsersCarsQuery }) => {

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
           
        }
          
    }


    return (
        data ? 
        <Box className={classes.root} display="flex" flexDirection="column" alignItems="center"
             justifyContent="center">
            <Card className={classes.rootCard} variant="outlined">
                <CardActionArea 
                    onClick={() => allUsersCarsQuery()}
                >
                    <CardContent>
                        <Typography align="center">
                            All User
                        </Typography>
                        <Typography align="center">
                             Cars Display
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Container maxWidth="sm">
                    <Box display="flex" justifyContent="center" >

                    </Box>
                </Container>
                </CardActions>
            </Card>
        </Box>
        : <p> no button </p>
    )

}

export default AllUsersCard;