import React from 'react';
import Stepper from './steps/Steps';
import SignIn from './components/signin/Signin';
import SignUp from './components/signup/Signup';
import NavMenu from './components/navbar/NavMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChoseDate from './components/calendar/Calendar';
import RetiredChecklist from './components/retired/checklist/RetiredChecklist';
import NotRetireChecklist from './components/near-retire/checklist/NotRetireChecklist';
import Results from './components/results/Results';
function App() {
  return (
    <Router>
       <NavMenu />
       <Switch>
        <Route exact path="/">
        <Stepper />
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/calendar">
        <ChoseDate />
        </Route>
        <Route path="/signin">
        <SignIn />
        </Route>
        {/* <Route >
     <NotRetireChecklist/> 
     <Route >
     <RetiredChecklist />
        </Route>
        </Route> */}
        <Results />
      </Switch>
  </Router>
 );
}

export default App;
