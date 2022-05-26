import React, { useEffect, useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { moveCard, moveColumn } from "../services/redux/actions";
import "../static/styles/board.css";
import { Button } from "./Button";
import { Column } from "./Column";
import "../static/styles/column.css";
import "../static/styles/card.css";
import "../static/styles/button.css";

export const Board = ({}) => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const [hideButton, setHideButton] = useState(false);
  useEffect(() => {
    board.columns.length < 5 ? setHideButton(false) : setHideButton(true);
  }, [board.columns.length]);
  const handleDragEnd = ({ source, destination, type }) => {
    if (!destination) return;
    if (type === "column") {
      if (source.index !== destination.index) {
        dispatch(moveColumn(source.index, destination.index));
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
      <h1>Board Name</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided, snapshot) => (
            <div className="flex-container" ref={provided.innerRef}>
              {board.columns.map((columnId, index) => {
                return <Column columnId={columnId} key={columnId} index={index}></Column>;
              })}
              {hideButton || <Button type="column"></Button>}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
