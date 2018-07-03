import React, { Component } from 'react';
import Navbar from "../Navbar";
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


export default class Header extends Component {

render(){
    return(

     <header>
        <Navbar />
        <Jumbotron />

     </header>
);

}}