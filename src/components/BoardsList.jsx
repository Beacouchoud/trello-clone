import React from "react";
import "../static/styles/card.css";
import "../static/styles/column.css";
import "../static/styles/card.css";
import "../static/styles/button.css";
import { BoardElement } from "./BoardElement";
import { useDispatch, useSelector } from "react-redux";
import { AddElement } from "./AddElement";
import { Button } from "./Button";

export const BoardsList = ({ cardId, columnId, index }) => {
  const dispatch = useDispatch();
  const boardsList = useSelector((state) => state.board);
  return (
    <>
      <h1 className="project-title">REACT TRELLO CLONE</h1>
      <div className="main-page-container">
        <div className="boards-container">
          {console.log(boardsList)}
          {Object.keys(boardsList).map((boardId, index) => (
            <BoardElement boardId={boardId} key={boardId} index={index}></BoardElement>
          ))}
          <div className="button-container">
            <Button type="board"></Button>
          </div>
        </div>
      </div>
    </>
  );
};
