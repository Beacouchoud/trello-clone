const initialState = {};

export const card = (state = initialState, action) => {

    switch (action.type) {

      case "ADD_CARD": {
        const { cardText, cardId } = action.payload;
        return { ...state, [cardId]: { text: cardText, id: cardId } };
      }

      case "EDIT_CARD_TEXT": {
        const { id, text } = action.payload;
        return { ...state, [id]: { ...state[id], text: text } };
      }

      case "REMOVE_CARD": {
        const { cardId } = action.payload;
        const { [cardId]: deletedCard, ...restOfCards } = state;
        return restOfCards;
      }

      // Find every card from the deleted list and remove it
      case "REMOVE_LIST": {
        const { cards: cardIds } = action.payload;
        return Object.keys(state)
          .filter(cardId => !cardIds.includes(cardId))
          .reduce(
            (newState, cardId) => ({ ...newState, [cardId]: state[cardId] }),
            {}
          );
      }

      default:
        return state;
    }
  };