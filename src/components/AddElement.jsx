import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard, addCard, addColumn } from "../services/redux/actions";
import { generateId } from "../services/utils";
import "../static/styles/column.css";
import "../static/styles/card.css";
import "../static/styles/button.css";
export const AddElement = ({ type, setEnableEdit, columnId, boardId }) => {
  const [cardText, setCardText] = useState("");
  const [columnTitle, setColumnTitle] = useState("");
  const [boardName, setBoardName] = useState("");
  const inputRef = useRef({ value: cardText });
  const titleRef = useRef({ value: columnTitle });
  const nameRef = useRef({ value: boardName });
  const dispatch = useDispatch();

  const cleanValue = () => {
    cancelCreation();
  };
  const cancelCreation = () => {
    inputRef.current.value = "";
    titleRef.current.value = "";
    nameRef.current.value = "";
    setEnableEdit(false);
  };
  const handleText = (ev) => {
    setCardText(ev.target.value);
  };
  const handleTitle = (ev) => {
    setColumnTitle(ev.target.value);
  };
  const handleName = (ev) => {
    setBoardName(ev.target.value);
  }
  const createNewCard = () => {
    let cardId = generateId("card");
    dispatch(addCard(columnId, cardId, cardText));
    cleanValue();
  };
  const createNewColumn = () => {
    let columnId = generateId("column");
    dispatch(addColumn(boardId, columnId, columnTitle));
    cleanValue();
  };
  const createNewBoard = () => {
    let boardId = generateId("board");
    let date = new Date().toLocaleDateString("es-ES");
    dispatch(addBoard(boardId, boardName, date));
    cleanValue();
  }

  
  return (
    <div className="edit-container">
      {type === "card" && (
        <>
          <FontAwesomeIcon className="icon trash" icon="trash" onClick={cancelCreation} />
          <div className="input-container card">
            <textarea
              type={"text"}
              placeholder={"Write here the card content..."}
              ref={inputRef}
              value={cardText}
              onChange={handleText}
            ></textarea>
          </div>
          <FontAwesomeIcon className="icon plus" icon="plus" onClick={createNewCard} />
        </>
      )}
      {type === "column" && (
        <>
          <FontAwesomeIcon className="icon trash" icon="trash" onClick={cancelCreation} />
          <div className={`input-container column new-column`}>
            <input ref={titleRef} value={columnTitle} onChange={handleTitle} type={"text"} placeholder={"Add title..."}></input>
          </div>
          <FontAwesomeIcon className="icon plus" icon="plus" onClick={createNewColumn} />
        </>
      )}
      {type === "board" && (
        <>
          <FontAwesomeIcon className="icon trash" icon="trash" onClick={cancelCreation} />
          <div className={`input-container column new-column`}>
            <input ref={nameRef} value={boardName} onChange={handleName} type={"text"} placeholder={"Add title..."}></input>
          </div>
          <FontAwesomeIcon className="icon plus" icon="plus" onClick={createNewBoard} />
        </>
      )}
    </div>
  );
};
