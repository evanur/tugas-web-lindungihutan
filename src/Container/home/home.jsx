import React from 'react';
import Apps from '../../Component/app';
import Cards from '../../Component/card';
import Navigation from '../../Component/navigation';
import Cardd from '../../Component/card2';
import Papere from '../../Component/paper';

function Home(){
    return(
        <div className="App">
            <Apps/>
            <Cards />
            <Navigation/>
            <Cardd/>
            <Papere/> 
            <Navigation />
        </div>
    )
}
export default Home;