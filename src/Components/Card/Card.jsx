import React from "react";
import { IoIosMore } from "react-icons/io";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-labels"></div>
        <IoIosMore />
      </div>
      <div className="card-title">Task Title</div>

      <div className="card-body">
        <p>detailed description</p>
      </div>
      <div className="card-footer">
        <p>Date</p>
        <p>assigned user</p>
      </div>
    </div>
  );
};

export default Card;
