import React from "react";
import classes from "./Navigation.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = (props) => {
 
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
 

  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginWithRedirect();
    
  }
  return (
    <>
    <nav className={classes.nav}>
      <ul>
        {isAuthenticated && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <button onClick={loginHandler}>Login</button>
          </li>
        )}
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
