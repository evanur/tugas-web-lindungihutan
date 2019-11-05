import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position:"fixed",
    bottom:0,
    backgroundColor:"white",
    zIndex:20
  },
  fontTitle:{
      color:"green",
  }
});

 function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        > LocationOnIcon

<Link to="/"><BottomNavigationAction className={classes.fontTitle} label="home" icon={<RestoreIcon />} /></Link>
<Link to="/kampanye"><BottomNavigationAction className={classes.fontTitle} label="kampanye" icon={<FavoriteIcon />} /></Link>
<Link to="/profile"><BottomNavigationAction className={classes.fontTitle} label="profile" icon={<LocationOnIcon />} /></Link>

  </BottomNavigation>
  );
}
  
export default Navigation;