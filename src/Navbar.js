import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Redirect} from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
    
     <nav>
      <div className = "container">
      <div class="row">
      <div class="col-sl-3">
      <Link to="/"><button type="button" className="btn btn-default">Home</button></Link>
      </div>
      <div class="col-sl-3">
      <Link to="/portofolio"><button type="button" className="btn btn-default" >Portofolio</button></Link>
      </div>
      <div class="col-sl-3">
      <Link to="/about"><button type="button" className="btn btn-default"  >About me</button></Link>
      </div>
      <div class="col-sl-3"> 
      <Link to="/experience"><button type="button" className="btn btn-default" >Experience</button></Link>
      </div>
      </div>
      </div> 
     </nav>
     
     
    );
  }
}

export default Navbar;



