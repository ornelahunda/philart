import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import API from '../utils/API';

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
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

    render() {
        return (
            <div className="container">
                <h1>Login Page</h1>
                <p className="lead">Please enter your credentials below.</p>
                <form action="/login" method="post" style={ {'maxWidth': '300px'} }>
                    <div className="form-group">
                        <input className="form-control" type='text' name="username" placeholder='Username' value={this.state.username} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type='password' name="password" placeholder='Password' value={this.state.password} onChange={this.handleInputChange} />
                        <button className="btn btn-default" type='submit' onClick={this.handleFormSubmit}>Submit</button>&nbsp;
                        <a className="btn btn-default btn-primary" href='/'>Cancel</a>
                    </div>
                </form>
            </div>
        );
    }
}
export default withRouter(Login);