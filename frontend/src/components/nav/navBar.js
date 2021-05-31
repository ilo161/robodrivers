import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core/'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  topBar: {
      backgroundColor: '#1D3643'
  }
}));


const NavBar = () => {
    const classes = useStyles()
    

    return(
        <AppBar position="static" >
          <Toolbar style={{
            backgroundColor: '#1D3643'
          }}>
            <Box style={{width: '100%'}} display="flex" alignItems="center" justifyContent="space-between" >
              <IconButton edge="start"  color="inherit" aria-label="menu">
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                RoboCars
              </Typography>
              <Button color="inherit">Notifications</Button>
            </Box>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;