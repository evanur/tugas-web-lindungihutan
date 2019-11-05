import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import satuhutan from '../image/satuhutan.png';
import pohonbima from '../image/pohonbima.png';
import pohonuntuk from '../image/pohonuntuk.png';
import Progress from '../Component/prpogres';

const useStyles = makeStyles(theme => ({
  card: {
        display: 'flex',
    maxHeight:'auto',
    maxWidth:800,
    marginTop:20,
    marginLeft:20,
  },
  root:{
      maxWidth:'100%',
      maxHeight:'100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  satuhutan:{
        maxHeight:20000,

  },
  cover: {
    width: 151,
  },
  hirr:{
    marginTop:40,
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

function Cardd() {
  const classes = useStyles();


  return (
      <div className={classes.root}>
    <Card className={classes.card}>
 <img src={satuhutan} width="45%" height="100px" alt="" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <Typography gutterBottom variant="body" component="h4">
            <strong>
          #SatuHutan 100 Pohon untuk Gunung Salak!
          </strong>
          <Progress/>
          </Typography>

        </CardContent>
      </div>
    </Card>
   
          <Card className={classes.card}>
       <img className={classes.pohonbima} src={pohonbima} width="45%" height="130px" alt="" />
            <div className={classes.details}>
              <CardContent className={classes.content}>
              <Typography gutterBottom variant="body" component="h4">
                  <strong>
                  1000 pohon untuk bima
                    </strong>
                </Typography>
                  <Progress />
              </CardContent>
            </div>
          </Card>

          <Card className={classes.card}>
       <img className={classes.satuhutan} src={pohonuntuk} width="45%" height="110px" alt="" />
            <div className={classes.details}>
              <CardContent className={classes.content}>
              <Typography gutterBottom variant="body" component="h4">
                  <strong>
                  #SatuHutan 1 Pohon untuk 1000 Kehidupan Kalim...
                </strong>
                </Typography>
                  <Progress/>
              </CardContent>
            </div>
          </Card>
          </div>
  );
}
export default Cardd;