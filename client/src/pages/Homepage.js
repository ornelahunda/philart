import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import ShareNav from "../components/ShareNav";
import SearchBar from "../components/SearchBar";
import Photo from "../components/Photo";
import ReactFooter from "../components/ReactFooter";
import { Link } from 'react-router-dom';
import 'react-bootstrap';
import './Homepage.css';

class Homepage extends Component {

    render() {
        return (
            <div>

                    <div className="flex-wrapper">
                        <Header />
               
                        <main className="container">
                    
                        <Photo/>
                        </main>


                        <ReactFooter />
                        </div>
               
            </div>
        );
    }
}
export default Homepage;