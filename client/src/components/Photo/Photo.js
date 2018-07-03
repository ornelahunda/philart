
import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button, Thumbnail } from 'react-bootstrap';
import './Photo.css';
import { ListGroup } from 'react-bootstrap';

export default class Photo extends Component {

  state = {
    artwork: []
  };

  componentDidMount() {
    this.loadArt();
  }

  loadArt = () => {
    console.log("loading artwork");
    API.getArt()
      .then(res => {
        this.setState({ artwork: res.data })
        console.log(this.state.artwork[0].title)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.artwork.length ? (
          <Grid className="photo-container">

            {this.state.artwork.map(artwork => (
              
              <div className="photo-panel">
                <div className="photo-content relative">
                  <img src={artwork.imageurl} />
                  <h4 className="absolute art-title">{artwork.title}</h4>
                </div>
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
      );

  }
}


