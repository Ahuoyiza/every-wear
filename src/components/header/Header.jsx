import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "./header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={Logo} alt="logo" width="170px" height="60px" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/shop">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
