import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="error-wrapper vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="Display-1">404 Not Found!</h1>
            <p>Sorry!! The page you are searching is not found</p>
            <Link className="btn btn-secondary" to="/">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
