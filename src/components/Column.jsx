import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../static/styles/column.css";
import { Button } from "./Button";
import { Card } from "./Card";

export const Column = ({columnId, index}) => {
  const dispatch = useDispatch();
  const column = useSelector((state) => state.column[columnId]);

  return (
    <div className="column-container">
      <p className="column-name">{column.title}</p>
      {column.cards && column.cards.map((cardId, index) => 
      <Card key={cardId} cardId={cardId} index={index} columnId={column.id} />)}
      <Button type="card"></Button>
    </div>
  );
};
