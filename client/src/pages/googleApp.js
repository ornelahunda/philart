import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'
class App extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1> // title
// MOST IMPORTANT: Here we are passing the Google Maps props down to the MapContainer component as 'google'.
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAIsVz5-LxFA6Ujpkl8bKUzeZV4Ctnu1us',
})(App)
