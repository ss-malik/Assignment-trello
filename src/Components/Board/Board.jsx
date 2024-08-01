import React from "react";
import "./Board.css";
import { IoIosMore } from "react-icons/io";
import Card from "../Card/Card";

const Board = () => {
  return (
    <div className="board">
      <div className="board-top">
        <p className="board-top-title">
          To Do
          <span>2</span>
        </p>
        <IoIosMore />
      </div>
      <div className="board-cards">
        <Card />
      </div>
    </div>
  );
};

export default Board;
