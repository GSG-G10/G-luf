import React, { useState } from 'react'
import Map from './Map'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

function Home() {

    const [page, setPage] = useState(null)




    
    return (
        <div>
             <Map />
            {/* <Router>
                <h1>it is Home</h1>
            <Link to='/level1 '><button className='btn_start_game'  onClick={setPage => setPage('level1')}>Play</button> </Link>
            <Switch>
                    <Route exact path='/' render={() => console.log('home')} />
                    <Route exact path='/level1' render={() => console.log('in game')}  />
                </Switch>
                    {
                        page === 'level1' ? <Map />: null
                    }
            </Router> */}
        </div>
    )
}

export default Home
