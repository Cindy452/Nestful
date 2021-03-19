import React, { useState, useEffect } from "react";
import axios from "axios";
import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import UserContext from "./components/context/userContext";
import Stepper from "./steps/Stepper";
import { withStyles } from "@material-ui/core/styles";
import Welcome from "./components/welcome/Welcome";
import NavMenu from "./components/nav-menu/NavMenu";

const styles = (theme) => ({});

const App = withStyles(styles)(({ classes }) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "https://nestful-api.herokuapp.com/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get(
          "https://nestful-api.herokuapp.com/users/",
          {
            headers: { "x-auth-token": token },
          }
        );
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Router>
          <NavMenu currentTitle={currentTitle} />
          <Switch>
            <Route exact path="/">
              <Stepper setCurrentTitle={setCurrentTitle} />
            </Route>
            <Route path="/signup">
              <SignUp setCurrentTitle={setCurrentTitle} />
            </Route>
            <Route path="/signin">
              <SignIn setCurrentTitle={setCurrentTitle}  />
            </Route>
            <Route path="/welcome">
              <Welcome setCurrentTitle={setCurrentTitle}  />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </BrowserRouter>
  );
});

export default App;
