import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import loginImg from "../images/login-img.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="login-page vh-100 d-flex flex-column align-items-center justify-content-center">
            <img src={loginImg} width="600px" alt="user-login" />
            <h1 className="display-2 mt-3">Git Finder</h1>
            <button className="btn btn-secondary" onClick={loginWithRedirect}>
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
