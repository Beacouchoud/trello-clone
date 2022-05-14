export const addColumn = (dispatch) => (id, title) =>
  dispatch({
    type: "ADD_COLUMN",
    payload: {
      id,
      title,
    },
  });

export const removeColumn = (dispatch) => (columnId, cardsId) =>
    dispatch({
    type: "REMOVE_COLUMN",
    payload: {
        columnId,
        cardsId
    },
});

export const editColumnTitle = (dispatch) => (id, title) =>
    dispatch({
    type: "EDIT_COLUMN_TITLE",
    payload: {
        id,
        title
    },
});

export const addCard = (dispatch) => (columnId, cardId, cardText) => 
    dispatch({
        type: "ADD_CARD",
        payload: {
            columnId,
            cardId,
            cardText
        }
    });

export const removeCard = (dispatch) => (columnId, cardId) => 
    dispatch({
        type: "REMOVE_CARD",
        payload: {
            columnId,
            cardId,
        }
    });

export const editCardText = (dispatch) => (id, text) => 
    dispatch({
        type: "EDIT_CARD_TEXT",
        payload: {
            id, text
        }
    });

