import './App.css';
import Recipe from './components/Recipe'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import database from '../firebase'
import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    database.ref('sample').set(10)
  }, [])


function App() {

  return (
    <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipe" component={Recipe} />
          </Switch>
        </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
