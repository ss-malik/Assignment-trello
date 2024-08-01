import "./Dashboard.css";
import React from "react";
import Board from "../Board/Board";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-navbar">
        <h2>Trello</h2>
      </div>
      <div className="dashboard-outer">
        <div className="dashboard-boards">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
