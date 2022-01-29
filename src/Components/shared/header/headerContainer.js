import { connect } from 'react-redux';
import Header from './headerComponent';

const mapStateToProps = (state) => {
    const { user } = state;
    return {
      userInfo: user.userInfo
    }
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
