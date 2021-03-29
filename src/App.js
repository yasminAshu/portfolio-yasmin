import React from 'react'
import './App.scss';
import './scss/index.scss'
import { Home} from './components/home/home.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path= '/' exact component= {Home}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
