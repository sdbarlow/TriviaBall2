import React from 'react'
import { useState } from 'react'
import './Profile.css'
import useSound from 'use-sound';
import CharacterCard from "./CharacterCard";
import { Link } from 'react-router-dom'

function Profile({Characters, whenSubmit, handleClick, number}){
    const [value, setValue] = useState("")
    const [playClick] = useSound(('./buttonClick.mp3'), { volume: 1 });

    const renderIcons = Characters.map((char)=> {return(<CharacterCard number={number} handleClick={handleClick} id={char.id} key={char.id} image={char.image}/>)})

    function handleSubmit(e){
        e.preventDefault();
        whenSubmit(value)
    }
console.log(Characters.length)

    return(<>
        
    <div className="parent">
    <div onClick={playClick} className="navbar8"><Link to="/"><a id="home" class="nes-btn" href="#">Back</a></Link></div>
        <span id="header" className="nes-text is-primary">Choose A Character</span>
        <div className="grid">
            {renderIcons}
                {Characters.length === 9 ? <></> : <><img className="image" src="../Images/plusSign.png" onClick={() => document.getElementById('dialog-default').showModal()}/></>}
                <dialog class="nes-dialog" id="dialog-default">
                        <form method="dialog" onSubmit={handleSubmit}>
                        <p class="title">Enter An Image</p>
                        <textarea value={value} onChange={(e) => setValue(e.target.value)} id="textarea_field" class="nes-textarea"></textarea>
                        <menu class="dialog-menu">
                            <button onClick={playClick} type="button" class="nes-btn">Cancel</button>
                            <button onClick={playClick} type="submit" class="nes-btn is-primary">Confirm</button>
                        </menu>
                        </form>
                    </dialog>
            </div>
        </div>
        </>
    )
}

export default Profile