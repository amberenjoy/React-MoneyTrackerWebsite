import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './containers/Home';
import Create from './containers/Create';

function App() {
  return (
    <Router>
      <div className='App container'>
        <div className="jumbotron">
          <ul className='nav  nav-pills justify-content-center'>
            <li className='nav-item'> <Link to='/'>Home</Link></li> &nbsp; &nbsp; &nbsp;
          <li className='nav-item'> <Link to='create'>Create</Link></li>
          </ul>
          <br />
          <div className='container'>
            <Route path='/' exact component={Home}></Route>
            <Route path='/create' exact component={Create}></Route>
          </div>
        </div>
        <div className='footer'>
          <hr />
          <p className='text-center'>First React Accounting App</p>
        </div>
      </div>

    </Router>
  );
}

export default App;
