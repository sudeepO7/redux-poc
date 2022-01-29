import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { userLogin } from '../../../Services/authServices';
import URL_REDIRECT from '../../../Constants/routes';
import './loginComponent.css';

class Login extends Component {
    errorMessage = 'Invalid login details';
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        showErrorMessage: false
      };
    }

    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            showErrorMessage: false
        });
    }

    handleLogin = () => {
        const { username, password } = this.state;
        if (username && password) {
            userLogin({ username, password }).then(data => {
                if (data.success && data.data &&
                    data.data.length > 0) {
                    this.props.setUserInfo(data.data[0]);
                    this.props.setUserLoggedIn(true);
                } else {
                    this.setState({
                        showErrorMessage: true
                    });
                }
            });
        }
    }

    renderLoginForm() {
        const { showErrorMessage } = this.state;
        return (
            <div className="p-login-container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.handleFormChange} required />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleFormChange} required />

                <button type="submit" onClick={this.handleLogin}>Login</button>
                {
                    showErrorMessage && (
                        <div>
                            {this.renderErrorMessage()}
                        </div>
                    )
                }
            </div>
        );
    }

    renderErrorMessage() {
        return (
            <p className="p-error-message">{this.errorMessage}</p>
        );
    }

    render() {
        const { isUserLoggedIn } = this.props;
        if (isUserLoggedIn) {
            return (
                <Redirect to={URL_REDIRECT.PRODUCTS} />
            )
        }
        return (
            <div>
                {this.renderLoginForm()}
            </div>
        );
    }
}

export default Login;
