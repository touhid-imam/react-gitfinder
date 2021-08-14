import React from "react";
import { useGitfinderContext } from "../context/store";
import FollowersItem from "./followersItem";

const Followers = () => {
  const { followers } = useGitfinderContext();

  return (
    <div className="followers-wrapper bg-dark rounded p-4 mt-xs-3">
      <h4 className="fs-4 text-white">Followers</h4>
      <div className="list-wrap">
        <ul className="git-finder-list y-scoll mt-4">
          {followers.map((follower) => {
            return <FollowersItem key={follower.id} {...follower} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Followers;
