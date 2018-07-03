import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup,FormControl,Navbar, Button,Thumbnail } from 'react-bootstrap';
import "./SearchBar.css";



class SearchBar extends Component {


render(){
return( 
    <div>
<Row>
    <Col xs={10} xsOffset={2}>
        <Navbar.Form >
          <FormGroup>
          <FormControl type="text" placeholder="Search" />
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