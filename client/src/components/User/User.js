import React, { Component } from 'react';
// import API from '../utils/API';
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import Photo from "../Photo";
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import 'react-bootstrap';
import './User.css';



class User extends Component {
    render(){
        return(
       <div>
    <h1> Non User </h1>
                <Navbar />
                <SearchBar />
                <Photo />
                <Footer />

        </div>
        );
    }
}



export default User;
