// import Lose from './Lose';
// import Win from './Win';
// import Timer from './Timer';
// import MoveLeft from './MoveLeft'
// import MoveRight from './MoveRight'
// import Random from './Random'

// // export default function Map( {maping, timesUp, timer, boxs,  pop_lose_game, pop_start_game, startPlay, hiWIndow ,character, widthGame,counter ,block } ){
// export default function Map( {maping}){
    

//     console.log('its work ', maping.start);
   
//     if(pop_lose_game.classList.contains('start') ){
//         console.log('haved');
//         pop_start_game.classList.remove('start')
//     }
    
        
//      let timeInter =   setInterval(() => {
//             timesUp--
//             timer.textContent = timesUp + 's';
//             if( timesUp === 0){
//                 playerWin()
//                 clearInterval(timeInter)
//                } 
//         }, 1000);
    
    
        
    
//     boxs.forEach(box=>{
//         box.style.setProperty('--hightTop',( hiWIndow -35 +'px' ));
//         if(startPlay){
//             box.style.animationPlayState = 'running';
//         }
//     })
    
    
    
//     let myRandom = []
//     createRandom()
//     function createRandom(){
//         for (let i = 0; i < widthGame; i+=40) {
//             myRandom.push(i)
//         }
//     }
    
//     document.addEventListener("keydown", event => {
//         if(event.key==="ArrowLeft"){moveLeft();}
//         if(event.key==="ArrowRight"){moveRight();}
//       });
    
    
//     boxs.forEach(box=>{
//         box.addEventListener('animationiteration', () => {
//             var random = Math.floor(  Math.random() * (myRandom.length - 0));
//             random = myRandom[random]
//             box.style.left = random + "px";
//             counter++;
//             // console.log(counter);
//         });
    
//     })
    
//     boxs.forEach(box=>{
//     let intervalFead = setInterval(function(){
//         let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
//         let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         let blockLeft = parseInt(window.getComputedStyle(box).getPropertyValue("left"));
//         let blockTop = parseInt(window.getComputedStyle(box).getPropertyValue("top"));
//         if(characterLeft == blockLeft && blockTop < characterTop  && blockTop > characterTop - 40){
//             console.log("Game over. Score: " + counter);
//             block.style.animation = "none";
//             character.classList.add('dead')
//             boxs.forEach(box=>{
//                 if(startPlay){
//                     box.style.animationPlayState = 'paused';
//                 }
//             })
            
//             setTimeout(() => {
//             playerLose()
//             }, 500);
//             clearInterval(intervalFead)
//         }
//     },1);
    
//     })
    
    
    
    
//         function moveLeft(){
//             let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
//             left -= 40;
//             if(left>=0){
//                 character.style.left = left + "px";
//             }
//         }
    
//         function moveRight(){
//             let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
//             left += 40;
//             if(left<widthGame){
//                 character.style.left = left + "px";
//             }
//         }
    
    
//         function playerLose(){
//             pop_lose_game.classList.add('start')
//             clearInterval(timeInter)
    
//         }
    
//         function playerWin(){
//             pop_win_game.classList.add('start')
//             clearInterval(timeInter)
    
//         }
    
//     }