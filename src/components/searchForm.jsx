import React, { useState } from "react";
import { useGitfinderContext } from "../context/store";

const SearchForm = () => {
  const { request, error, searchGitUser, isLoading } = useGitfinderContext();
  const { show, msg } = error;
  const [user, setUser] = useState("");
  // get content from the global context
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGitUser(user);
    }
  };
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="form-wrap">
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className={`form-control shadow-none outline-dark ${
                    show && "is-invalid"
                  }`}
                  placeholder="Enter Github Username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <button type="submit" className="btn btn-dark rounded-0">
                  SEARCH
                </button>
                {show && !isLoading && (
                  <div className="invalid-feedback">{msg}</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="request-wrapper">
          <h3 className="fs-3 text-secondary">Request: {request}/60</h3>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
