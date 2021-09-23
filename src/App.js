import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Map from './components/Map';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

function App() {

// const [linked, setLinked] = useState('/')

  // useEffect(() => {
  //   console.log('test effect');
  //   console.log(linked);
  //   return () => {
  //     return 'mabye work'
  //   }
  // }, [linked])

  return (

      <Router>
            <Switch>
                <Route exact path='/'  > <Home /> </Route>
                <Route exact path='/level1'  > <Map /> </Route>
            </Switch>
        </Router>

  )

}

export default App;
