import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
// import ShareNav from "../components/ShareNav";
// import SearchBar from "../components/SearchBar";
// import Photo from "../components/Photo";
import ReactFooter from "../components/ReactFooter";
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap';


class Collections extends Component {

    state = {
        saved: true,
        mycollection: []
    };

    componentDidMount() {
        this.getCollection();
    }

    getCollection = () => {
        console.log('hacky user: ' + window.hackyUser)
        API.getCollection(window.hackyUser)
            .then(res => {
                console.log(res.data)
                this.setState({ mycollection: res.data.mycollection });
                return res;
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div>

                <div className="flex-wrapper">
                    <Header />

                    <main className="container">

                        <div>
                            {this.state.mycollection.length ? (
                                <Grid className="photo-container">

                                    {this.state.mycollection.map(artwork => (

                                        <div className="photo-panel">
                                            <a href={"/artwork/" + artwork._id} >
                                                <div className="photo-content relative">
                                                    <img src={artwork.imageurl} onClick={this.viewArt} data-id={artwork._id} />
                                                    <h4 className="absolute art-title">{artwork.title}</h4>
                                                </div>
                                            </a>


                                        </div>
                                        // <Thumbnail className="photo-panel" src={artwork.imageurl} alt="242x200">
                                        //   <div className="photo-content">
                                        //     <h2>{artwork.title}</h2>
                                        //   </div>
                                        // </Thumbnail>
                                    ))}
                                </Grid>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </div>
                    </main>


                    <ReactFooter />
                </div>

            </div>
        );
    }
}
export default Collections;