import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import URL_REDIRECT from '../../../Constants/routes';
import './headerComponent.css';

class Header extends Component {

    renderPageHeader() {
        const { userInfo } = this.props;
        const { fname, lname } = userInfo
        return (
            <div className="header">
                <div>
                    <a className="active" href="#home">Products</a>
                    <a href="#contact">Orders</a>
                    <a href="#about">Settings</a>
                </div>
                <a className="header-right">{lname + ', ' + fname}</a>
            </div>
        );
    }

    render() {
        const { userInfo } = this.props;
        console.log('userInfo ===> ', userInfo);
        if (!userInfo) {
            return (
                <Redirect to={URL_REDIRECT.LOGIN} />
            )
        }
        return (
            <div>
                {this.renderPageHeader()}
            </div>
        );
    }

}

export default Header;