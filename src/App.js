import React, { useState, useEffect } from "react";
import axios from "axios";
import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/Signup";
import NavMenu from "./components/nav-menu/NavMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ChoseDate from "./components/calendar/Calendar";
import Results from "./steps/results/Results";
import UserContext from "./components/context/userContext";
import Welcome from "./components/welcome/Welcome";
import Stepper from "./steps/Stepper";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({});

const App = withStyles(styles)(({ classes }) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     let token = localStorage.getItem("auth-token");
  //     if (token === null) {
  //       localStorage.setItem("auth-token", "");
  //       token = "";
  //     }
  //     const tokenResponse = await axios.post(
  //       "http://localhost:5000/users/tokenIsValid",
  //       null,
  //       { headers: { "x-auth-token": token } }
  //     );
  //     if (tokenResponse.data) {
  //       const userRes = await axios.get("http://localhost:5000/users/", {
  //         headers: { "x-auth-token": token },
  //       });
  //       setUserData({
  //         token,
  //         user: userRes.data,
  //       });
  //     }
  //   };

  //   checkLoggedIn();
  // }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
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
            <Results />
          </Switch>
        </Router>
      </UserContext.Provider>
    </BrowserRouter>
  );
});

export default App;
