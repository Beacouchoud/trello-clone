const initialState = {
  columns: [],
  // {id: number }
};

export const board = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COLUMN": {
      const { id } = action.payload;
      return { ...state, columns: [...state.columns, id] };
    }

    case "REMOVE_COLUMN": {
      const { columnId } = action.payload;
      const newColumns = state.columns.filter((id) => id !== columnId);
      return { ...state, columns: newColumns };
    }

    case "MOVE_COLUMN": {
      const { oldId, newId } = action.payload;
      const newColumns = Array.from(state.columns);
      const [removedColumn] = newColumns.splice(oldId, 1);
      newColumns.splice(newId, 0, removedColumn);
      return { ...state, columns: newColumns };
    }

    default:
      return state;
  }
};
