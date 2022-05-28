import React, { useEffect, useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { moveCard, moveColumn } from "../services/redux/actions";
import "../static/styles/board.css";
import { Button } from "./Button";
import { Column } from "./Column";
import { Link, useParams } from "react-router-dom";
import "../static/styles/column.css";
import "../static/styles/card.css";
import "../static/styles/button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const Board = ({}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const boardId = params.boardId;
  const board = useSelector((state) => state.board[boardId]);
  const [hideButton, setHideButton] = useState(false);
  useEffect(() => {
    board.columns.length < 5 ? setHideButton(false) : setHideButton(true);
  }, [board.columns.length]);
  const handleDragEnd = ({ source, destination, type }) => {
    if (!destination) return;
    if (type === "column") {
      if (source.index !== destination.index) {
        dispatch(moveColumn(boardId, source.index, destination.index));
      }
      return;
    } else {
      if (source.index !== destination.index || source.droppableId !== destination.droppableId) {
        dispatch(moveCard(source.index, destination.index, source.droppableId, destination.droppableId));
      }
    }
  };
  return (
    <div className="board-container">
      <div className="title-container">
        <h1>{board.title}</h1>
        <Link to={"/"}>
          <FontAwesomeIcon className="big-icon" icon={faHouse}></FontAwesomeIcon>
        </Link>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided, snapshot) => (
            <div className="flex-container" ref={provided.innerRef}>
              {board.columns.map((columnId, index) => {
                return <Column boardId={boardId} columnId={columnId} key={columnId} index={index}></Column>;
              })}
              {hideButton || <Button type="column" boardId={boardId}></Button>}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
