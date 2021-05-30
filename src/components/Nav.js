import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Event from '@material-ui/icons/Event';
import{Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  eventIcon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem:{
      marginLeft:theme.spacing(2),
  },
  menuItemLink:{
    textDecoration:'none',
    color:'#fff',
  },
}));

const Nav=()=> {
  const classes = useStyles();
  const enteries = useSelector(state=>state.enteries);
  const totalEnteries =()=> enteries.totalEnteries ? enteries.totalEnteries.length : 0 
  

  return (
    <div className={classes.root}>
     
      <AppBar position="static">
        <Toolbar>
          <Event className={classes.eventIcon}/>
          <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.menuItemLink}> Events App</Link>
          </Typography>
          
          <Link to="/" className={classes.menuItemLink}>
          <Typography variant="h6" className={classes.menuItem}>
            Home
          </Typography>
          </Link>
          <Link to="/about" className={classes.menuItemLink}>
          <Typography variant="h6" className={classes.menuItem}>
            About
          </Typography>
          </Link>
          <Link to="/enteries" className={classes.menuItemLink}>
          <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={totalEnteries()} color="secondary">
                <ConfirmationNumberIcon />
              </Badge>
          </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav