const initialState = {
  // columns: [],
  // {id: number }
};

export const board = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOARD": {
      const { id, title, date } = action.payload;
      return { ...state, [id]: { id: id, title: title, date: date, columns: [] } };
    }

    case "EDIT_BOARD_NAME": {
      const { id, name } = action.payload;
      return {
        ...state,
        [id]: { ...state[id], title: name },
      };
    }

    case "REMOVE_BOARD": {
      const { boardId } = action.payload;
      delete state[boardId];
      return { ...state };
    }

    case "ADD_COLUMN": {
      const { boardId, id } = action.payload;
      return {
        ...state,
        [boardId]: { ...state[boardId], columns: [...state[boardId].columns, id] },
      };
    }

    case "REMOVE_COLUMN": {
      const { boardId, columnId } = action.payload;
      const newColumns = state[boardId].columns.filter((id) => id !== columnId);
      return { ...state, [boardId]: { ...state[boardId], columns: newColumns } };
    }

    case "MOVE_COLUMN": {
      const { boardId, oldId, newId } = action.payload;
      const newColumns = Array.from(state[boardId].columns);
      const [removedColumn] = newColumns.splice(oldId, 1);
      newColumns.splice(newId, 0, removedColumn);
      return { ...state, [boardId]: { ...state[boardId], columns: newColumns } };
    }

    default:
      return state;
  }
};
