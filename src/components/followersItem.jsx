import React from "react";

const FollowersItem = ({ avatar_url, login, html_url }) => {
  return (
    <li className="d-flex align-items-center mb-3">
      <span>
        <img
          className="rounded-circle"
          width="65"
          height="65"
          src={avatar_url}
          alt=""
        />
      </span>
      <span className="ps-3">
        <h5 className="fs-5 text-white m-0">{login}</h5>
        <a
          target="_blank"
          className="text-info text-decoration-none"
          href={html_url}
          rel="noreferrer"
        >
          {html_url}
        </a>
      </span>
    </li>
  );
};

export default FollowersItem;
