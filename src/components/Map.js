import React, { useEffect, useRef, useState } from 'react'
import fireSVg from './asets/fire.svg';
import boySvg from './asets/boy.svg';
// import Map from './levels/Map'
import {MoveLeft} from './levels/MoveLeft'
import {MoveRight} from './levels/MoveRight'


function Level1() {

    const [maping, setMaping] = useState({
        start:false,
        lose: false,
        win: false,
        startPlay: true,
        score: 0,
        timesUp: 3,
        timer: null,
        boxs: null,
        hiWIndow: null,
        widthGame: null,
        block: null,
        character: null,
        pop_lose_game:null,
        pop_start_game:null,
    })

    // const refs = useRef(null)
    // const divRef = React.createRef()


useEffect(() => {
    let hiWIndow = window.innerHeight
    const boxs = document.querySelectorAll(".box");
    const character = document.querySelector(".character");
    const block = document.querySelector(".block");
    const leftBox = document.querySelector(".left");
    const rightBox = document.querySelector(".right");
    const game = document.querySelector(".game")
    const timer = document.querySelector(".timer")
    const replay_game = document.querySelector(".replay_game")
    const pop_start_game = document.querySelector(".pop_start_game")
    const pop_lose_game = document.querySelector(".pop_lose_game")
    const pop_win_game = document.querySelector(".pop_win_game")
    const start_game = document.querySelector(".start_game")



    game.style.height = (hiWIndow -30 ) + 'px'
    leftBox.style.height = (hiWIndow -30 ) + 'px'
    rightBox.style.height = (hiWIndow -30 ) + 'px'
    character.style.top = (hiWIndow  - 70 ) + 'px'
    let widthGame = game.clientWidth
    let heightGame = parseInt(window.getComputedStyle(game).getPropertyValue("height"))
    


    // setMaping({...maping, 
    //     timer: timer,
    //     boxs: boxs,
    //     hiWIndow: hiWIndow,
    //     widthGame: widthGame,
    //     block: block,
    //     character: character,
    //     pop_lose_game:pop_lose_game,
    //     pop_start_game:pop_start_game,
    // })



    start_game.addEventListener('click', ()=>{
        pop_start_game.classList.add('start')
        // setMaping({...maping, start : true})
        theGame()
    })
    
    replay_game.addEventListener('click', ()=>{
        pop_lose_game.classList.remove('start')
        setMaping({...maping, timesUp : 30})
        setMaping({...maping, score : 0})
        // Map()
        theGame()
    })
    
    console.log('maping, ' , maping.start);

    
function theGame(){
    
    if(pop_lose_game.classList.contains('start') ){
        console.log('haved');
        pop_start_game.classList.remove('start')
    }
    
    
        
     let timeInter =   setInterval(() => {
        setMaping({...maping, timesUp : maping.timesUp--})
            timer.textContent = maping.timesUp + 's';
            if( maping.timesUp === 0){
                playerWin()
                clearInterval(timeInter)
               } 
        }, 1000);
    
    
    boxs.forEach(box=>{
        box.style.setProperty('--hightTop',( hiWIndow -35 +'px' ));
        if(maping.startPlay){
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
            moveLeft(character, window);
        }
        if(event.key==="ArrowRight"){
            moveRight(character, window);
        }
      });
    



    
    boxs.forEach(box=>{
        box.addEventListener('animationiteration', () => {
            var random = Math.floor(  Math.random() * (myRandom.length - 0));
            random = myRandom[random]
            box.style.left = random + "px";
        setMaping({...maping, score : maping.score++})
            // console.log(maping.score);
        });
    
    })
    
    boxs.forEach(box=>{
    let intervalFead = setInterval(function(){
        let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(box).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(box).getPropertyValue("top"));
        if(characterLeft === blockLeft && blockTop < characterTop  && blockTop > characterTop - 40){
            console.log("Game over. Score: " + maping.score);
            block.style.animation = "none";
            character.classList.add('dead')
            boxs.forEach(box=>{
                if(maping.startPlay){
                    box.style.animationPlayState = 'paused';
                }
            })
            setTimeout(() => {
            playerLose()
            }, 500);
            clearInterval(intervalFead)
        }
    },1);
    
    })
    
        function moveLeft(){
            let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
            left -= 40;
            if(left>=0){
                character.style.left = left + "px";
            }
        }
    
        function moveRight(){
            let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
            left += 40;
            if(left<widthGame){
                character.style.left = left + "px";
            }
        }
    
    
        function playerLose(){
            pop_lose_game.classList.add('start')
            clearInterval(timeInter)
        }
    
        function playerWin(){
            pop_win_game.classList.add('start')
            clearInterval(timeInter)
        }
    
    }

    return () => {
        
    }
}, [maping.start])



    return (
        <div >

{
    // maping.start ? <Map maping={maping}/> : null
}
        
        <div className="pop_start_game">
            <span className="title_level">level 4</span>
            <button className="start_game">Start</button>
        </div>
        <div className="pop_lose_game">
            <span className="title_level">You lose </span>
            <div>
                <a href="/"  className="home_btn">Home</a>
                <button className="replay_game">replay</button>
            </div>
        </div>
        <div className="pop_win_game">
            <span className="title_level">You Win </span>
            <span className="title_level">score: {maping.score} </span>
            <div>
                <a href="/"  className="home_btn">Home</a>
                <button className="next_game">Next</button>
            </div>
        </div>
        <div className="game" enable-background>
            <div className="left"></div>
            <div className="right"></div>
       
       
            <div className="box block" style={{'--i': 1}}>
                <img src={fireSVg} alt="fire down" />
            </div>


            <div className="box block" style={{'--i': 2}}>
                <img src={fireSVg} alt="fire down" />
            </div>


            <div className="box block" style={{'--i': 3}}>
         <img src={fireSVg} alt="fire down" />
            </div>


            <div className="box block" style={{'--i': 4}}>
         <img src={fireSVg} alt="fire down" />
            </div>


            <div className="box block" style={{'--i': 5}}>
         <img src={fireSVg} alt="fire down" />
            </div>


            <div className="box block" style={{'--i': 6}}>
         <img src={fireSVg} alt="fire down" />
            </div>


            <div className="box block" style={{'--i': 7}}>
             <img src={fireSVg} alt="fire down" />
            </div>


            <div className="box block" style={{'--i': 8}}>
             <img src={fireSVg} alt="fire down" />
            </div>


            <div className="box block" style={{'--i': 9}}>
         <img src={fireSVg} alt="fire down" />
            </div>


            <div className="box block" style={{'--i': 10}}>
         <img src={fireSVg} alt="fire down" />
            </div> 


            <div className="character">
         <img src={boySvg} alt="Boy Logo" />
            </div>
        </div>
        <div className="white"></div>
        <div className="timer">30s</div>
        </div>
    )
}

export default Level1
