import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import "../static/styles/column.css";
import { Button } from "./Button";
import { Card } from "./Card";
import { EditElement } from "./EditElement";
import "../static/styles/column.css";
import "../static/styles/card.css";
import "../static/styles/button.css";

export const Column = ({ boardId, columnId, index }) => {
  const column = useSelector((state) => state.column[columnId]);
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided, snapshot) => {
        return (
          <div className="column-container" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {(!enableEdit && (
              <p className="column-name" onClick={() => setEnableEdit(true)}>
                {column.title}
              </p>
            )) || (
              <EditElement
                className="edit"
                type={"column"}
                setEnableEdit={setEnableEdit}
                columnId={columnId}
                boardId={boardId}
                title={column.title}
              ></EditElement>
            )}

            <Droppable droppableId={columnId}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef}>
                  {column.cards &&
                    column.cards.map((cardId, index) => <Card key={cardId} cardId={cardId} index={index} columnId={column.id} />)}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Button type="card" boardId={boardId} columnId={columnId}></Button>
          </div>
        );
      }}
    </Draggable>
  );
};
