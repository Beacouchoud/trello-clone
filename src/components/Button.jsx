import React, { useState } from "react";
import "../static/styles/button.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { AddElement } from "./AddElement";

library.add(faPlus, faTrash, faPenToSquare);

export const Button = ({ boardId, type, columnId }) => {
  const [enableEdit, setEnableEdit] = useState(false);
  const edit = (event) => {
    setEnableEdit(true);
  };
  return (
    (!enableEdit && (
      <button className={`button-container ${type}`} onClick={edit}>
        Add {type}
      </button>
    )) || <AddElement type={type} setEnableEdit={setEnableEdit} boardId={boardId} columnId={columnId}></AddElement>
  );
};
