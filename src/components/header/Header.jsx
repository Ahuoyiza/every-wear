import React from "react";
import { Link } from "react-router-dom";

import {auth} from "../../firebase/firebase.utils";

import Logo from "../../assets/logo.png";

import "./header.scss";

const Header = ({currentUser}) => (
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
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/login">SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;
