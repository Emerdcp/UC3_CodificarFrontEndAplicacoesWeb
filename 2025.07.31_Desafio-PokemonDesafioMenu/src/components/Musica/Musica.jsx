import React from "react";
import './Musica.css'
import MusicaTema from '/public/tema.mp3'

function Musica(props){
    return(
        <>
            <div className='musica'>
                <audio controls autoPlay loop>
                    <source src={MusicaTema} type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                </audio>
            </div>
        </>
    )
}

export default Musica