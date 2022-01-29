import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import URL_REDIRECT from '../Constants/routes';
import HeaderContainer from '../Components/shared/header/headerContainer';

const AppRoute = AppComponent => {
    const mapStateToProps = (state) => {
        const { user } = state;
        return {
          isUserLoggedIn: user.isUserLoggedIn
        }
    };

    class ProtectRoute extends Component {
        render() {
            const { isUserLoggedIn } = this.props;
            if (isUserLoggedIn) {
                return (
                    <div>
                        <HeaderContainer />
                        <AppComponent />
                    </div>
                );
            }
            return (
                <Redirect to={URL_REDIRECT.LOGIN} />
            );
        }
    }
    return connect(mapStateToProps)(ProtectRoute);
};

export default AppRoute;