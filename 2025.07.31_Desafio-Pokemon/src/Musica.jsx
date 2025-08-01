import React from "react";
import './Musica.css'
import Musica from './assets/musica.mp3';

function Musica(props){
    return(
        <>
            <div className='musica'>
                <img src={Musica} />
            </div>
        </>
    )
}

export default Musica