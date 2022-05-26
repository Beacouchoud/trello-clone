export const addColumn = (id, title) => {
  return {
    type: "ADD_COLUMN",
    payload: {
      id,
      title,
    },
  };
};

export const removeColumn = (columnId) => {
  return {
    type: "REMOVE_COLUMN",
    payload: {
      columnId,
    },
  };
};

export const editColumnTitle = (id, title) => {
  return {
    type: "EDIT_COLUMN_TITLE",
    payload: {
      id,
      title,
    },
  };
};

export const addCard = (columnId, cardId, cardText) => {
  return {
    type: "ADD_CARD",
    payload: {
      columnId,
      cardId,
      cardText,
    },
  };
};

export const removeCard = (columnId, cardId) => {
  return {
    type: "REMOVE_CARD",
    payload: {
      columnId,
      cardId,
    },
  };
};

export const editCardText = (id, text) => {
  return {
    type: "EDIT_CARD_TEXT",
    payload: {
      id,
      text,
    },
  };
};
