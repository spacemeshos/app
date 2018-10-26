// it is important to import the react package before anything else

import * as React from "react";
import Routing, { Router } from '../../utils/routing';
import { Provider } from 'react-redux';
import store from '../../store';
import WalkthroughMobile from '../../components/Walkthrough/walkthrough.mobile';
// import SecondPage from '../SecondPage';
// import FirstPage from '../FirstPage';
// Route
const { Switch } = Routing;

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <WalkthroughMobile/>
      </Switch>
    </Router>
  </Provider>
);

export default App;