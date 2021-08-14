import React from "react";
import { FaRegBuilding, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import { useGitfinderContext } from "../context/store";

const User = () => {
  const { gitUser } = useGitfinderContext();
  const {
    avatar_url,
    name,
    bio,
    html_url,
    company,
    location,
    blog,
    twitter_username,
  } = gitUser;

  return (
    <div className="user-profile-wrapper bg-dark rounded h-100 p-4">
      <div className="git-user">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
            <img
              className="rounded-circle"
              width="90"
              height="90"
              src={avatar_url}
              alt={name}
            />
            <h4 className="fs-4 d-flex flex-column ps-3 text-white">
              {name}{" "}
              <span className="fs-5">
                @{twitter_username ? twitter_username : "John Doe"}
              </span>
            </h4>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
            <a
              target="_blank"
              href={html_url}
              className="btn btn-rounded bg-white text-dark"
              rel="noreferrer"
            >
              Follow
            </a>
          </div>
        </div>
        <div className="detail pt-4">
          <p className="text-white">{bio && bio}</p>
          <ul className="git-finder-list" style={{ margin: 0, padding: 0 }}>
            {company && (
              <li className="text-white mb-3">
                <FaRegBuilding className="me-4 fs-5" /> {company}
              </li>
            )}
            {location && (
              <li className="text-white mb-3">
                <FaMapMarkerAlt className="me-4 fs-5" /> {location}
              </li>
            )}
            {blog && (
              <li className="text-white">
                <FaLink className="me-4 fs-5" />
                <a
                  className="text-decoration-none text-info"
                  target="_blank"
                  href={`//${blog}`}
                  rel="noreferrer"
                >
                  {blog}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
