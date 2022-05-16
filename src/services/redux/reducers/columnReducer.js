const initialState = {};

export const column = (state = initialState, action) => {

    switch (action.type) {

      case "ADD_COLUMN": {
        const { id, title } = action.payload;
        return {
          ...state,
          [id]: { id: id, title: title, cards: [] }
        };
      }

      case "EDIT_COLUMN_TITLE": {
        const { id, title } = action.payload;
        return {
          ...state,
          [id]: { ...state[id], title: title }
        };
      }

      case "REMOVE_COLUMN": {
        const { id } = action.payload;
        const { [id]: deletedColumn, ...restOfColumns } = state;
        return restOfColumns;
      }

      case "ADD_CARD": {
        const { columnId, cardId } = action.payload;
        return {
          ...state,
          [columnId]: { ...state[columnId], cards: [...state[columnId].cards, cardId] }
        };
      }

      case "REMOVE_CARD": {
        const { cardId, columnId } = action.payload;
        return {
          ...state,
          [columnId]: {
            ...state[columnId],
            cards: state[columnId].cards.filter((id) => id !== cardId)
          }
        };
      }
      default:
        return state;
    }
  };