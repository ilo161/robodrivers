import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core/'
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider
}	from '@material-ui/core/';

// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';



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
       	 <Box component="div">
					 <List>
						<ListItem button>
							<ListItemText secondary="I Am List">

							</ListItemText>
								
						</ListItem>
						<ListItem button >
							<ListItemText secondary="I am List II">
							</ListItemText>
						</ListItem>
					 </List>
					 <Divider/>
					 <List>
						<ListItem button>
							<ListItemText secondary="I Am List">

							</ListItemText>
								
						</ListItem>
						<ListItem button >
							<ListItemText secondary="I am List II">
							</ListItemText>
						</ListItem>
					 </List>
					 <Divider/>
					 <List>
						<ListItem button>
							<ListItemText secondary="I Am List">

							</ListItemText>
								
						</ListItem>
						<ListItem button >
							<ListItemText secondary="I am List II">
							</ListItemText>
						</ListItem>
					 </List>
					 <Divider/>
					 <List>
						<ListItem button>
							<ListItemText secondary="I Am List">

							</ListItemText>
								
						</ListItem>
						<ListItem button >
							<ListItemText secondary="I am List II">
							</ListItemText>
						</ListItem>
					 </List>
					 <Divider/>
					 <List>
						<ListItem button>
							<ListItemText secondary="I Am List">

							</ListItemText>
								
						</ListItem>
						<ListItem button >
							<ListItemText secondary="I am List II">
							</ListItemText>
						</ListItem>
					 </List>
					 <Divider/>
					 <List>
						<ListItem button>
							<ListItemText secondary="I Am List">

							</ListItemText>
								
						</ListItem>
						<ListItem button >
							<ListItemText secondary="I am List II">
							</ListItemText>
						</ListItem>
					 </List>
					 <Divider/>
					</Box>
        </div>
    )
}

export default NotifyDropdown;