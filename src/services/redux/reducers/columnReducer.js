const initialState = {};

export const column = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COLUMN": {
      const { id, title } = action.payload;
      return {
        ...state,
        [id]: { id: id, title: title, cards: [] },
      };
    }

    case "EDIT_COLUMN_TITLE": {
      const { id, title } = action.payload;
      return {
        ...state,
        [id]: { ...state[id], title: title },
      };
    }

    case "REMOVE_COLUMN": {
      const { columnId } = action.payload;
      const { [columnId]: deletedColumn, ...restOfColumns } = state;
      return restOfColumns;
    }

    case "ADD_CARD": {
      const { columnId, cardId } = action.payload;
      return {
        ...state,
        [columnId]: { ...state[columnId], cards: [...state[columnId].cards, cardId] },
      };
    }

    case "REMOVE_CARD": {
      const { cardId, columnId } = action.payload;
      return {
        ...state,
        [columnId]: {
          ...state[columnId],
          cards: state[columnId].cards.filter((id) => id !== cardId),
        },
      };
    }

    case "MOVE_CARD": {
      const { oldCardId, newCardId, oldColId, newColId } = action.payload;

      // Move within the same column
      if (oldColId === newColId) {
        const newCards = Array.from(state[oldColId].cards);
        const [removedCard] = newCards.splice(oldCardId, 1);
        newCards.splice(newCardId, 0, removedCard);
        return {
          ...state,
          [oldColId]: { ...state[oldColId], cards: newCards },
        };
      }

      // Move card from one column to another
      const sourceCards = Array.from(state[oldColId].cards);
      const [removedCard] = sourceCards.splice(oldCardId, 1);
      const destinationCards = Array.from(state[newColId].cards);
      destinationCards.splice(newCardId, 0, removedCard);
      return {
        ...state,
        [oldColId]: { ...state[oldColId], cards: sourceCards },
        [newColId]: { ...state[newColId], cards: destinationCards },
      };
    }
    
    default:
      return state;
  }
};
