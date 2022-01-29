import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  Login,
  Products
} from './Components/pages';
import { AppRoute } from './Hoc';
import URL_REDIRECT from './Constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={URL_REDIRECT.LOGIN} component={Login} />
        <Route exact path={URL_REDIRECT.PRODUCTS} component={AppRoute(Products)} />
        <Route exact path="**">
          <Redirect to={URL_REDIRECT.LOGIN} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
