import React from 'react'
import { useState } from 'react'
import useSound from 'use-sound'
import './Leaderboard.css'
import { Link } from 'react-router-dom'

function Leaderboard(){
  const [playClick] = useSound(('./buttonClick.mp3'), { volume: 1 });

    return(<>
    <div onClick={playClick} className="navbar3"><Link to="/"><a id="home" class="nes-btn" href="#">Back</a></Link></div>
<div className="parent1">
<div id="leaderboard" class="nes-container with-title is-centered">
  <p className="title">Leaderboard</p>
  <ul id="list-container">
    <li className="listitem1"><i id="troph" class="nes-icon trophy is-small"></i>hotshotKSGator15</li><li className="listitem7">100000000</li>
    <li className="listitem2">JoeNotExotic72</li><li className="listitem8">10000000</li>
    <li className="listitem3">TickleMeElmo</li><li className="listitem9">1000000</li>
    <li className="listitem4">ShaquilleOatmeal</li><li className="listitem10">100000</li>
    <li className="listitem5">MagicSchoolBusDropout</li><li className="listitem11">10000</li>
    <li className="listitem6">NoMomICantPauseIt</li><li className="listitem12">1000</li>
  </ul>
</div>
</div>
</>
    )
}

export default Leaderboard;