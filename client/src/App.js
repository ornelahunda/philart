// import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from "react-router-dom";
import Home from './pages/Home';
import Homepage from './pages/Homepage';
import GetArt from './pages/GetArt';
import Artwork from './pages/Artwork';
import ArtSearch from './pages/ArtSearch';
import Collections from './pages/Collections';
import Login from './pages/Login';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';

import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react' ;
import MapContainer from './pages/googleMapContainer';
import './app.css';

// import './App.css';



class App extends Component {

    render() {
      return (
  <Router history={browserHistory}>
    <div className="app">
   
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/callapi" component={GetArt} />
        <Route exact path="/artwork/:id" component={Artwork} />
        <Route exact path="/artsearch" component={ArtSearch} />
        <Route exact path="/collections" component={Collections} />
        {/* <Route path="/:user" component={User}/> */}

        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
      );
    }
    }

export default App;




