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

const useStyles = makeStyles(theme => ({
  rootW: {
    maxWidth: "350px",
    background: 'linear-gradient(0deg, #090, #FFF, #FFF, #FFF)'
  },
  rootNW: {
    maxWidth: "350px",
    background: 'linear-gradient(0deg, #F11, #FFF, #FFF, #FFF)'
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

const UserShowCard = ({ data , data: owner }) => {
    const classes = useStyles();


    return (
        data ? 
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography>
                {owner.firstName}
            </Typography>
            <Typography>
                {owner.lastName}
            </Typography>
            <Typography>
                {owner.money}
            </Typography>
        </Box>
        : <p> fetch users failed </p>
    )

}

export default UserShowCard;