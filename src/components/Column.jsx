import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../static/styles/column.css";
import { Button } from "./Button";
import { Card } from "./Card";
import { EditElement } from "./EditElement";

export const Column = ({columnId, index}) => {
  const dispatch = useDispatch();
  const column = useSelector((state) => state.column[columnId]);
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <div className="column-container">
      {!enableEdit && (
      <p className="column-name" onClick={() => setEnableEdit(true)}>{column.title}</p>
      ) || <EditElement className="edit" type={"column"} setEnableEdit={setEnableEdit} columnId={columnId} title={column.title}></EditElement>}
      {column.cards && column.cards.map((cardId, index) => 
      <Card key={cardId} cardId={cardId} index={index} columnId={column.id} />)}
      <Button type="card" columnId={columnId}></Button>
    </div>
  );
};
