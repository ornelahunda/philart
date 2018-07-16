import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup,FormControl,Navbar, Button,Thumbnail } from 'react-bootstrap';
import "./SearchBar.css";



class SearchBar extends Component {


render(){
return( 
    <div>
<Row>
    <Col xs={12}>
        <Navbar.Form >
          <FormGroup >
          <FormControl type="text" placeholder="Search" className="search-bar"/>
          </FormGroup>{' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
    </Col>
</Row>
</div>
);
}
}

export default SearchBar;