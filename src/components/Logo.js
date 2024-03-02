import React from "react";
import logo from "../logo.svg";

function Logo() {
  return (
      <img
        src={logo}
        alt="Logo"
        width="200"
        height="80"
        className="d-inline-block align-top"
      />
  );
}

export default Logo;
