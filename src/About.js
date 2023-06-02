import React from 'react'
import { useState } from 'react'
import './About.css'
import useSound from 'use-sound'
import click from './sounds/buttonClick.mp3'
import { Link } from 'react-router-dom'


function About(){

  const [playClick] = useSound(click, { volume: 1 });

    return (<>
        <div onClick={playClick} className="navbar4"><Link to="/"><a id="home" class="nes-btn" href="#">Back</a></Link></div>
    <div className="parent2">
    <div id="leaderboard1" class="nes-container with-title is-centered">
      <p className="title">About</p>
      <div id="aboutcontainer">
        <div id="topheader">Created By Seth Barlow</div>
        <div id="thelogos"><a target="_blank" href="https://github.com/sdbarlow"><i class="nes-icon github is-medium"></i></a><p className="psuedopadding">dd</p><a target="_blank" href="https://medium.com/@sethdbarlow"><i class="nes-icon medium is-medium"></i></a><p className="psuedopadding">dd</p><a target="_blank" href="https://www.linkedin.com/in/sethdbarlow/"><i class="nes-icon linkedin is-medium"></i></a><p className="psuedopadding">dd</p><a target="_blank" href="mailto:sethdbarlow@gmail.com"><i class="nes-icon gmail is-medium"></i></a></div>
        <div id="middleheader">Languages Used</div>
        <div id="theimgs" ><img id="firstimg" className='imagelogos' src="./images/HTML5.png"/><img id="toowide" className='imagelogos' src="./images/CSS.png"/><img className='imagelogos' src="./images/JavaScript.png"/><img id="toowide2" className='imagelogos' src="./images/React.png"/></div>
        <div id="bottomheader">Framework Used</div>
        <div id="nesbadge"><a target="_blank" href="https://nostalgic-css.github.io/NES.css/#" class="nes-badge">
  <span class="is-success">NES.css</span>
</a></div>
      </div>
    </div>
    </div>
    </>
    )
}

export default About;