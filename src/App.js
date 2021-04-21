import React from 'react'
import './App.scss';
import './scss/index.scss'
import { Home } from './components/home/home.js'
import { About } from './components/about/about';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from './components/navbar/navbar';
import {Footer} from './components/footer/footer'
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path= '/' exact component= {Home}>
        </Route>
        <Route path= '/About' exact component= {About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
