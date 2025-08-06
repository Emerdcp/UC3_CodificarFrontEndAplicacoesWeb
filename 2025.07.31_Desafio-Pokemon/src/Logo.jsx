import React from "react";
import './Logo.css'
import LogoPokemon from '/public/pokemon.png';

function Logo(props){
    return(
        <>
            <div className='logo'>
                <img src={LogoPokemon} />
            </div>
        </>
    )
}

export default Logo