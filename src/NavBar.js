import React from 'react'
import { useState } from 'react'
import useSound from 'use-sound'
import { Link } from 'react-router-dom'
import './NavBar.css'


function NavBar({Characters, playablecharacter}){
    const [playClick] = useSound(('./buttonClick.mp3'), { volume: 1 });

    function handleClick(){
        playClick()
      }


    return(
        <ul>
            <li onClick={handleClick} className="charIcon"><Link style={{ textDecoration: 'none', color: "black" }} to="/Profile"><img src={playablecharacter} className="nes-mario"/></Link></li>
            <li onClick={handleClick} ><Link className="links" style={{ textDecoration: 'none', color: "black"}} to="/Leaderboard">Leaderboard</Link></li>
            <li onClick={handleClick} ><Link className="links" style={{ textDecoration: 'none', color: "black" }} to="/About">About</Link></li>
        </ul>
    )
}

export default NavBar