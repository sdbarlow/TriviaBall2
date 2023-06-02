import React from 'react';
import { useState, useEffect } from 'react'
import useSound from 'use-sound';
import './Home.css'
import { Link } from 'react-router-dom'

function Home({NavBar, playablecharacter}){
  const [playClick] = useSound(('/buttonClick.mp3'), { volume: 1 });

  function handleClick(){
    playClick()
  }

    return (
    <>
    <NavBar playablecharacter={playablecharacter}/>
        <div id="sky">
        <div class="cloud cloud-1"></div>
        <div class="cloud cloud-2"></div>
        <div class="cloud cloud-3"></div>
        <div class="cloud cloud-4"></div>
                <span id="trivia" className="test19">Trivia</span>
                  <br></br>
                <span id="ball" className="test20">Ball</span></div>
                <h3 id="helpmessage">Should be played on a larger screen!</h3>
             <div id="ground">
                <Link to="/Gamefield"><button type="button" onClick={handleClick} className="nes-btn is-primary">Start Game</button></Link>
             </div>
    </>
    )
}

export default Home;