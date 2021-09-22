import reactDom from "react-dom";


export  const MoveLeft = (character,divRef, window) => {

    // console.log(window.getComputedStyle(reactDom.findDOMNode(divRef.character)).getPropertyValue("left"));

    console.log(window.getComputedStyle(divRef.character).left);

    // let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    // left -= 40;
    // if(left>=0){
    //     character.style.left = left + "px";
    // }
}
