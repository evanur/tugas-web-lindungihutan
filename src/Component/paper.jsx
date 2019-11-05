import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth:'100%',
    maxHeight:500,
  },
  uk:{
        marginTop:30,
  },
  ik:{
      marginTop:50,
      marginBottom:60,
  },
 but:{
    marginTop:0,
    width:300,
    backgroundColor:'#f53855',
    marginBottom:8,
    color:'#fff',
    borderRadius:50,
    fontSize:12,
    marginBottom:60,
  },
}));

 function Papere() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.uk} variant="body" component="p">
        sebelumnya
      </Typography>
      <Typography className={classes.ik} variant="body" component="h3">
      Ambil bagian untuk menghijaukan kembali Indonesia. 
      </Typography>
      <Button variant="contained" color="inherit" className={classes.but}>
        <FavoriteIcon/>
      Donasi
      </Button>
    </Paper>
  );
}
export default Papere;