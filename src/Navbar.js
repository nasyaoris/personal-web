import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Redirect} from 'react-router'
import {Navbar , Nav, NavDropdown} from 'react-bootstrap'

export class Menu extends React.Component {
  render() {
    return (

<Navbar style={{padding: "2%"}} expand="lg">
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href='/'><Link to='/'><button type="button" className="btn btn-default b">Home</button></Link></Nav.Link>
    <Nav.Link href='/portofolio'><Link to='/portofolio'><button type="button" className="btn btn-default b" >Portofolio</button></Link></Nav.Link>
    <Nav.Link href='/about'><Link to='/about'><button type="button" className="btn btn-default b" >About Me</button></Link></Nav.Link>
    <Nav.Link href='/contact'><Link to='/contact'><button type="button" className="btn btn-default b" >Contact Me</button></Link></Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>


     
    );
  }
}

export default Menu;



