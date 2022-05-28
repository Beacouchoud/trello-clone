import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/styles/card.css";
import "../static/styles/column.css";
import "../static/styles/card.css";
import "../static/styles/button.css";
import { useDispatch, useSelector } from "react-redux";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { removeBoard } from "../services/redux/actions";
import { EditElement } from "./EditElement";

export const BoardElement = ({ boardId }) => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board[boardId]);
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <div className="board-element-container">
      <div className="creation-date">{board.date}</div>
      <div className="board-name">
        {(!enableEdit && <p>{board.title}</p>) || (
          <EditElement
            className="edit"
            type={"board"}
            setEnableEdit={setEnableEdit}
            boardId={boardId}
            name={board.title}
          ></EditElement>
        )}
      </div>
      <div className="delete-board">
        <FontAwesomeIcon className="icon trash" icon="trash" onClick={() => dispatch(removeBoard(boardId))} />
      </div>
      <div className="edit-board">
        <FontAwesomeIcon className="icon edit-icon" icon={faPenToSquare} onClick={() => setEnableEdit(true)} />
      </div>
    </div>
  );
};
