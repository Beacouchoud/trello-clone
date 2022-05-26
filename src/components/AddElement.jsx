import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addCard, addColumn } from "../services/redux/actions";
import { generateId } from "../services/utils";

export const AddElement = ({ type, setEnableEdit, columnId }) => {


  const [cardText, setCardText] = useState("");
  const [columnTitle, setColumnTitle] = useState("");
  const inputRef = useRef({ value: cardText });
  const titleRef = useRef({ value: columnTitle });
  const dispatch = useDispatch();

  const cleanValue = () => {
    cancelCreation();
  };
  const cancelCreation = () => {
    inputRef.current.value="";
    setEnableEdit(false);
  }
  const handleText = (ev) => {
    setCardText(ev.target.value);
  }
  const handleTitle = (ev) => {
    setColumnTitle(ev.target.value);
  }
  const createNewCard = () => {
    let cardId = generateId("card");
    dispatch(addCard(columnId, cardId, cardText));
    cleanValue();
  }
  const createNewColumn = () => {
    let columnId = generateId("column");
    dispatch(addColumn(columnId, columnTitle));
    cleanValue();
  }
  return (
    <div className="edit-container">
      {type === "card" ? (
        <>
        <FontAwesomeIcon className="icon trash" icon="trash" onClick={cancelCreation} />
        <div className="input-container card">
          <textarea 
            type={"text"} 
            placeholder={"Write here the card content..."} 
            ref={inputRef} 
            value={cardText}
            onChange={handleText}></textarea>
        </div>
        <FontAwesomeIcon
          className="icon plus"
          icon="plus"
          onClick={createNewCard}
        />
      </>
      ) : (
        <>
        <FontAwesomeIcon className="icon trash" icon="trash" onClick={cancelCreation} />
        <div className={`input-container column new-column`}>
          <input ref={titleRef} value={columnTitle}  onChange={handleTitle} type={"text"} placeholder={"Add title..."}></input>
        </div>
        <FontAwesomeIcon className="icon plus" icon="plus" onClick={createNewColumn}/>
      </>
      )}
    </div>
  );
};
