import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
class App extends Component {


  render() {
     return (
       <div>
         <h3> hello</h3>
       
      <Router>
        <Navbar />
        {/* <Route exact path="/" render={routerProps => <HomePage {...routerProps} />} /> */}
      </Router>
      </div>
    );
  }
}
 

export default App;
