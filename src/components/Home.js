import React, { useState } from 'react'
import Map from './Map'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

function Home() {


    return (
        <div className='wrapper_home'> 
          <div className='wraper_h_2'>
             <h1 className='title_home'>Let's Play Now</h1>
            <a href='/level1 ' className='linke_to_game'><button className='btn_start_game'>Play</button> </a>
          </div>
        </div>
    )
}

export default Home
