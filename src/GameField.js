import React from 'react'
import useSound from 'use-sound';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './GameField.css'
import wrong from './sounds/wrongSelection.mp3'
import correct from './sounds/correctSelection.mp3'
import gameWin from './sounds/gameWin.mp3'
import gameLose from './sounds/gameLose.mp3'

function GameField({ question, setQuestionNumber, questionnumber, playablecharacter }){
  const [timeRemaining, setTimeRemaining] = useState(12);
  const [restart, setRestart] = useState(true)
  const [questionorder, setQuestionOrder] = useState([])
  const[downtracker, setDownTracker] = useState(1);
  const[characterposition, setCharacterPosition] = (useState("21%"));
 const[windetermine, setWinDetermine] = (useState(false))
 const[progressbar, setProgressBar] = useState(20)
 const[lossdetermine, setLossDetermine] = useState(false);
 const [playing, setPlaying] = useState(false);
 const [playWrong, { stop: stopWrong }] = useSound(wrong, { volume: 1 });
 const [playCorrect, { stop }] = useSound(correct, { volume: 1 });
 const [playWin] = useSound(gameWin, { volume: 1 });
 const [playLose] = useSound(gameLose, { volume: 1 });


console.log(question)

 const navigate = useNavigate();

 const soundToPlay = (sound) => {
  sound();
  setPlaying(true);
  setTimeout(() => {
    stop();
    setPlaying(false);
  }, 1000);
};

  useEffect(() => {
    if(characterposition === "92%"){
      setWinDetermine(!windetermine)
    }
  }, [characterposition])

  useEffect(() => {
    if(progressbar === 100){
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
  
    return () => {
      clearTimeout(timer);
    }};
  }, [windetermine]);

useEffect(() => {
  if(downtracker > 4 || characterposition == "-2%") {
    stopWrong()
    soundToPlay(playLose)
    setLossDetermine(!lossdetermine)
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
  
    return () => {
      clearTimeout(timer);
    }
  }
}, [progressbar, downtracker])

  useEffect(() => {
    if(timeRemaining === 0){
      if(characterposition === "13%"){
        const initialPercentage = parseInt(characterposition); 
        const newPercentage = initialPercentage - 15;
        setCharacterPosition(`${newPercentage}%`);
        setProgressBar(progressbar - 10);
      }else{
        const initialPercentage = parseInt(characterposition); 
        const newPercentage = initialPercentage - 8;
        setCharacterPosition(`${newPercentage}%`);
        setProgressBar(progressbar - 10);
      }
    }
  }, [timeRemaining])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [restart]);
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isRed = timeRemaining <= 5;
  const style = isRed ? { color: 'red' } : {};
  const finished = -1;

  function handleClick(e){
      console.log(e.target.id)
      console.log(e.target.textContent)
      setTimeRemaining(12)
        setRestart(!restart);
        setQuestionNumber(questionnumber+1)
        if(e.target.id === e.target.textContent){
          if(characterposition > "70.9%"){
            soundToPlay(playWin);
            const initialPercentage = parseInt(characterposition); 
            const newPercentage = initialPercentage + 15;
            setCharacterPosition(`${newPercentage}%`);
            setProgressBar(progressbar + 10);
          }else{
            soundToPlay(playCorrect);
            const initialPercentage = parseInt(characterposition); 
            const newPercentage = initialPercentage + 8;
            setCharacterPosition(`${newPercentage}%`);
            setProgressBar(progressbar + 10);
          }
        }else{
            soundToPlay(playWrong);
            setDownTracker(downtracker + 1)

        }
      }
  

      


  function whenChanged(){
    if (finished === timeRemaining){
        setTimeRemaining(12)
        setRestart(!restart);
        setQuestionNumber(questionnumber+1)
    } else {

    }
  }

  console.log(question)

  if(Object.keys(question).length === 0)
    return <div>Out Of Questions Refresh Page!!</div>
    return (
    <>
        <div id="header1"><span id="downtracker">Down:{downtracker}</span><progress id="progress-bar" class="nes-progress is-success" value={progressbar} max="100"></progress><div onChange={whenChanged()} className="countdown" style={style}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</div></div>
        <div id="sky1">
          {lossdetermine ? <><div id="lossmessage">
            <div className="item1"><i class="nes-icon is-large is-half heart"></i></div>
            <div className="item2"><i class="nes-icon is-large heart is-empty"></i></div>
            <div className="item3"><i class="nes-icon is-large heart is-empty"></i></div>
            <div className="item5"><h1 id="youwin">You Lost!!</h1></div>
          </div> </> : <></>}
          {windetermine ? <><div id="winmessage">
            <div className="item1"><i class="nes-icon trophy is-large"></i></div>
            <div className="item2"><i class="nes-icon trophy is-large"></i></div>
            <div className="item3"><i class="nes-icon trophy is-large"></i></div>
            <div className="item4"><h1 id="youwin">You Win!!</h1></div>
          </div> </> : <></>}
        <table id="tables">
            <tr>
                <th colspan="2" id="mainquestion"><span>{question.Q}</span></th>
            </tr>
            <tr>
            <td  id="topdata" className="datas"><button onClick={(e) => handleClick(e)} id={question.RA} value={question.PA[0]} type="button" class="nes-btn is-primary">{question.PA[0]}</button></td>
            <td  id="topdata" className="datas"><button onClick={(e) => handleClick(e)} id={question.RA} value={question.PA[1]} type="button" class="nes-btn is-primary">{question.PA[1]}</button></td>
            </tr>
            <tr>
            <td  className="datas"><button onClick={(e) => handleClick(e)} id={question.RA} value={question.PA[2]} type="button" class="nes-btn is-primary">{question.PA[2]}</button></td>
            <td  className="datas"><button onClick={(e) => handleClick(e)} id={question.RA} value={question.PA[3]} type="button" class="nes-btn is-primary">{question.PA[3]}</button></td>
            </tr>
        </table> 
        </div>
        <div id="ground1">
        <div id="character-container">
          <img id="characterguy"  style={{marginLeft:characterposition}} src={playablecharacter}/>
        </div>
        <div id="field">
      <div id="endzone-left"></div>
      <div id="zone-1">
        <h2 className="uzero">0</h2>
        <h2 id="number">1</h2>
      </div>
      <div id="zone-2">
        <h2 id="uone">1</h2>
        <h2 className="uzero">0</h2>
        <h2 id="zero">0</h2>
        <h2 id="number">2</h2>
      </div>
      <div id="zone-3">
        <h2 id="utwo">2</h2>
        <h2 className="uzero">0</h2>
        <h2 id="two-zero">0</h2>
        <h2 id="number">3</h2>
      </div>
      <div id="zone-4">
        <h2 id="uthree">3</h2>
        <h2 className="uzero">0</h2>
        <h2 id="three-zero">0</h2>
        <h2 id="number">4</h2>
      </div>
      <div id="zone-5">
        <h2 id="ufour">4</h2>
        <h2 className="uzero">0</h2>
        <h2 id="four-zero">0</h2>
        <h2 id="number">5</h2>
      </div>
      <div id="zone-6">
        <h2 id="ufive">5</h2>
        <h2 className="uzero">0</h2>
        <h2 id="five-zero">0</h2>
        <h2 id="number">4</h2>
      </div>
      <div id="zone-7">
        <h2 id="ufour2">4</h2>
        <h2 className="uzero">0</h2>
        <h2 id="hfour-zero">0</h2>
        <h2 id="number">3</h2>
      </div>
      <div id="zone-8">
        <h2 id="uthree2">3</h2>
        <h2 className="uzero">0</h2>
        <h2 id="hthree-zero">0</h2>
        <h2 id="number">2</h2>
      </div>
      <div id="zone-9">
        <h2 id="utwo2">2</h2>
        <h2 className="uzero">0</h2>
        <h2 id="htwo-zero">0</h2>
        <h2 id="number">1</h2>
      </div>
      <div id="zone-10">
        <h2 id="uone2">1</h2>
        <h2 id="hone-zero">0</h2>
      </div>
      <div id="endzone-right"></div>
    </div>
        </div>
    </>
    )
}


export default GameField;