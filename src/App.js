import React from 'react';
import Stepper from './steps/Steps';
import SignIn from './components/signin/Signin';
import SignUp from './components/signup/Signup';
import Home from './components/Home';
import NavMenu from './components/navbar/NavMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/">
        <NavMenu />
        <Stepper />
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/signin">
        <SignIn />
        </Route>
        <Route path="/home">
        <Home />
        </Route>
      </Switch>
  </Router>
 );
}

export default App;
