import React from "react";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import logo from "../../logoEthinking.png";

const MainHeader = (props) => {
  return (
    <>
      <header className={classes["main-header"]}>
        <img src={logo} alt="logo"></img>
        <Navigation />
      </header>
    </>
  );
};

export default MainHeader;
