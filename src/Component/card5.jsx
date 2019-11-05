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
import gambar from '../image/kebakaran.png';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    marginTop:20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
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
 function Card5() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
         <img src={gambar} width="35%" height="90px" alt="" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="body" variant="p">
          1000 pohon untuk bekas lahan kebakaran TANJAB...
          </Typography>

        </CardContent>
        <div className={classes.controls}>
        </div>
      </div>
    
    </Card>
  );
}

export default Card5;