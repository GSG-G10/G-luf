import React, { useEffect, useRef, useState } from 'react'
import fireSVg from './asets/fire.svg';
import boySvg from './asets/boy.svg';
// import Map from './levels/Map'
import {MoveLeft} from './levels/MoveLeft'
import {MoveRight} from './levels/MoveRight'


function Level1() {

    const [popStart, setPopStart ] = useState(true)
    const [popLose, setPopLose ] = useState(false)
    const [popWin, setPopWin ] = useState(false)
    const [myScore, setMyScore ] = useState(0)
    const [startPlay, setStartPlay ] = useState(false)
    const [moused, setMoused ] = useState(0)
    const [timeSpeed, setTimeSpeed ] = useState(2)
    const [isActive, setIsActive ] = useState('paused')
    const [timers, setTimers ] = useState(10)
    const [scoreNew, setScoreNew ] = useState(0)

   

    const theGame = () => {

    let hiWIndow = window.innerHeight
    const boxs = document.querySelectorAll(".box");
    const character = document.querySelector(".character");
    const block = document.querySelector(".block");
    const leftBox = document.querySelector(".left");
    const rightBox = document.querySelector(".right");
    const game = document.querySelector(".game")
    game.style.height = (hiWIndow -30 ) + 'px'
    leftBox.style.height = (hiWIndow -30 ) + 'px'
    rightBox.style.height = (hiWIndow -30 ) + 'px'
    character.style.top = (hiWIndow  - 70 ) + 'px'
    let widthGame = game.clientWidth


        boxs.forEach(box=>{
            box.style.setProperty('--hightTop',( hiWIndow -35 +'px' ));
            box.style.setProperty('--timeSpeed',( timeSpeed +'s' ));
            if(startPlay){
                box.style.animationPlayState = 'running';
            }
        })
        
        let myRandom = []
        createRandom()
        function createRandom(){
            for (let i = 0; i < widthGame; i+=40) {
                myRandom.push(i)
            }
        }
        
        document.addEventListener("keydown", event => {
            if(event.key==="ArrowLeft"){
                setScoreNew(scoreNew+1)
                console.log('tttttttttttt,', scoreNew);
                moveLeft();
            }
            if(event.key==="ArrowRight"){
                moveRight();
            }
          });
    
        
        boxs.forEach(box=>{
            box.addEventListener('animationiteration', () => {
                var random = Math.floor(  Math.random() * (myRandom.length - 0));
                random = myRandom[random]
                box.style.left = random + "px";
            });
        
        })
        




        boxs.forEach(box=>{
        let intervalFead = setInterval(function(){
            let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
            let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            let blockLeft = parseInt(window.getComputedStyle(box).getPropertyValue("left"));
            let blockTop = parseInt(window.getComputedStyle(box).getPropertyValue("top"));
            if(characterLeft === blockLeft && blockTop < characterTop  && blockTop > characterTop - 40){
                block.style.animation = "none";
                character.classList.add('dead')
                boxs.forEach(box=>{
                    box.style.animationPlayState = 'paused';
                })
                setTimeout(() => {
                playerLose()
                }, 500);
                clearInterval(intervalFead)
            }
        },1);
        
        })


        if( timers === 0){
            playerWin()
        } 
  

        
            function moveLeft(){
                let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
                left -= 20;
                if(left>=0){
                    setMoused(left)
                    character.style.left = left + "px";
                }
            }
        
            function moveRight(){
                let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
                left += 20;
                if(left<widthGame){
                    // setMoused(left)
                    character.style.left = left + "px";
                }
            }
        
            if(scoreNew > 20 ){
                playerLose()
            }
            console.log(scoreNew);
        
            function playerLose(){
                setPopLose(true)
                // clearInterval(timeInter)
            }
        
            function playerWin(){
                setPopWin(true)
                // clearInterval(timeInter)
            }



        }
    

useEffect(() => {
    // startPlay ?  :  clearInterval(timeInter)
//     let timeInter;
//     if(startPlay){

//    timeInter =   setInterval(() => {
//             setTimers(Number(timers - 1) )
//             console.log('timers: ', timers);
//             if( timers === 0){
//                     // playerWin()
//                     console.log('====================================');
//                     clearInterval(timeInter)
//                 } 
//         }, 1000)
//     }



    return () => {
        setStartPlay(false)
        setScoreNew(scoreNew+1)
        // setMoused(0)
        // clearInterval(timeInter)
    }

}, [scoreNew, startPlay])


        const startGameClick = () =>{
            setStartPlay(true)
            setPopStart(false)
        }
        
        const autoLoadAgin = () =>{
            window.location.reload(false)

        }
        
    return (
        <div >

{
    startPlay ===  false ? null : theGame()
}

        <div className={popStart ? 'pop_start_game': 'pop_start_game start'} >
            <span className="title_level">level 4</span>
            <button className="start_game" onClick={startGameClick}>Start</button>
        </div>

        <div   className={popLose ? 'pop_lose_game start': 'pop_lose_game '}>
            <span className="title_level">You lose </span>
            <div>
                <a href="/"  className="home_btn">Home</a>
                <button className="replay_game" onClick={autoLoadAgin}>replay</button>
            </div>
        </div>

        <div   className={popWin ? 'pop_win_game start': 'pop_win_game '}>
            <span className="title_level">You Win </span>
            <span className="title_level">score: +10 </span>
            <div>
                <a href="/"  className="home_btn">Home</a>
                <button className="next_game">Next</button>
            </div>
        </div>

        <div className="game" >
            <div className="left"></div>
            <div className="right"></div>

       
            <div className="box block" style={{animationPlayState: isActive , '--i': 1}}>
                <img src={fireSVg} alt="fire down" />
            </div>

            <div className="box block" style={{animationPlayState: isActive , '--i': 2}}>
                <img src={fireSVg} alt="fire down" />
            </div>

            <div className="box block" style={{animationPlayState: isActive , '--i': 3}}>
                <img src={fireSVg} alt="fire down" />
            </div>

            <div className="box block" style={{animationPlayState: isActive , '--i': 4}}>
                <img src={fireSVg} alt="fire down" />
            </div>

            <div className="box block" style={{animationPlayState: isActive , '--i': 5}}>
                <img src={fireSVg} alt="fire down" />
            </div>

            <div className="box block" style={{animationPlayState: isActive , '--i': 6}}>
                <img src={fireSVg} alt="fire down" />
            </div>

            <div className="box block" style={{animationPlayState: isActive , '--i': 7}}>
                <img src={fireSVg} alt="fire down" />
            </div>

            <div className="box block" style={{animationPlayState: isActive , '--i': 8}}>
             <img src={fireSVg} alt="fire down" />
            </div>

            <div className="box block" style={{animationPlayState: isActive , '--i': 9}}>
                <img src={fireSVg} alt="fire down" />
            </div>

            <div className="box block" style={{animationPlayState: isActive , '--i': 10}}>
                <img src={fireSVg} alt="fire down" />
            </div> 

            <div className="character">
                <img src={boySvg} alt="Boy Logo" />
            </div>

        </div>



        <div className="white"></div>
        <div className="timer">{timers}s</div>
        </div>
    )
}

export default Level1


