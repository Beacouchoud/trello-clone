import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editCardText, removeCard, removeColumn, editColumnTitle } from "../services/redux/actions";
import "../static/styles/column.css";
import "../static/styles/card.css";
import "../static/styles/button.css";
export const EditElement = ({ type, setEnableEdit, hasTitle, text, title, cardId, columnId }) => {
  const dispatch = useDispatch();

  const [cardText, setCardText] = useState(text);

  useEffect(() => {
    dispatch(editCardText(cardId, cardText));
  }, [cardText]);

  const inputRef = useRef({ value: text });
  const handleCardText = () => {
    setCardText(inputRef.current.value);
  };

  const [columnTitle, setColumnTitle] = useState(title);

  useEffect(() => {
    dispatch(editColumnTitle(columnId, columnTitle || "Title"));
  }, [columnTitle]);

  const titleRef = useRef({ value: title });
  const handleTitle = () => {
    setColumnTitle(titleRef.current.value);
  };
  const changeColumnTitle = () => {
    dispatch(editColumnTitle(columnId, columnTitle));
    titleRef.current.value = "";
    setEnableEdit(false);
  };
  return (
    <div className="edit-container">
      {type === "column" && (
        <>
          <FontAwesomeIcon className="icon trash" icon="trash" onClick={() => dispatch(removeColumn(columnId))} />

          <div className="input-container column edit-column" onBlur={() => setEnableEdit(false)}>
            <input type={"text"} placeholder={text} value={columnTitle} ref={titleRef} onChange={handleTitle}></input>
          </div>
          <FontAwesomeIcon className="icon plus" icon="plus" onClick={changeColumnTitle} />
        </>
      )}

      {type === "card" && (
        <>
          <FontAwesomeIcon className="icon trash" icon="trash" onClick={() => dispatch(removeCard(columnId, cardId))} />
          {/* <TextInput setEnableEdit={setEnableEdit} text={cardText} setCardText={setCardText}></TextInput> */}
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
            <FontAwesomeIcon className="icon plus" icon="plus" onClick={handleCardText} />
          </>
        </>
      )}
    </div>
  );
};
