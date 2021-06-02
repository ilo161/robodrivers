import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core/'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



// const useStyles = makeStyles((theme) => ({
//   root: {
// 		width: '100%',
// 		maxWidth: 360,
// 		color: "green",
// 		// backgroundColor: theme.palette.background.paper
// 		backgroundColor: 'gray',
    
//   },
  
// }));


const NotifyDropdown = () => {
    // const classes = useStyles()
    

    return(
        <div className="dropdown">
       	 <Box>
					 <List>
						<ListItem button>
							<ListItemText>
								I am List
							</ListItemText>
								
						</ListItem>
						<ListItem button >
							<ListItemText>
								I am List II
							</ListItemText>
						</ListItem>
					 </List>
					</Box>
        </div>
    )
}

export default NotifyDropdown;