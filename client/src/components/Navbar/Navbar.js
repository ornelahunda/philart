
import React, { Component } from 'react';
import { Navbar, Nav, NavItem , MenuItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">PubArt Philly</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              Art Near Me
            </NavItem>

     <NavDropdown eventKey={3} title="Register" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} componentClass={Link} href="/about" to="/login">Login</MenuItem>
        <MenuItem eventKey={3.2}componentClass={Link} href="/about" to="/register">Register</MenuItem>
        {/* Logout option */}
 
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Google Maps</MenuItem>
      </NavDropdown>






            {/* <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News */}

            {/* </NavItem> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

