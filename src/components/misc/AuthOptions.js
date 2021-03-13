import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Button from "@material-ui/core/Button";

function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      ) : (
        <>
          <Button color="inherit" onClick={register}>
            Sign Up
          </Button>
          <Button color="inherit" onClick={login}>
            Sign In
          </Button>
        </>
      )}
    </nav>
  );
}

export default AuthOptions;
