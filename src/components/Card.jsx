import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../static/styles/card.css";
import { EditElement } from "./EditElement";

export const Card = ({ cardId, columnId }) => {
  const card = useSelector((state) => state.card[cardId]);
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <div className="card-container" onClick={() => setEnableEdit(true)}>
      {(!enableEdit && (<p className="card-description">{card.text || " "}</p>) ||
      <EditElement type={"card"} setEnableEdit={setEnableEdit} hasTitle={false} text={card.text} cardId={cardId} columnId={columnId}></EditElement>)}
    </div>
  );
};
