import React from 'react'
import { useState } from 'react'
import './CharacterCard.css'

function CharacterCard({image, id, handleClick, number}){


    return(
        <>
            {number === id ? <div className="image-container">
                <img id={id} className="image" src={image} />
            </div> : <img id={id} value={id} onClick={(e)=>handleClick(e,id)} className="image" src={image} />}
        </>
    )
}

export default CharacterCard;