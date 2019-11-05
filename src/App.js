import React from 'react';
import './App.css';
import Home from './Container/home/home';
import About from './Container/profile/profile';
import Contact from './Container/kampanye/kampanye'; 
// import Apps from './Component/app';
// import Cards from './Component/card';
// import Navigation from './Component/navigation';
// import Cardd from './Component/card2';
// import Papere from './Component/paper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (

 <Router>
  <Switch>
    <Route path="/"exact>
         <Home />
    </Route>
    <Route path="/profile">
         <About />
    </Route>
    <Route path="/kampanye">
         <Contact />
    </Route>
  </Switch>
  </Router>
  
  );
}

export default App;
