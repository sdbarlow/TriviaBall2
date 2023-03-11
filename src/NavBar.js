import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


function NavBar({Characters, playablecharacter}){
    return(
        <ul>
            <li className="charIcon"><Link style={{ textDecoration: 'none', color: "black" }} to="/Profile"><img src={playablecharacter} className="nes-mario"/></Link></li>
            <li><Link className="links" style={{ textDecoration: 'none', color: "black"}} to="/Leaderboard">Leaderboard</Link></li>
            <li><Link className="links" style={{ textDecoration: 'none', color: "black" }} to="/About">About</Link></li>
        </ul>
    )
}

export default NavBar