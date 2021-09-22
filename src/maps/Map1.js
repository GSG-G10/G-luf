import React, { useEffect, useState } from 'react'
import './mapStyles/map1.css'
import styled, { keyframes } from 'styled-components'

    // setDicxy({ ...dicxy, y: ( dicxy.y  <  100 ?  dicxy.y  + 10 : 100)})

 function Map1() {

    const [dicxy, setDicxy] = useState({
        x:50,
        y:0,
        upOn: false,
        widthMap: 0,
        trantX: 0,
        Allwidt:0,
        animate: false,
        plair: {},
        box1: {}
    })


    const handleXY = (e)=>{
        console.log('--------');
                
        let player = document.querySelector('.player')
        let blocks1 = document.querySelector('.blocks1')
        let blocks2 = document.querySelector('.blocks2')
        let blocks3 = document.querySelector('.blocks3')
        let blocks4 = document.querySelector('.blocks4')
        let blocks5 = document.querySelector('.blocks5')
        let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'))
        let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
        let blocks1Bottom = parseInt(window.getComputedStyle(blocks1).getPropertyValue('bottom'))
        let blocks1Left = parseInt(window.getComputedStyle(blocks1).getPropertyValue('left'))
        let blocks1Width = parseInt(window.getComputedStyle(blocks1).getPropertyValue('width'))
        let blocks2Bottom = parseInt(window.getComputedStyle(blocks2).getPropertyValue('bottom'))
        let blocks2Left = parseInt(window.getComputedStyle(blocks2).getPropertyValue('left'))
        let blocks2Width = parseInt(window.getComputedStyle(blocks2).getPropertyValue('width'))
        let blocks3Bottom = parseInt(window.getComputedStyle(blocks3).getPropertyValue('bottom'))
        let blocks3Left = parseInt(window.getComputedStyle(blocks3).getPropertyValue('left'))
        let blocks3Width = parseInt(window.getComputedStyle(blocks3).getPropertyValue('width'))
      

        let map = document.querySelector('.wrapper_map1')
        let mapWidth = map.clientWidth - 50
        // console.log(e.key);
        let timeJump
        console.log(dicxy);

        if(e.key === ' '){
            setDicxy({ ...dicxy, y: 200})
            setTimeout(() => {
                setDicxy({ ...dicxy, y: 0})
            }, 300);
        }
        if(e.key === 'w' || e.key === 'ص'){




            setDicxy({ ...dicxy, y: dicxy.y + 130})
            console.log('player is:', playerBottom, playerLeft);
            console.log('bloxk 1 is: ', blocks1Bottom, blocks1Left);
            console.log('bloxk 2 is: ', blocks2Bottom, blocks2Left);
            console.log('bloxk 3 is: ', blocks3Bottom, blocks3Left);
            // console.log(dicxy);

            
            // // block 3
            // if(playerLeft >= blocks3Left - 50  && playerLeft < blocks3Left + blocks3Width && dicxy.y >  blocks3Left  ){
            //     clearInterval(timeJump)
            //     setDicxy({ ...dicxy, y:  400  })
            //         console.log('you dead 3333333333333333')
            //         return
            // }else{
            //     console.log('back 3333333333333');
            //     timeJump =  setTimeout(() => {
            //         setDicxy({ ...dicxy, y: 0})
            //     }, 300);
            // }


            // block 2
            if(playerLeft >= blocks2Left - 50  && playerLeft < blocks2Left + blocks2Width && dicxy.y >=  blocks1Left -20 ){
                clearInterval(timeJump)
                setDicxy({ ...dicxy, upOn: true})
                setDicxy({ ...dicxy, y:  blocks2Left +40 })
                    console.log('you dead 2222')
                    return
            }else{
                console.log('back 2222');
                timeJump =  setTimeout(() => {
                    setDicxy({ ...dicxy, y: 0})
                }, 300);
            }



            // block 1
            if(playerLeft >= blocks1Left - 50  && playerLeft < blocks1Left + blocks1Width){
                clearInterval(timeJump)
                setDicxy({ ...dicxy, upOn: true})
                setDicxy({ ...dicxy, y:  blocks1Left -20 })
                    console.log(dicxy);
                    console.log('you dead')
                    return
            }else{
                console.log('back');
                timeJump =  setTimeout(() => {
                    setDicxy({ ...dicxy, y: 0})
                }, 300);
            }
      








        }



        if(e.key === 's' || e.key === 'س'){
            setDicxy({ ...dicxy, y: 0})
        }
        if(e.key === 'a' || e.key === 'ش'){
            setDicxy({ ...dicxy, x: (dicxy.x > 0 ?  dicxy.x  - 20 : 0)})
        }
        if(e.key === 'd' || e.key === 'ي'){
            setDicxy({ ...dicxy, x: (dicxy.x < mapWidth ?  dicxy.x +  20 : mapWidth)})
        }



        // console.log('blocks1Left,' , blocks1Left);
        // console.log('blocks1Bottom,' , blocks1Bottom);
        // console.log('dicxy.x,' , dicxy.x);
        // if(dicxy.x > blocks1Left - 50   &&  dicxy.x < blocks1Left + blocks1Width && dicxy.y > blocks1Bottom){

        //     console.log('^^^^^^^^^^^^^^^^^^^^');
        //     // setDicxy({ ...dicxy, y: 0 })

        // }




    }

useEffect(  ()  => {
 document.addEventListener('keypress', handleXY)
return () => {document.removeEventListener('keypress',handleXY)} }, [dicxy.x, dicxy.y])
const styles = {  transform: `translateX(-${dicxy.trantX}px)`, padding: '0px',  };


    return (
        <div className='wrapper_map1'  style={styles}>
            <div className='top_land' ></div>
            <div className='main_land' >
                <div className='player' style={{bottom: dicxy.y , left: dicxy.x}}></div>
                <div className='blocks1'></div>
                <div className='blocks2'></div>
                <div className='blocks3'></div>
                <div className='blocks4'></div>
                <div className='blocks5'></div>
            </div>
            <div className='botm_land' ></div>
        </div>
    )
}
export default Map1



function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
