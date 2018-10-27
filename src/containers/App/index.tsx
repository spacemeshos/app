// it is important to import the react package before anything else

import * as React from "react";
import Routing, { Router } from '../../utils/routing';
import { Provider } from 'react-redux';
import store from '../../store'
import SecondPage from '../SecondPage';
import FirstPage from '../FirstPage';
import WalkThrough from '../WalkThrough';

const { Route, Switch } = Routing;

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={FirstPage} />
        <Route exact={true} path="/second" component={SecondPage} />
        <Route exact={true} path="/walkthrough" component={WalkThrough} />
      </Switch>
    </Router>
  </Provider>
);

export default App;