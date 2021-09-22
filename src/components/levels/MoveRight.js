export  const MoveRight = ({character, window}) => {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 40;
    if(left>=0){
        character.style.left = left + "px";
    }
}
