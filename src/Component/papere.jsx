import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    background:'linear-gradient(2.06deg, #7BE3FA -44%, #045F50 87.81%)',
    color:'white',
    height:400,
    // borderRadius:'50%',
  },
yoo:{
marginTop:60,
},
title:{
 marginLeft: -230,
 marginTop:60,
 marginBottom:10,
 color:'#fff',
 fontSize:15,
},
button1:{
  marginTop:-70,
  width:  160,
  backgroundColor:'#f53855',
  marginBottom:8,
  color:'#fff',
  borderRadius:50,
  fontSize:12,
  marginLeft:180,
},
looY:{
background:'linear-gradient(2.06deg, #7BE3FA -160%, #045F50 70.81%)',
shadow:'0 10px 20px rgba(0,0,0,0.10)',
marginTop:60,
height:130,
width:130,
margin:10,
},
fab:{
  marginLeft:'0%',
},
Avatar: {
  margin: 10,
  color: '#fff',
  backgroundColor: '#3f51b5',
  marginLeft: 88,
  marginTop: -40,
},
tw: {
  margin: 10,
  color: '#fff',
  backgroundColor: '#2196f3',
  marginLeft: 135,
  marginTop: -50,
},
fab: {
  margin: theme.spacing(1),
},
jk:{
  marginTop:10,
}
}));

function Papere() {
  const classes = useStyles();

  return (
    <div>
    <Paper className={classes.root}>
        <Grid container justify="center" alignItems="center">
            <Avatar alt="" src="ksksk/loo/msjnsm" className={classes.looY}/>
          </Grid>
      <Typography className={classes.yoo}variant="h5" component="h3">
       Eva nurrohmah
      </Typography>
      <Typography className={classes.jk} variant="p" component="p">
      Gabung Relawan Sekarang
      </Typography>
      <Typography variant="body" component="h5" className={classes.title}>
        bagikan:
      </Typography>
      <Avatar className={classes.Avatar}>
        <FacebookIcon />
      </Avatar>
      <Avatar className={classes.tw}>
        <TwitterIcon />
      </Avatar>
      <Button variant="contained" color="inherit" className={classes.button1}>
       Lengkapi profile
      </Button>
    </Paper>
    </div>
  );
}
export default Papere;