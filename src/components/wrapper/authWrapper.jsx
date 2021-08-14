import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="preloader-wrapper vh-100 d-flex align-items-center justify-content-center">
        <div
          style={{ width: "3rem", height: "3rem" }}
          className="spinner-grow text-secondary"
        ></div>
      </div>
    );
  }
  if (error) {
    <div className="error-msg vh-100 d-flex align-items-center justify-content-center">
      <h3 className="display-3">{error.message}</h3>
    </div>;
  }

  return <>{children}</>;
};

export default AuthWrapper;
