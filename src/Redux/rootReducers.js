import { combineReducers } from 'redux';
import  authReducer  from './auth/reducers';

const rootReducer = combineReducers({
    user: authReducer
  });
  
  export default rootReducer;
