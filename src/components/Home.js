import React, { useState } from 'react'
import Map from './Map'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

function Home() {


    return (
        <div className='wrapper_home'> 
            <h1>it is Home</h1>
            <a href='/level1 '><button className='btn_start_game'>Play</button> </a>
        </div>
    )
}

export default Home
