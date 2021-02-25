import React from 'react';
import HorizontalLabelPositionBelowStepper from './steps/Steps';
import SignIn from './components/signin/Signin';
import SignUp from './components/signup/Signup';
import NavMenu from './components/navbar/NavMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavMenu />
    <Switch>
        <Route exact path="/">
        <HorizontalLabelPositionBelowStepper />
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/signin">
        <SignIn />
        </Route>
      </Switch>
  </Router>
 );
}

export default App;
