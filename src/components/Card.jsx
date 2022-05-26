import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import "../static/styles/card.css";
import { EditElement } from "./EditElement";
import "../static/styles/column.css";
import "../static/styles/card.css";
import "../static/styles/button.css";

export const Card = ({ cardId, columnId, index }) => {
  const card = useSelector((state) => state.card[cardId]);
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <Draggable draggableId={cardId} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="card-container"
            onClick={() => setEnableEdit(true)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {(!enableEdit && <p className="card-description">{card.text || " "}</p>) || (
              <EditElement
                type={"card"}
                setEnableEdit={setEnableEdit}
                hasTitle={false}
                text={card.text}
                cardId={cardId}
                columnId={columnId}
              ></EditElement>
            )}
          </div>
        );
      }}
    </Draggable>
  );
};
