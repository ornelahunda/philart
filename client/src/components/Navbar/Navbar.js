
import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem , MenuItem, NavDropdown} from 'react-bootstrap';

import './Navbar.css';

export default class MainNavbar extends Component {

state = {
    user: null
};

componentDidMount() {
    this.getUser();
}

getUser = () => {
    // api call
    API.getUser()
        .then(res => {
            this.setState(res.data);
            window.hackyUser = res.data.user._id;
            console.log('navbar user: ' + window.hackyUser);
        })
        .catch(err => console.log(err));
}

logoutUser = event => {
    event.preventDefault();
    API.logoutUser().then(res => {
        console.log(res.data);
        if (res.data === true) {
            this.setState({ user: null });
        }
    })
        .catch(err => console.log(err));
}

render() {
    return (

           <Navbar default collapseOnSelect>
           <Navbar.Header>
          <Navbar.Brand>
     
          {this.state.user ? ( <h5>Welcome {this.state.user.username} </h5> ) : (

            <Link to="/">PubArt Philly</Link> )}
          
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>


        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/artsearch" to="/artsearch">
              Search Art
            </NavItem>



     {this.state.user ? ( 
     <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">         
     <MenuItem eventKey={3.1} componentClass={Link} href="/collections" to="/collections">My Collection</MenuItem>
     <MenuItem divider />
     <MenuItem eventKey={3.2} componentClass={Link} href="/" to="/" onClick={this.logoutUser}>Logout
     </MenuItem>
     </NavDropdown>
    ) : (
     <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">     
     <MenuItem eventKey={3.1} componentClass={Link} href="/about" to="/register">Register</MenuItem> 
     <MenuItem divider />            
     <MenuItem eventKey={3.2} componentClass={Link} href="/about" to="/login">Login</MenuItem>

     </NavDropdown>)}
  
    </Nav>
    </Navbar.Collapse>
    </Navbar>
      
    );}}