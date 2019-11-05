import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    background:'linear-gradient(#045f50, rgba(16, 186, 158, 1))',
    borderRadius:'30px 30px',
    borderTopLeftRadius:'0px',
    borderTopRightRadius:'0px',
    borderBottomLeftRadius:'320px',
    borderBottomLeftRadius:'30px',
    color:'white',
  },
  media: {
    height: 140,
  },
  kiii:{
   marginTop:1,
  },
  button1:{
    marginTop:5,
    width:300,
    backgroundColor:'#00C744',
    marginBottom:8,
    color:'#fff',
    borderRadius:50,
    fontSize:12,
    marginLeft:25,
  },
});

function Cardds() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.kiii} gutterBottom variant="body" component="h1">
              <strong>
            Kampanye Alam
            </strong>
          </Typography>
          <Typography variant="body2" color="white" component="h5">
          Mulai Kampanye Alam pertamamu, buat gerakan penanaman atau aksi lingkungan dengan mudah, aman dan transparan. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="inherit" className={classes.button1}>
            <strong>
       Buat kanpanye alam
       </strong>
      </Button>
      </CardActions>
    </Card>
  );
}
export default Cardds;