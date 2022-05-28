export const addBoard = (id, title, date) => {
  return {
    type: "ADD_BOARD",
    payload: {
      id,
      title,
      date,
    },
  };
};

export const editBoardName = (id, name) => {
  return {
    type: "EDIT_BOARD_NAME",
    payload: {
      id,
      name,
    },
  };
};

export const removeBoard = (boardId) => {
  return {
    type: "REMOVE_BOARD",
    payload: {
      boardId,
    },
  };
};

export const addColumn = (boardId, id, title) => {
  return {
    type: "ADD_COLUMN",
    payload: {
      boardId,
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

export const moveColumn = (boardId, oldId, newId) => {
  return {
    type: "MOVE_COLUMN",
    payload: {
      boardId,
      oldId,
      newId,
    },
  };
};

export const moveCard = (oldCardId, newCardId, oldColId, newColId) => {
  return {
    type: "MOVE_CARD",
    payload: {
      oldCardId,
      newCardId,
      oldColId,
      newColId,
    },
  };
};
