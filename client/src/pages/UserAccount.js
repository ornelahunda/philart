import React, { Component } from 'react';
import API from '../utils/API';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Photo from "../components/Photo";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import 'react-bootstrap';


class UserAccount extends Component {
 
    render() {
        // return (<div></div>)
       return (
       <div>
           <h1> User logged in </h1>

             <SearchBar />
                {/* <Navbar />
               


                <Photo />
                <Footer /> */}

        </div>
    );
    }
}

export default UserAccount;

