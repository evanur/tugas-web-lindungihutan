import React from 'react';
import Apps from '../../Component/app';
import Navigation from '../../Component/navigation';
import Papere from '../../Component/papere';
import Tabb from '../../Component/tabb';

function Profile(){
    return(
        <div className="App">

            <Apps />
            <Navigation />
            <Papere/>
            <Tabb/>
        </div>
    )
}
export default Profile;