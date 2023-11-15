import React from "react";
import Button from "./UI/Button";
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>DeSantiago</h1>
      </div>
      <nav>
        {/* <Button textOnly={true}>Cart (0)</Button> */}
        <button className="text-button">Cart (0)</button>
      </nav>
    </header>
  );
};

export default Header;
