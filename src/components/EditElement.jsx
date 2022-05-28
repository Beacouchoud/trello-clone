import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editCardText, removeCard, removeColumn, editColumnTitle, editBoardName } from "../services/redux/actions";
import "../static/styles/column.css";
import "../static/styles/card.css";
import "../static/styles/button.css";
import "../static/styles/board.css";
export const EditElement = ({ type, setEnableEdit, boardId, text, title, name, cardId, columnId }) => {
  const dispatch = useDispatch();

  const [cardText, setCardText] = useState(text);
  // useEffect(() => {
  //   dispatch(editCardText(cardId, cardText));
  // }, [cardText]);
  const inputRef = useRef({ value: text });
  const handleCardText = () => {
    setCardText(inputRef.current.value);
  };

  const [columnTitle, setColumnTitle] = useState(title);
  const changeCardText = ()=> {
    dispatch(editCardText(cardId, cardText));
    inputRef.current.value = "";
    setEnableEdit(false);
  }

  // useEffect(() => {
  //   dispatch(editColumnTitle(columnId, columnTitle || "Title"));
  // }, [columnTitle]);
  const titleRef = useRef({ value: title });
  const handleTitle = () => {
    setColumnTitle(titleRef.current.value);
  };
  const changeColumnTitle = () => {
    dispatch(editColumnTitle(columnId, columnTitle));
    titleRef.current.value = "";
    setEnableEdit(false);
  };

  const [boardName, setBoardName] = useState(name);
  const nameRef = useRef({ value: boardName });
  const handleName = (ev) => {
    setBoardName(ev.target.value);
  }
  
  const changeBoardName = () => {
    console.log("asfasdf");
    dispatch(editBoardName(boardId, boardName));
    nameRef.current.value = "";
    setEnableEdit(false);
  };
  return (
    <div className={`edit-container edit-container-${type}`}>
      {type === "column" && (
        <>
          <FontAwesomeIcon className="icon trash" icon="trash" onClick={() => dispatch(removeColumn(boardId, columnId))} />
 
          <div className="input-container column edit-column" onBlur={() => setEnableEdit(false)}>
            <input type={"text"} placeholder={text} value={columnTitle} ref={titleRef} onChange={handleTitle}></input>
          </div>
          <FontAwesomeIcon className="icon plus" icon="plus" onClick={changeColumnTitle} />
        </>
      )}

      {type === "card" && (
        <>
          <FontAwesomeIcon className="icon trash" icon="trash" onClick={() => dispatch(removeCard(columnId, cardId))} />
          <>
            <div className="input-container card" onBlur={() => setEnableEdit(false)}>
              <textarea
                type={"text"}
                placeholder={text}
                ref={inputRef}
                value={text}
                onChange={handleCardText}
                onBlur={handleCardText}
              ></textarea>
            </div>
            <FontAwesomeIcon className="icon plus" icon="plus" onClick={changeCardText} />
          </>
        </>
      )}
      {type === "board" && (
        <>
          <div className="input-container edit-board-input" onBlur={() => {}}>
            <input type={"text"} placeholder={name} value={boardName} ref={nameRef} onChange={handleName}></input>
          </div>
          <FontAwesomeIcon className="icon plus" icon={faCheck} onClick={changeBoardName} />
        </>
      )}
    </div>
  );
};
