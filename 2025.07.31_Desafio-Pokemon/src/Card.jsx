import React from "react";
import './Card.css'

function Card(props){
    return(
        <>
            <div className="card">
                <img src={props.info.foto} />
                <h3>{props.info.numero}</h3>
                <h2>{props.info.nome}</h2>
                <h3>{props.info.tipo}</h3>
            </div>
        </>
    )
}

export default Card