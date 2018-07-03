import React, { Component } from 'react';
import API from '../utils/API';

class GetArt extends Component {
    
    state = {
        artist: null,
        title: null,
        imageUrl: null,
        lat: null,
        lng: null
    };

    componentDidMount() {
        this.getArt();
    }

    getArt = () => {

        // This calls API and retrieves one record. Right now we need to manually change the artwork ID number in the url in server side routes/art-api. We need to create function that will make multiple API calls to retrieve more than one record. Also need to store each record in Mongo DB.
        API.callAPI()
            .then(res => {
                return res;
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
        <div className="container">
            <h1>Call artwork api then store some art to the database.</h1>

                <div>
                    <a className="btn btn-default" onClick={this.getArt}>Get Art</a>
                </div>

        </div>
        );
    }
}
export default GetArt;