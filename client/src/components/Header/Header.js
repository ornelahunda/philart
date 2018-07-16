import React, { Component } from 'react';
import MainNavbar from "../Navbar";
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


export default class Header extends Component {

render(){
    return(

     <header>
        <MainNavbar />
        <Jumbotron className="hero text-center">
            {/* Conditional for user and non-user */}
            <h1 className="align-middle">{this.props.title}</h1>
        </Jumbotron>

     </header>
);

}}