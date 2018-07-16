import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import Footer from "../components/ReactFooter";
import Marker from "../components/Marker";
import SearchBar from "../components/SearchBar";
import 'react-bootstrap';
import './Homepage.css';
import GoogleMapReact from 'google-map-react';

class Artwork extends Component {
    static defaultProps = {
        center: {
          lat: 39.969550,
          lng: -75.184500
        },
        zoom: 14
      };

    state = {
        artwork: [],
        center: {},
        zoom: 16    
    };

    componentDidMount() {
        this.getArtwork();
    }

    getArtwork = () => {
        API.getArt()
            .then(res => {
                this.setState({ artwork: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>

                <div>
                    <Header title={this.state.artwork.title}/>
                    <main className="container">
                        <div className="">
                            <SearchBar />
                                
                        </div>
                        <div className="">
                            <div style={{ height: '400px', width: '90%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: 'AIzaSyAIsVz5-LxFA6Ujpkl8bKUzeZV4Ctnu1us' }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                    // center={this.state.center}
                                    // zoom={this.state.zoom}
                                    >

                                    {/* Load all of the artwork on the map - we should wait to load the markers until the user clicks search */}
                                    {this.state.artwork.map(artwork => (
                                        <Marker 
                                        lat={artwork.lat}
                                        lng={artwork.lng}
                                        /> 
                                    ))}
                                    
                                </GoogleMapReact>
                            </div>
                            <button className="btn btn-default btn-large">Get Directions</button>
                        </div> 
                    </main>
                    <Footer />
                </div>

            </div>
        );
    }
}
export default Artwork;