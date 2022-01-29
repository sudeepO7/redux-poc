import { connect } from 'react-redux';
import Login from './loginComponent';
import { setUserInfo, setUserLoggedIn } from '../../../Redux/auth/actions'

const mapStateToProps = (state) => {
    const { user } = state;
    return {
      userInfo: user.userInfo,
      isUserLoggedIn: user.isUserLoggedIn
    }
};

const mapDispatchToProps = dispatch => ({
    setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
    setUserLoggedIn: (isUserLoggedIn) => dispatch(setUserLoggedIn(isUserLoggedIn))
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
