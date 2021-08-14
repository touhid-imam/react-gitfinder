import React from "react";

const CoreInfoItem = ({ icon, label, value }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="item-wrapper shadow bg-dark rounded p-3 d-flex flex-column align-items-center">
        {icon}
        <h3 className="fs-3 text-white d-flex flex-column">
          {value} <span className="fs-5 w-100">{label}</span>
        </h3>
      </div>
    </div>
  );
};

export default CoreInfoItem;
