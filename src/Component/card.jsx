import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import gambar from '../image/lindung.png';
import Button from '@material-ui/core/Button';
import pohon from '../image/pohonbesar.png';
import Grid from '@material-ui/core/Grid';
import blanja from '../image/blanja.png';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    // maxHeight:'100%',
  },
  button: {
    width:300,
    fontSize:12,
    borderRadius:50,
  },
  button1:{
    marginTop:30,
    width:300,
    backgroundColor:'#00C744',
    marginBottom:8,
    color:'#fff',
    borderRadius:50,
    fontSize:12,
  },
  media: {
    height: '100%',
  },
  pohon:{
    width:'100%',
    height:150,
      backgroundImage:`url(${pohon})`,
      textAlign:'center',
      marginTop:20,
      marginBottom:40,
     
  },
  gambar:{
    marginTop:80,
    maxWidth:'100% ',
  },
  lindungihutan:{
    color:"white",
    marginTop:20,
  },
  hirr:{
    marginTop:50,
  },
  popo:{
    flexGrow: 1,
    textAlign: 'center',
    color:'white',
    height:20,
  },
horrr:{
  marginTop:35,
},
});

function Cards() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.gambar}>
        <img src={gambar} width="75%" height="150px" alt="" />
        <CardContent>
          <Typography gutterBottom variant="body" component="h2">
            <strong>
              Hal sederhana,jadi lebih bermakna bersama LindungiHutan.
            </strong>
          </Typography>
          <Typography variant="body"  component="h3">
            <b>
              Buat Aksi penanaman dan lingkungan dengan mudah,aman dan transparant.Mulai Tanam 
            </b>
          </Typography>
          <Typography variant="body"  component="h3">
            <b>
              #PohonPertama Kamu 
            </b>
          </Typography> 
      <Button variant="contained" color="inherit" className={classes.button1}>
       Buat kanpanye alam
      </Button>
      <Button variant="outlined" color="inherit" className={classes.button}>
      Pelajari Bagaimana Kami Bekerja
      </Button>
    <CardContent
      className={classes.pohon}
      image={require("../image/pohonbesar.png")}
      title="pohon hijau">
        <Typography className={classes.lindungihutan} gutterBottom variant="body" color="inherit" component="p">
          LindungiHutan adalah platform crowdplanting penggalangan dana online untuk konservasi hutan dan lingkungan.
        </Typography>
        <div className={classes.popo}>
      <Grid container spacing={3}>
        <Grid item xs={6} xs={3}>
          <h2>754.1jt</h2>
          Donasi 
          Alam
        </Grid>
        <Grid item xs={6} xs={3}>
         <h2>74.2k</h2>
         pohon pertanam
        </Grid>
        <Grid item xs={6} xs={3}>
          <h2>14.2k</h2>
          sahabat alam
        </Grid>
        <Grid item xs={6} xs={3}>
          <h2>317</h2>
          kampanye alam
        </Grid>
        </Grid>
        </div>
      </CardContent>
      <img src={blanja} width="95%" height="130px" alt="" />
      <Typography  className={classes.hirr} gutterBottom variant="body" component="h2">
             Tanam pohon dimana hari ini?
          </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Cards;