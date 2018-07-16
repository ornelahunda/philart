import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import API from '../utils/API';
import './Login.css';
import {Row,Col } from 'react-bootstrap';

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    // componentDidMount() {
    //     this.clearForm();
    //   }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // this.clearForm();
        event.preventDefault();
        if (this.state.username && this.state.password) {

            API.loginUser({
                username: this.state.username,
                password: this.state.password
            }).then(res => {
                console.log(res);
                this.props.history.push("/");
                // this.history.pushState(null, 'login');
            })
            .catch(err => console.log(err));
            
        
            /*
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
            */
        }   
    };

    // clearForm = () => {
    //     document.getElementById("myForm").reset(); 
    //     this.setState({
    //         username: '',
    //         password: ''
    //     });
    //   };





    render() {
        return (
            <div className="pageContainer"> 
                <div className="loginContainer">

                    <div className="logTitle">
                         <h1 className= "text-center" > Login Page </h1>
                    </div>
              

                    <div class="logBody">
                    <p className="lead" className= "text-center"> <h4> Please enter your credentials below. </h4></p>
                    <br />
                   
                    
            
                    
                    
                <form class= "myFrom" action="/login" method="post" style={ {'maxWidth': '300px'} } class="text-center">
                    
                <div className="form-group">
                    <label class="user" for="login-username"><span class="hidden">Username</span></label>
              
                    <input type='text' name="username" placeholder='Username' value={this.state.username} onChange={this.handleInputChange} />
                    </div>


                <div className="form-group">
                    <label class="lock" for="login-password"><span class="hidden">Password</span></label>
                    
                    <input type='password' name="password" placeholder='Password' value={this.state.password} onChange={this.handleInputChange} />
                </div>


           <Row className="show-grid">
                <Col  xs={6} md={2} xsOffset={4}>
                    <button className="btn btn-default button1" type='submit' onClick={this.handleFormSubmit}>Submit</button>&nbsp;
                </Col>
                <Col  xs={6} md={4} xsOffset={2}>
                    <a className="btn btn-default btn-primary button2" href='/'>Cancel</a> 
               </Col>
         </Row>      
                    </form>
                    </div>
            </div>
            </div>
        );
    }
}



export default withRouter(Login);

               


           
 