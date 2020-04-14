import React from 'react';
import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
