import Timer from './Timer'

export default  function Lose({pop_lose_game,timeInter}){
    pop_lose_game.classList.add('start')
    clearInterval(timeInter)

}