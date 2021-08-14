import React from "react";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { useGitfinderContext } from "../context/store";
import CoreInfoItem from "./coreInfoItem";

const UserCoreInfo = () => {
  const { gitUser } = useGitfinderContext();
  const { public_repos, public_gists, followers, following } = gitUser;

  const infoItem = [
    {
      id: 1,
      icon: <GoRepo className="info-icon" />,
      label: "Repos",
      value: public_repos,
    },
    {
      id: 2,
      icon: <FiUsers className="info-icon" />,
      label: "Followers",
      value: followers,
    },
    {
      id: 3,
      icon: <FiUserPlus className="info-icon" />,
      label: "Following",
      value: following,
    },
    {
      id: 4,
      icon: <GoGist className="info-icon" />,
      label: "Gists",
      value: public_gists,
    },
  ];
  return (
    <div className="row">
      <div className="col-12 mt-5">
        <div className="row">
          {infoItem.map((item) => {
            return <CoreInfoItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserCoreInfo;
