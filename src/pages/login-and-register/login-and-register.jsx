import React from "react";

import Login from "../../components/Login/Login";
import SignUp from "../../components/sign-up/SignUp";

import "./login-and-register.scss";

const LoginAndRegister = () => {
  return (
    <div className="login-and-register">
      <Login />
      <SignUp />
    </div>
  );
};
export default LoginAndRegister;
