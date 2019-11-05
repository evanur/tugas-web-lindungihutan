import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import kecil from '../image/kecil.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position:'fixed',
    zIndex:30,
    width:'100%',
    height:40,
  },
  navbar: {
    backgroundColor:'#045f50',
  },
  
  menuButton: {
    marginRight:" theme.spacing(2)",
    marginLeft:90,
  },
  title: {
    flexGrow: 5,
    marginLeft:5,
  },
  kecil:{
      marginTop:4,
      marginLeft:8,
      height:30,
  },
}));

function Apps() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
        <img className={classes.kecil} src={kecil} width="10%" height="15px" alt="" />
          <Typography variant="h6" className={classes.title}>
            <strong>Lindungihutan</strong>
          </Typography>
         
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Apps;