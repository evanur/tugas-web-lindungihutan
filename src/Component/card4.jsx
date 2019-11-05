import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import koli from '../image/koli.png';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    maxHeight:'auto',
    maxWidth:'100%',
    marginTop:20,
    marginLeft:20,
  },
  root:{
    maxWidth:'100%',
    maxHeight:'100%',
},
  button: {
  marginTop:20,
    width:300,
    fontSize:12,
    borderRadius:50,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    maxWidth:'100%',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function Casd() {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <div className={classes.root}>
    <Button variant="outlined" color="inherit" className={classes.button}>
    Pelajari Bagaimana Kami Bekerja
    </Button>
    
    <Card className={classes.card}>
    <img src={koli} width="35%" height="150px" alt="" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="body" variant="p">
          Mangrove dari Qonita Gholib untuk Pesisir Bed...
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        </div>
      </div>
    </Card>
    </div>
  );
}
export default Casd;