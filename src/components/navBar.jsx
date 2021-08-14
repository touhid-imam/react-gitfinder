import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center w-100">
          {isUser && user.picture && (
            <Link to="/" className="navbar-brand">
              <img
                width="60"
                height="60"
                className="rounded-circle"
                src={user.picture}
                alt=""
              />
            </Link>
          )}
          {isUser && user.name && (
            <h2 className="fs-5 fw-bold text-white m-0">{user.name}</h2>
          )}
          {isUser ? (
            <button
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
              className="btn text-white p-1 ms-4"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={loginWithRedirect}
              className="btn text-white p-1 ms-4"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
