import React from "react";

import './home.css';
import Promo from "../../components/promo/Promo";
import Objects from "../../components/objects/Objects";
import ButtonRegister from "../../components/buttonRegister/ButtonRegister";
import Services from "../../components/services/Services";

function Home(){
    return(
        <div className='home__page'>
            <Promo/>
            <Services/>
            <Objects />
            <ButtonRegister />
        </div>
    )
}

export default Home;