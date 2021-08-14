import React from "react";
import { useGitfinderContext } from "../context/store";
import Chart from "./chart";
import Followers from "./followers";
import NavBar from "./navBar";
import SearchForm from "./searchForm";
import User from "./user";
import UserCoreInfo from "./userCoreInfo";

const Dashboard = () => {
  const { isLoading } = useGitfinderContext();

  if (isLoading) {
    return (
      <>
        <NavBar />
        <div className="dashboard my-5">
          <div className="container">
            <SearchForm />
            <div className="row mt-5">
              <div className="col-md-12 d-flex justify-content-center pt-5">
                <div
                  style={{ width: "3rem", height: "3rem" }}
                  className="spinner-grow text-secondary"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <NavBar />
      <div className="dashboard my-5">
        <div className="container">
          <SearchForm />
          <UserCoreInfo />
          <div className="row mt-5">
            <div className="col-md-6">
              <User />
            </div>
            <div className="col-md-6">
              <Followers />
            </div>
          </div>
          <div className="row">
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
