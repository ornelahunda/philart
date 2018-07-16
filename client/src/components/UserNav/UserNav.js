
import React, { Component } from 'react';
import { Navbar, Nav, NavItem , MenuItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

import './UserNav.css';



export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">PubArt Philly</Link>
            {/* <h1>Welcome {this.state.user.username} </h1> */}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClassName={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClassName={Link} href="/about" to="/about">
              Art Near Me
            </NavItem>

     <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} componentClassName={Link} href="/collection" to="/collection">My Collection</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.2} componentClassName={Link} className="btn btn-default" onClick={this.logoutUser}>Logout>
        </MenuItem> 
        {/* Logout option */}
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