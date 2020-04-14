import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <NavBar/>
    <Router>
      <div>
        <switch>
          <Route exact path='/'>
            </Route>
            <Route exact path='/Home'>
            </Route>
        </switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
