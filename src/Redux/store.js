import ReduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducers';

const middleware = applyMiddleware(thunk, logger, ReduxPromise);
const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;